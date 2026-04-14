interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery call',
    description:
      'One 60-minute call to understand your product, audience, and goals. We review your current brand and any reference material you have. No questionnaire, no deck — just a conversation.',
  },
  {
    number: '02',
    title: 'Concept direction',
    description:
      'We present two or three distinct design directions. You choose one, we refine it. One round of feedback. This stage takes one week.',
  },
  {
    number: '03',
    title: 'Full delivery',
    description:
      'Final files delivered in Figma and production-ready code. We walk you through everything on a handoff call. Revisions included for 30 days.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="process"
      className="bg-[var(--color-surface)] px-6 py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="process-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            How it works
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Three steps. Three weeks. No surprises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map(({ number, title, description }, i) => (
            <div key={number} className="relative">
              {/* Step connector — visual only */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute left-full top-6 hidden h-px w-8 bg-[var(--color-border)] md:block"
                  aria-hidden="true"
                />
              )}

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10">
                <span className="text-sm font-bold text-brand-500">{number}</span>
              </div>

              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
