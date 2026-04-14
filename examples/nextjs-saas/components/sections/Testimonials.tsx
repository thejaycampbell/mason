'use client'

import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

interface Testimonial {
  quote: string
  name: string
  title: string
  stat?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I used to spend Sunday nights catching up on admin. Now it takes me 20 minutes on Friday. Dispatch replaced four separate tools I was paying for.",
    name: 'Sarah Kim',
    title: 'Brand designer, 6 years freelance',
    stat: 'Saves 6+ hours/week',
  },
  {
    quote:
      "The proposal-to-invoice flow is the thing. I send a proposal, client signs, project closes, invoice goes out automatically. I don't touch it.",
    name: 'Marcus Webb',
    title: 'Freelance developer',
    stat: 'Paid in 3 days on average',
  },
  {
    quote:
      "My clients love the shared workspace. They stop emailing me asking for status updates because they can just check. That alone was worth switching.",
    name: 'Priya Nair',
    title: 'UX consultant, 4 years freelance',
    stat: '40% fewer client emails',
  },
]

export function Testimonials() {
  const ref = useAnimateOnScroll() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      className="bg-[var(--color-surface)] px-6 py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-on-scroll">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Freelancers who switched don't go back
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, title, stat }, i) => (
            <figure
              key={name}
              className="animate-on-scroll flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <blockquote className="flex-1">
                <p className="text-sm leading-relaxed text-[var(--color-text)]">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>

              {stat && (
                <p className="mt-4 text-xs font-semibold text-brand-500">
                  {stat}
                </p>
              )}

              <figcaption className="mt-4 border-t border-[var(--color-border)] pt-4">
                <p className="font-medium text-white">{name}</p>
                <p className="text-xs text-[var(--color-muted)]">{title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
