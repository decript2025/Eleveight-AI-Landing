/**
 * Centralized API Client - Similar to Angular HTTP Interceptor
 * Handles all API requests with consistent error handling, timeouts, and retries
 */

const API_BASE_URL = 'https://console.eleveight.ai/api';
const DEFAULT_TIMEOUT = 10000; // 10 seconds
const DEFAULT_RETRIES = 2;

export interface ApiError extends Error {
  status?: number;
  statusText?: string;
  data?: unknown;
}

export interface ApiClientOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  skipErrorHandling?: boolean; // For cases where you want custom error handling
}

/**
 * Creates a timeout promise that rejects after the specified time
 */
function createTimeoutPromise(timeout: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timeout after ${timeout}ms`));
    }, timeout);
  });
}

/**
 * Parses error response and creates a meaningful error message
 */
async function parseErrorResponse(response: Response): Promise<ApiError> {
  let errorData: unknown = null;
  let errorMessage = `Request failed with status ${response.status}`;

  try {
    const text = await response.text();
    if (text) {
      errorData = JSON.parse(text);
      // Try to extract error message from common API response formats
      if (typeof errorData === 'object' && errorData !== null) {
        const data = errorData as Record<string, unknown>;
        const errorObj = data.error;
        const errorMessageFromError = 
          (typeof errorObj === 'object' && errorObj !== null && 'message' in errorObj)
            ? (errorObj as { message: unknown }).message as string
            : typeof errorObj === 'string' ? errorObj : undefined;
        
        errorMessage =
          (data.message as string) ||
          errorMessageFromError ||
          errorMessage;
      }
    }
  } catch {
    // If parsing fails, use the status text or default message
    errorMessage = response.statusText || errorMessage;
  }

  const error = new Error(errorMessage) as ApiError;
  error.status = response.status;
  error.statusText = response.statusText;
  error.data = errorData;
  return error;
}

/**
 * Centralized API client with error handling, timeout, and retry logic
 * Similar to Angular's HTTP interceptor pattern
 * 
 * @param endpoint - API endpoint (will be prefixed with API_BASE_URL)
 * @param options - Fetch options + custom timeout and retries
 * @returns Promise with typed response data
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const {
    timeout = DEFAULT_TIMEOUT,
    retries = DEFAULT_RETRIES,
    skipErrorHandling = false,
    ...fetchOptions
  } = options;

  // Build full URL
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  // Set default headers
  const headers = new Headers(fetchOptions.headers);
  if (!headers.has('Content-Type') && fetchOptions.method !== 'GET') {
    headers.set('Content-Type', 'application/json');
  }

  let lastError: Error | ApiError | null = null;

  // Retry logic
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      // Race between fetch and timeout
      const fetchPromise = fetch(url, {
        ...fetchOptions,
        headers,
        signal: controller.signal,
      });

      const response = await Promise.race([
        fetchPromise,
        createTimeoutPromise(timeout),
      ]);

      clearTimeout(timeoutId);

      // Handle non-OK responses
      if (!response.ok) {
        // Don't retry on 4xx errors (client errors)
        if (response.status >= 400 && response.status < 500) {
          const error = await parseErrorResponse(response);
          if (skipErrorHandling) {
            throw error;
          }
          // Log error for monitoring
          console.error(`[API Client] ${response.status} ${response.statusText}:`, {
            url,
            error: error.message,
            data: error.data,
          });
          throw error;
        }

        // Retry on 5xx errors (server errors) or network errors
        if (attempt < retries) {
          const error = await parseErrorResponse(response);
          lastError = error;
          // Exponential backoff: wait 2^attempt * 100ms
          await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 100));
          continue;
        } else {
          const error = await parseErrorResponse(response);
          if (skipErrorHandling) {
            throw error;
          }
          console.error(`[API Client] Max retries reached for ${url}:`, error);
          throw error;
        }
      }

      // Parse successful response
      try {
        const data = await response.json();
        return data as T;
      } catch {
        // If response is not JSON, return empty object or text
        console.warn(`[API Client] Response is not JSON for ${url}`);
        return {} as T;
      }
    } catch (error) {
      // Handle network errors, timeouts, and aborted requests
      if (error instanceof Error) {
        const isTimeout = error.message.includes('timeout') || error.name === 'AbortError';
        const isNetworkError = error.message.includes('fetch') || error.message.includes('network');

        if (isTimeout || isNetworkError) {
          if (attempt < retries) {
            lastError = error;
            // Exponential backoff
            await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 100));
            continue;
          } else {
            if (skipErrorHandling) {
              throw error;
            }
            console.error(`[API Client] Request failed after ${retries} retries:`, {
              url,
              error: error.message,
            });
            throw error;
          }
        }
      }

      // Re-throw if it's not a retryable error
      if (skipErrorHandling) {
        throw error;
      }
      throw error;
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError || new Error('Unknown error occurred');
}

/**
 * Convenience methods for common HTTP verbs
 */
export const api = {
  get: <T = unknown>(endpoint: string, options?: ApiClientOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = unknown>(endpoint: string, body?: unknown, options?: ApiClientOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T = unknown>(endpoint: string, body?: unknown, options?: ApiClientOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T = unknown>(endpoint: string, body?: unknown, options?: ApiClientOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T = unknown>(endpoint: string, options?: ApiClientOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'DELETE' }),
};

/**
 * Helper for Next.js server components with revalidation
 */
export function createServerApiClient(nextOptions?: {
  revalidate?: number;
  cache?: RequestCache;
}) {
  return {
    get: <T = unknown>(endpoint: string, options?: ApiClientOptions) =>
      apiClient<T>(endpoint, {
        ...options,
        method: 'GET',
        next: nextOptions?.revalidate ? { revalidate: nextOptions.revalidate } : undefined,
        cache: nextOptions?.cache,
      }),
  };
}

