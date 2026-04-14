'use client'

import { useRef } from 'react'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

interface StatItem {
  value: string
  label: string
}

const STATS: StatItem[] = [
  { value: '3,200+', label: 'freelancers active' },
  { value: '4 days', label: 'average time to payment' },
  { value: '$2.4M', label: 'invoiced last month' },
  { value: '4.8 / 5', label: 'average review (312 ratings)' },
]

export function SocialProof() {
  const ref = useAnimateOnScroll() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16"
      aria-label="Social proof statistics"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
          Trusted by freelancers who work for
        </p>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="animate-on-scroll text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <dt className="text-3xl font-extrabold text-white">{value}</dt>
              <dd className="mt-1 text-sm text-[var(--color-muted)]">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
