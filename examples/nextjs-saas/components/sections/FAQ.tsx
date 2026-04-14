'use client'

import { useState } from 'react'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How is Dispatch different from Notion or Trello?',
    answer:
      'Notion and Trello are general-purpose tools — they don't handle proposals, e-signatures, invoicing, or client-facing workspaces out of the box. Dispatch is purpose-built for freelancers: the whole lifecycle from proposal to payment is in one place, and clients get a professional portal without you setting it up manually.',
  },
  {
    question: 'Can I import my existing projects and invoices?',
    answer:
      'Yes. Dispatch can import from CSV for projects and invoices. If you're using FreshBooks, Wave, or HoneyBook, we have guided import tools that map your existing data — typically takes under 15 minutes.',
  },
  {
    question: 'Do my clients need to create an account?',
    answer:
      'No. Clients get a link to a branded workspace where they can view project status, sign proposals, approve deliverables, and pay invoices — no account required. You can optionally invite clients to create an account if they want notifications.',
  },
  {
    question: 'What payment methods can I accept?',
    answer:
      'Stripe and PayPal are built in. You can also accept ACH bank transfers (US), SEPA (EU), and credit cards. Dispatch takes 0% transaction fees on Pro and Studio plans — you only pay Stripe or PayPal's standard processing rates.',
  },
  {
    question: 'What happens when my trial ends?',
    answer:
      'If you don't upgrade, you move to the Free plan automatically — no charge, no data loss. Your existing projects are preserved. Projects above the Free plan limit are archived (not deleted) and become accessible again if you upgrade.',
  },
]

// FAQPage schema — makes answers extractable by AI
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQAccordionItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  const id = `faq-answer-${index}`

  return (
    <div className="animate-on-scroll border-b border-[var(--color-border)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-white">{item.question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
        id={id}
        role="region"
        aria-labelledby={`faq-question-${index}`}
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
  const ref = useAnimateOnScroll() as React.RefObject<HTMLElement>

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-[var(--color-surface)] px-6 py-24"
      aria-labelledby="faq-heading"
    >
      {/* Inject FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center animate-on-scroll">
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
          Still have questions?{' '}
          <a
            href="mailto:hello@dispatch.so"
            className="text-brand-500 transition-colors hover:text-brand-500/80"
          >
            Email us
          </a>{' '}
          — we reply in under 2 hours.
        </p>
      </div>
    </section>
  )
}
