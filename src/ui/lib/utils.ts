import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeHtml(dirty: string): string {
  // Use require for better SSR compatibility
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sanitizeHtmlLib = require('sanitize-html');
  
  return sanitizeHtmlLib(dirty, {
    // Allow common HTML tags for rich content
    allowedTags: [
      'p', 'br', 'strong', 'em', 'u', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'div', 'span',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre'
    ],
    // Allow safe attributes
    allowedAttributes: {
      'a': ['href', 'title', 'target', 'rel'],
      'img': ['src', 'alt', 'width', 'height', 'title'],
      '*': ['class', 'id', 'style']
    },
    // Ensure links open safely
    allowedSchemes: ['http', 'https', 'mailto'],
    // Add rel="noopener noreferrer" to external links
    transformTags: {
      'a': (tagName: string, attribs: Record<string, string>) => {
        if (attribs.href && attribs.href.startsWith('http')) {
          return {
            tagName: 'a',
            attribs: {
              ...attribs,
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          };
        }
        return { tagName, attribs };
      }
    },
    // Remove any script tags and event handlers (default behavior)
  });
}