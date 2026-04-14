// Hero — gradient background fallback (no image asset required)
// Mason generates this pattern when Asset status: minimal

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center">
      {/* Gradient hero — replaces a hero image when no asset exists */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168, 85, 247, 0.15), transparent 70%)',
        }}
      />

      {/* Trust anchor — above the fold */}
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        <span className="text-xs font-medium text-brand-500">
          48 projects shipped · 3-week average delivery
        </span>
      </div>

      {/* H1 — primary keyword front-loaded */}
      <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
        Brand and web design for companies that want to{' '}
        <span className="text-brand-500">look the part</span>
      </h1>

      {/* Subheadline — positioning statement, AI-extractable */}
      <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-muted)]">
        Forma is a design studio for early-stage and growth-stage companies.
        We design brand identities, marketing websites, and design systems that
        make your product as credible as it is capable.
      </p>

      {/* CTAs — primary + one secondary */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#contact"
          className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Start a project
        </a>
        <a
          href="#portfolio"
          className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-white/30 hover:text-white"
        >
          See our work
        </a>
      </div>

      {/* Social proof — within 200px of CTA (conversion architecture rule) */}
      <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {['Loom', 'Linear', 'Vercel', 'Resend', 'Raycast'].map((name) => (
          <span
            key={name}
            className="text-sm font-medium text-[var(--color-muted)]"
            aria-label={`${name} is a Forma client`}
          >
            {name}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-[var(--color-muted)]">
        Trusted by teams at these companies
      </p>
    </section>
  )
}
