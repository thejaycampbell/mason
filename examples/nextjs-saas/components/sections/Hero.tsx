import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center">
      {/* Gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
      >
        <div className="h-[400px] w-[700px] rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      {/* Badge */}
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        <span className="text-xs font-medium text-brand-500">
          3,200 freelancers trust Dispatch
        </span>
      </div>

      {/* Headline — primary keyword front-loaded */}
      <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
        Project management built for{' '}
        <span className="text-brand-500">freelancers</span>
      </h1>

      {/* Subheadline — positioning statement, extractable by AI */}
      <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-muted)]">
        Dispatch is project management software for freelancers — proposals,
        invoicing, and client communication in one tool. Stop juggling five
        apps. Get paid in 4 days on average.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/signup"
          className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Start free — no credit card
        </Link>
        <Link
          href="#features"
          className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-white/30 hover:text-white"
        >
          See how it works
        </Link>
      </div>

      <p className="mt-4 text-xs text-[var(--color-muted)]">
        Free plan available · Upgrade anytime · Cancel whenever
      </p>
    </section>
  )
}
