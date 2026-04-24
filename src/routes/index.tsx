import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import silkscreenImg from "@/assets/print-silkscreen.jpg";
import embroideryImg from "@/assets/print-embroidery.jpg";
import dtfImg from "@/assets/print-dtf.jpg";
import promoImg from "@/assets/print-promo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero with background video */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative w-full pt-0 pb-12 lg:pb-16">
          <div className="relative overflow-hidden shadow-2xl">
            {/* Background video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/jordal-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />

            {/* Dark gradient overlay for legibility */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/55 to-ink/20"
            />

            {/* Subtle lime glow accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-radial-lime)" }}
            />

            {/* Content */}
            <div className="relative grid min-h-[365px] gap-8 px-6 py-12 sm:px-12 sm:py-14 lg:min-h-[450px] lg:px-16 lg:py-16 mx-auto max-w-[1400px] w-full">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-lime" />
                  Atelier québécois · est. 2003
                </span>

                <h1 className="mt-6 font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-balance text-cream">
                  Articles
                  <br />
                  corporatifs{" "}
                  <em className="font-script font-normal not-italic text-lime">
                    personnalisés.
                  </em>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
                  Quels que soient vos besoins, nous pouvons vous aider à
                  consolider votre image de marque — du concept jusqu'à la
                  production.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-all hover:shadow-glow"
                  >
                    Demander une soumission
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="/impression"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-cream hover:text-ink"
                  >
                    Explorer nos méthodes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20">
      {/* Promotional clothing methods strip */}
      <section className="bg-ink">
        <div className="grid w-full grid-cols-1 md:grid-cols-5">
          {/* Label panel */}
          <div className="flex items-center bg-ink px-8 py-12 md:py-16 lg:px-12">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-lime sm:text-4xl lg:text-[2.75rem]">
                Vêtements
                <br />
                promotionnels
              </h2>
              <div className="mt-5 h-px w-16 bg-cream/40" />
            </div>
          </div>

          {/* 4 method tiles */}
          {[
            { label: "Sérigraphie", img: silkscreenImg, to: "/impression/silkscreen" },
            { label: "Broderie", img: embroideryImg, to: "/impression/embroidery" },
            { label: "Transfert DTF", img: dtfImg, to: "/impression/dtf" },
            { label: "Objets promotionnels", img: promoImg, to: "/impression" },
          ].map((m) => (
            <Link
              key={m.label}
              to={m.to}
              className="group relative block aspect-[3/4] overflow-hidden md:aspect-auto md:h-[360px] lg:h-[420px]"
            >
              <img
                src={m.img}
                alt={m.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent transition-opacity group-hover:from-ink/70"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 lg:p-7">
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-cream lg:text-[1.75rem]">
                  {m.label}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-lime opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-4">
            {[
              { k: "20+", v: "Années d'expérience" },
              { k: "3", v: "Ateliers au Québec" },
              { k: "5k+", v: "Projets livrés" },
              { k: "100%", v: "Fait au Québec" },
            ].map((s) => (
              <div key={s.v} className="bg-cream p-8">
                <dt className="font-display text-5xl font-bold tracking-tight text-ink">
                  {s.k}
                </dt>
                <dd className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
