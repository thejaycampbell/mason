const LINKS = {
  Work: [
    { label: 'Brand identity', href: '#services' },
    { label: 'Web design', href: '#services' },
    { label: 'Design systems', href: '#services' },
    { label: 'Case studies', href: '#portfolio' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Process', href: '#process' },
    { label: 'Press', href: '/press' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Forma
            </span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Brand and web design for companies that want to look as good as
              they are. 48 projects shipped since 2021.
            </p>
          </div>

          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)] md:flex-row">
          <p>&copy; {new Date().getFullYear()} Forma Studio. All rights reserved.</p>
          <p>48 projects shipped · Average delivery: 3 weeks</p>
        </div>
      </div>
    </footer>
  )
}
