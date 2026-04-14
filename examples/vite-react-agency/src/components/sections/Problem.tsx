// Problem section — Service/Agency site type
// Validates the visitor's frustration before presenting the solution

export function Problem() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Your product is better than your brand suggests
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[var(--color-muted)] leading-relaxed">
          Most early-stage companies ship great product and then spend the next
          two years explaining why the website doesn't reflect it. Prospects
          arrive, read a generic headline, and leave unconvinced — not because
          the product failed, but because the first impression did.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--color-muted)] leading-relaxed">
          Forma fixes that. We design the brand and website that earns the
          attention your product deserves — so the story matches the software.
        </p>
      </div>
    </section>
  )
}
