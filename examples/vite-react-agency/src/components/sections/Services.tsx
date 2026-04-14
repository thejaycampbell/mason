interface Service {
  title: string
  description: string
  deliverables: string[]
  timeline: string
}

const SERVICES: Service[] = [
  {
    title: 'Brand Identity',
    description:
      'Logo, color system, typography, and usage guidelines. Built for a company at your stage — not a 200-page brand bible you\'ll never open.',
    deliverables: ['Logo suite (light, dark, icon)', 'Color + type system', 'Usage guidelines PDF', 'Figma source files'],
    timeline: '2 weeks',
  },
  {
    title: 'Marketing Website',
    description:
      'Homepage, product pages, pricing, and about — designed and built in your stack. We design and develop together so there\'s no handoff gap.',
    deliverables: ['Design (Figma)', 'Production code (Next.js or Vite)', 'SEO setup', 'CMS integration if needed'],
    timeline: '3–4 weeks',
  },
  {
    title: 'Design System',
    description:
      'A component library your team can actually use. Built in Figma and shadcn/ui, documented with real usage examples.',
    deliverables: ['Figma component library', 'shadcn/ui implementation', 'Storybook docs', 'Contribution guide'],
    timeline: '4–6 weeks',
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            What we design
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
            Three focused services. No retainers, no bloated scopes — each
            engagement has a fixed output and a fixed timeline.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ title, description, deliverables, timeline }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-brand-500/40"
            >
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {description}
              </p>

              <ul className="mt-6 flex flex-col gap-2" role="list">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
                {timeline}
              </p>
            </article>
          ))}
        </div>

        {/* Mid-page CTA — conversion architecture rule */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Start a project
          </a>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Fixed scope · Fixed timeline · No surprises
          </p>
        </div>
      </div>
    </section>
  )
}
