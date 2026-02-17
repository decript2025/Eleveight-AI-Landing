import Link from 'next/link'
import { createServerApiClient } from 'lib/api-client'

type FAQItem = {
  id: number
  documentId: string
  slug: string
  Question: string
  Answer: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

type FAQResponse = {
  data: FAQItem[]
}

export default async function FAQPage() {
  let items: FAQItem[] = []
  try {
    // Use centralized API client - handles errors, timeouts, retries automatically
    const serverApi = createServerApiClient({ 
      revalidate: 3600,
      cache: 'force-cache'
    })
    const data = await serverApi.get<FAQResponse>('/faqs')
    items = Array.isArray(data?.data) ? data.data : []
  } catch {
    // Error is already logged by api-client, just return empty state
  }

  return (
    <>
      <section className="px-3 md:px-7 md:px-10 py-10 text-foreground pt-32">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#111] border border-[#2a2a2a] overflow-hidden px-[10px] md:px-[48px] py-[64px]">
          <h1 className="text-[46px] font-bold mb-8 text-center">FAQ</h1>
          <h2 className="text-[32px] md:text-[40px] md:text-4xl mb-6 text-center leading-10">Have questions? We&apos;ve got you covered.</h2>
          <p className="text-base md:text-lg mb-10 text-center">
          Explore the most common inquiries about Eleveight AI and how we empower innovation.
          </p>

          {items.length === 0 ? (
            <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 text-sm md:text-base leading-6">
              No FAQs available right now. Please check back later.
            </div>
          ) : (
            // List of FAQ questions as links
            <div className="space-y-0">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className={index === 0 ? '' : 'border-t border-[#2a2a2a]'}
                >
                  <Link
                    href={`/faq/${item.slug}`}
                    className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-[#151515] transition-colors group"
                  >
                    <span className="text-[18px] tracking-wide text-foreground/90 group-hover:text-foreground">
                      {item.Question}
                    </span>
                    <span aria-hidden className="ml-4 shrink-0 text-foreground/50 group-hover:text-foreground/70 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}


