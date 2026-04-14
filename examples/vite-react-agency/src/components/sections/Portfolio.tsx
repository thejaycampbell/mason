import { lazy, Suspense } from 'react'

// Code-split the portfolio modal — Vite pattern (no next/dynamic)
const PortfolioModal = lazy(() => import('./PortfolioModal'))

interface PortfolioItem {
  title: string
  category: string
  description: string
  result: string
}

const PROJECTS: PortfolioItem[] = [
  {
    title: 'Meridian',
    category: 'Brand identity + website',
    description: 'B2B analytics platform repositioning from enterprise-heavy to founder-friendly.',
    result: 'Demo requests up 40% in first month after launch',
  },
  {
    title: 'Clerk',
    category: 'Marketing website',
    description: 'Developer authentication SaaS — new homepage and docs site redesign.',
    result: 'Organic signups increased 28% within 6 weeks',
  },
  {
    title: 'Optic',
    category: 'Design system',
    description: 'API diff tool — Figma component library and shadcn/ui implementation for their design team.',
    result: 'Design-to-dev handoff time cut from 3 days to 4 hours',
  },
  {
    title: 'Cascade',
    category: 'Brand identity',
    description: 'Workflow automation startup — logo, colors, and type system ahead of their Series A.',
    result: 'Closed Series A 8 weeks after rebrand',
  },
  {
    title: 'Watershed',
    category: 'Marketing website',
    description: 'Climate software for enterprises — homepage, pricing, and about pages.',
    result: 'Pipeline quality improved significantly post-launch',
  },
  {
    title: 'Fathom',
    category: 'Brand identity + design system',
    description: 'Privacy-first analytics — full brand and component library refresh.',
    result: 'Shipped in 4 weeks; no revisions required on final delivery',
  },
]

// Product screenshot fallback — designed mockup frame (no image asset)
function MockupFrame({ title }: { title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-gradient-to-br from-zinc-800 to-zinc-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs text-zinc-600">{title}</span>
      </div>
      {/* TODO: replace with actual project screenshot
          e.g. <img src={`/portfolio/${slug}.png`} alt={`${title} — Forma project`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> */}
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Selected work
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            48 projects since 2021. A handful of the ones we're most proud of.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ title, category, description, result }, i) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-colors hover:border-brand-500/40"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Mockup frame — asset fallback pattern */}
              <MockupFrame title={title} />

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
                  {category}
                </p>
                <h3 className="mt-1 font-semibold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {description}
                </p>
                <p className="mt-4 text-xs text-[var(--color-muted)]">
                  <span className="font-medium text-white">Result: </span>
                  {result}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Lazy-loaded modal (code-split — Vite pattern) */}
        <Suspense fallback={null}>
          <PortfolioModal />
        </Suspense>
      </div>
    </section>
  )
}
