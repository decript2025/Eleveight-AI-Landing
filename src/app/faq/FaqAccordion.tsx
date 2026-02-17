import { useState } from 'react'

export type FAQItem = {
  id: number
  documentId: string
  Question: string
  Answer: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

type Props = {
  items: FAQItem[]
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.id} className={index === 0 ? '' : 'border-t border-[#2a2a2a]'}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-[#151515]"
            >
              <span className="text-[18px] tracking-wide text-foreground/90">{item.Question}</span>
              <span aria-hidden className="ml-4 shrink-0">
                {isOpen ? (
                  // minus icon
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                ) : (
                  // plus icon
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 pt-2">
                <p className="text-[16px] leading-7 text-foreground/70 whitespace-pre-line">
                  {item.Answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}


