/**
 * Partners marquee, brand wordmarks rendered as currentColor SVG/text
 * so they inherit theme tokens. Stylized text logos avoid trademark image
 * usage while signaling the partner brands.
 */
const partners = [
  { name: "Eddie Bauer", style: "font-display tracking-[0.18em]" },
  { name: "New Balance", style: "font-display italic tracking-tight" },
  { name: "Nike", style: "font-display italic tracking-tight" },
  { name: "Puma", style: "font-display tracking-[0.32em]" },
  { name: "Under Armour", style: "font-display tracking-[0.22em]" },
  { name: "Carhartt", style: "font-display tracking-[0.18em]" },
  { name: "Champion", style: "font-display italic tracking-tight" },
  { name: "Adidas", style: "font-display tracking-[0.08em] lowercase" },
  { name: "Columbia", style: "font-display tracking-[0.16em]" },
  { name: "Helly Hansen", style: "font-display tracking-[0.14em]" },
];

export function PartnersMarquee() {
  // Duplicate the list so the marquee can loop seamlessly with -50% translate
  const loop = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      {/* Subtle lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-[60%] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-radial-lime)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream">
              <span className="h-px w-8 bg-cream/40" />
              Nos partenaires
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-tight text-cream text-balance">
              Les meilleures marques,{" "}
              <em className="font-script font-normal not-italic text-lime">
                réunies
              </em>{" "}
              chez Jordal.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream">
            Plus de 40 fournisseurs reconnus pour vous offrir le meilleur
            assortiment de vêtements et d'objets promotionnels.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 lg:mt-20">
        {/* Edge fade masks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent"
        />

        <div className="flex w-max marquee-track">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex shrink-0 items-center gap-12 px-8 lg:gap-16 lg:px-12"
            >
              <span
                className={`whitespace-nowrap text-3xl font-bold uppercase text-cream/45 transition-colors hover:text-cream lg:text-4xl ${p.style}`}
              >
                {p.name}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
