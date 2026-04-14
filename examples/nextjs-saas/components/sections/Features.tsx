'use client'

import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

interface Feature {
  icon: string
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: '📋',
    title: 'Proposals that close',
    description:
      'Send a professional proposal in under 3 minutes. Clients sign online — no PDFs, no printing. Average acceptance rate: 74%.',
  },
  {
    icon: '💸',
    title: 'Invoicing without the chase',
    description:
      'Auto-generate invoices from approved proposals. Set up automated payment reminders. Get paid in 4 days on average.',
  },
  {
    icon: '💬',
    title: 'Client communication in one place',
    description:
      'A shared workspace for each client — files, messages, approvals, and project status. No more scattered email threads.',
  },
  {
    icon: '⏱️',
    title: 'Time tracking that bills automatically',
    description:
      'Track time per project. When the project closes, Dispatch turns your logged hours into a ready-to-send invoice.',
  },
  {
    icon: '📅',
    title: 'Project timelines with client visibility',
    description:
      'Show clients exactly where the project stands. Fewer check-in emails means fewer interruptions to your actual work.',
  },
  {
    icon: '🔌',
    title: 'Works with your existing stack',
    description:
      'Connects with Stripe, PayPal, QuickBooks, Notion, and Zapier. You keep your workflow — Dispatch fills the gaps.',
  },
]

export function Features() {
  const ref = useAnimateOnScroll() as React.RefObject<HTMLElement>

  return (
    <section
      id="features"
      ref={ref}
      className="px-6 py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-on-scroll">
          <h2
            id="features-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Everything a freelancer needs to run their business
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
            Not a watered-down project tool built for agencies. Dispatch is
            designed specifically for solo freelancers — the way you actually
            work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon, title, description }, i) => (
            <article
              key={title}
              className="animate-on-scroll rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-brand-500/40"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div
                className="mb-4 text-2xl"
                aria-hidden="true"
                role="presentation"
              >
                {icon}
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
