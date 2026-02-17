import Image from 'next/image';
import Link from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'ui/pagination';

interface ArticleImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  image: ArticleImage;
  category?: string;
}

interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface ApiResponse {
  data: Article[];
  meta: PaginationMeta;
}

interface ArticlesResult {
  articles: Article[];
  meta: PaginationMeta;
}

import { createServerApiClient } from 'lib/api-client';

async function getArticles(page: number = 1, pageSize: number = 5): Promise<ArticlesResult> {
  try {
    // Build URL with proper pagination parameters
    const params = new URLSearchParams({
      'populate': '*',
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
      'sort': 'publish_date:desc'
    });
    
    // Use centralized API client - handles errors, timeouts, retries automatically
    const serverApi = createServerApiClient({ revalidate: 60 });
    const data = await serverApi.get<ApiResponse>(`/articles?${params.toString()}`);
    
    return {
      articles: data.data || [],
      meta: data.meta
    };
  } catch {
    // Error is already logged by api-client, just return empty state
    return {
      articles: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 5,
          pageCount: 0,
          total: 0
        }
      }
    };
  }
}

export default async function NewsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string }> 
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;
  const { articles, meta } = await getArticles(currentPage, 5);

  const { page, pageCount } = meta.pagination;
  
  // If requesting a page beyond the pageCount, redirect might be needed
  // but for now we'll just show empty results with proper pagination

  return (
    <div className="min-h-screen bg-white text-black">      
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Latest News
            </h1>
            
            <p className="text-xl mb-12 text-center text-gray-600">
              Stay updated with the latest developments, announcements, and insights from Eleveight AI.
            </p>
            
            <div className="space-y-8">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <article key={article.documentId} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <Link href={`/newsroom/${article.slug}`} className="flex flex-col md:flex-row md:items-start gap-6 group">
                      {article.image && (
                        <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                          <Image
                            src={`https://console.eleveight.ai${article.image.url}`}
                            alt={article.image.alternativeText || article.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {article.category && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                              {article.category}
                            </span>
                          )}
                        </div>
                        
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {article.description}
                        </p>
                        
                        <span className="text-primary font-medium group-hover:underline inline-block">
                          Read more →
                        </span>
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <p className="text-center text-gray-500">No articles available at the moment.</p>
              )}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  {/* Previous Button */}
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious href={`/newsroom?page=${page - 1}`} />
                    </PaginationItem>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNum) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      pageNum === 1 || 
                      pageNum === pageCount || 
                      (pageNum >= page - 1 && pageNum <= page + 1);
                    
                    const showEllipsis = 
                      (pageNum === 2 && page > 3) || 
                      (pageNum === pageCount - 1 && page < pageCount - 2);

                    if (showEllipsis) {
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink 
                          href={`/newsroom?page=${pageNum}`}
                          isActive={pageNum === page}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  {/* Next Button */}
                  {page < pageCount && (
                    <PaginationItem>
                      <PaginationNext href={`/newsroom?page=${page + 1}`} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
