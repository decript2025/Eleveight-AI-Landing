import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createServerApiClient } from 'lib/api-client'

type FAQDetailResponse = {
  data: {
    id: number
    documentId: string
    slug: string
    Question: string
    Answer: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function FAQDetailPage({ params }: Props) {
  const { slug } = await params
    
  let faqData: FAQDetailResponse['data'] | null = null
  
  try {
    // Use centralized API client - handles errors, timeouts, retries automatically
    const serverApi = createServerApiClient({ 
      revalidate: 3600,
      cache: 'force-cache'
    })
    const data = await serverApi.get<FAQDetailResponse>(`/faqs/slug/${slug}`)
    faqData = data?.data || null
  } catch {
    // Error is already logged by api-client, return 404
    notFound()
  }

  if (!faqData) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-foreground px-7 md:px-10 py-10 pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Back to FAQ */}
        <Link 
          href="/faq"
          className="inline-flex items-center text-background font-medium transition-colors mb-8"
        >
          ← Back to FAQ
        </Link>

        <div className="rounded-2xl bg-[#111] border border-[#2a2a2a] overflow-hidden px-[20px] md:px-[48px] py-[64px]">
          {/* Question */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            {faqData.Question}
          </h1>

          {/* Answer */}
          <div className="prose prose-invert max-w-none">
            <p className="text-base md:text-lg leading-relaxed text-foreground whitespace-pre-line">
              {faqData.Answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

