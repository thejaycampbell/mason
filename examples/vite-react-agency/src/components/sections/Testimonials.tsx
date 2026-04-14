// All four fields required per Conversion Architecture rules:
// quote + name + role + company + result

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  result: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We'd been embarrassed by our website for two years. Forma rebuilt it in three weeks and it immediately started converting better than our old one ever did.",
    name: 'James Turnbull',
    role: 'CEO',
    company: 'Meridian Analytics',
    result: 'Demo requests up 40% in month one',
  },
  {
    quote:
      "What I appreciated was they didn't try to make us look like every other SaaS company. The new brand actually matches how our customers describe us.",
    name: 'Priya Shah',
    role: 'Head of Marketing',
    company: 'Cascade',
    result: 'Series A closed 8 weeks after rebrand',
  },
  {
    quote:
      "The design system paid for itself in the first sprint. Our engineers stopped rebuilding the same button in six different ways.",
    name: 'Tom Lindqvist',
    role: 'Engineering Lead',
    company: 'Fathom',
    result: 'Handoff time down from 3 days to 4 hours',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[var(--color-surface)] px-6 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            What clients say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, company, result }, i) => (
            <figure
              key={name}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <blockquote className="flex-1">
                <p className="text-sm leading-relaxed text-[var(--color-text)]">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>

              <p className="mt-4 text-xs font-semibold text-brand-500">{result}</p>

              <figcaption className="mt-4 border-t border-[var(--color-border)] pt-4">
                <p className="font-medium text-white">{name}</p>
                <p className="text-xs text-[var(--color-muted)]">
                  {role}, {company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Before-pricing CTA (trust signal placement pattern) */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
