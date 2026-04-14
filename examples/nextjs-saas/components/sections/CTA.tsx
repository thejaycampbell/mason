import Link from 'next/link'

export function CTA() {
  return (
    <section
      className="px-6 py-24 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-3xl rounded-2xl border border-brand-500/30 bg-brand-500/5 px-8 py-16">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-brand-500/5 blur-2xl"
        />

        <h2
          id="cta-heading"
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Stop managing your business in five different apps
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
          Join 3,200 freelancers who run proposals, invoicing, and client
          communication from one place. Free to start, no credit card needed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Start free today
          </Link>
          <Link
            href="/demo"
            className="rounded-lg border border-[var(--color-border)] px-8 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-white/30 hover:text-white"
          >
            Watch a 3-minute demo
          </Link>
        </div>

        <p className="mt-4 text-xs text-[var(--color-muted)]">
          Free plan · No credit card · Cancel whenever
        </p>
      </div>
    </section>
  )
}
