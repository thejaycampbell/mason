'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

interface PricingTier {
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted: boolean
}

const TIERS: PricingTier[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For freelancers just getting started.',
    features: [
      '3 active projects',
      'Proposals & e-signatures',
      'Basic invoicing',
      'Client workspace',
    ],
    cta: 'Start free',
    ctaHref: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 19,
    annualPrice: 15,
    description: 'For freelancers who run their business seriously.',
    features: [
      'Unlimited projects',
      'Automated payment reminders',
      'Time tracking → auto-invoice',
      'Custom proposal branding',
      'Priority support',
      'QuickBooks & Stripe sync',
    ],
    cta: 'Start Pro free for 14 days',
    ctaHref: '/signup?plan=pro',
    highlighted: true,
  },
  {
    name: 'Studio',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'For freelancers who work with a small team.',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared client workspaces',
      'Team time tracking',
      'Role-based permissions',
    ],
    cta: 'Start Studio free for 14 days',
    ctaHref: '/signup?plan=studio',
    highlighted: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const ref = useAnimateOnScroll() as React.RefObject<HTMLElement>

  return (
    <section
      id="pricing"
      ref={ref}
      className="px-6 py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-on-scroll">
          <h2
            id="pricing-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Free forever. Upgrade when you need more.
          </p>

          {/* Billing toggle */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual
                  ? 'bg-[var(--color-surface)] text-white'
                  : 'text-[var(--color-muted)] hover:text-white'
              }`}
              aria-pressed={!annual}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                annual
                  ? 'bg-[var(--color-surface)] text-white'
                  : 'text-[var(--color-muted)] hover:text-white'
              }`}
              aria-pressed={annual}
            >
              Annual
              <span className="ml-1.5 rounded-full bg-brand-500/20 px-1.5 py-0.5 text-xs text-brand-500">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map(
            (
              {
                name,
                monthlyPrice,
                annualPrice,
                description,
                features,
                cta,
                ctaHref,
                highlighted,
              },
              i
            ) => (
              <div
                key={name}
                className={`animate-on-scroll rounded-xl border p-6 ${
                  highlighted
                    ? 'border-brand-500 bg-brand-500/5'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {highlighted && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-500">
                    Most popular
                  </p>
                )}

                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {description}
                </p>

                <div className="my-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    ${annual ? annualPrice : monthlyPrice}
                  </span>
                  {monthlyPrice > 0 && (
                    <span className="mb-1 text-sm text-[var(--color-muted)]">
                      /mo {annual && '(billed annually)'}
                    </span>
                  )}
                </div>

                <Link
                  href={ctaHref}
                  className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    highlighted
                      ? 'bg-brand-500 text-white hover:bg-brand-600'
                      : 'border border-[var(--color-border)] text-white hover:border-white/40'
                  }`}
                >
                  {cta}
                </Link>

                <ul className="mt-6 flex flex-col gap-3" role="list">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
