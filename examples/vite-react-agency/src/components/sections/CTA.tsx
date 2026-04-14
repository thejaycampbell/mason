// Bottom CTA banner — third CTA appearance (conversion architecture rule)
// Primary CTA only at this stage — no secondary

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-surface)] px-6 py-24 text-center"
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
          Ready to look the part?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
          Tell us what you're building and where you are in the journey. We'll
          let you know if we're a fit and what we'd scope for you.
        </p>

        <a
          href="mailto:hello@forma.studio"
          className="mt-8 inline-flex rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Start a project
        </a>

        {/* Objection-handling line — after CTA (trust signal pattern) */}
        <p className="mt-4 text-xs text-[var(--color-muted)]">
          We take on 3-4 projects per month · Average response time: 4 hours
        </p>
      </div>
    </section>
  )
}
