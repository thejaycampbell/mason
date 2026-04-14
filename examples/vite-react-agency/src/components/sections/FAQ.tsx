import { useState } from 'react'

// FAQPage schema — makes answers extractable by AI
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brand identity projects take 2 weeks. Marketing websites take 3–4 weeks. Design systems take 4–6 weeks. These timelines assume one feedback round per stage and responsive communication — we build together, not in isolation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included vs. extra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each service page lists exactly what is included. Revisions during the project are included. Work outside the agreed scope — additional pages, new service types, or major pivots after direction is approved — is scoped and priced separately before we start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Have you worked with companies in my industry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our portfolio covers developer tools, SaaS, climate tech, analytics, and professional services. Industry matters less than stage — most of our clients are between seed and Series B and are refining how they present a product that already works.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Forma different from a larger agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Larger agencies assign juniors after the pitch. At Forma, the designers who present the concepts deliver the final work. We also build the code ourselves — there is no handoff between design and development, which is where most agency projects break down.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not happy with the result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We include 30 days of revisions after final delivery. If after that you feel the work does not meet the brief, we will make it right. In 48 projects we have not had a client leave unhappy, but the policy exists because we stand behind what we deliver.',
      },
    },
  ],
}

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = faqSchema.mainEntity.map((item) => ({
  question: item.name,
  answer: item.acceptedAnswer.text,
}))

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQAccordionItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  const answerId = `faq-answer-${index}`

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-white">{item.question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={answerId}
        role="region"
        hidden={!isOpen}
        className="pb-5"
      >
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="px-6 py-24" aria-labelledby="faq-heading">
      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
          More questions?{' '}
          <a
            href="mailto:hello@forma.studio"
            className="text-brand-500 transition-colors hover:text-brand-500/80"
          >
            Email us
          </a>{' '}
          — we reply same day.
        </p>
      </div>
    </section>
  )
}
