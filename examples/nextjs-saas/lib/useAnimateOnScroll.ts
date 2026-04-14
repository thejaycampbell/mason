'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container element.
 * Children with the `animate-on-scroll` class become visible as they enter the viewport.
 * Uses `motion-safe` guard via CSS — animation only fires when the user hasn't
 * set prefers-reduced-motion.
 *
 * Usage:
 *   const ref = useAnimateOnScroll()
 *   <section ref={ref}>
 *     <div className="animate-on-scroll">...</div>
 *   </section>
 */
export function useAnimateOnScroll() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      // Make all elements visible immediately
      container
        .querySelectorAll<HTMLElement>('.animate-on-scroll')
        .forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    container
      .querySelectorAll<HTMLElement>('.animate-on-scroll')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
