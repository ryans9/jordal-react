import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Calendar, MapPin } from "lucide-react";
import silkscreenImg from "@/assets/print-silkscreen.jpg";
import embroideryImg from "@/assets/print-embroidery.jpg";
import dtfImg from "@/assets/print-dtf.jpg";
import promoImg from "@/assets/print-promo.jpg";
import catTshirts from "@/assets/category-tshirts.jpg";
import catShirts from "@/assets/category-shirts.jpg";
import catJackets from "@/assets/category-jackets.jpg";
import catCaps from "@/assets/category-caps.jpg";
import promoClothingHero from "@/assets/promo-clothing-hero.jpg";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { CallbackSection } from "@/components/CallbackSection";

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
                  consolider votre image de marque, du concept jusqu'à la
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

      {/* Promotional clothing methods strip */}
      <section className="bg-ink">
        <div className="grid w-full grid-cols-1 md:grid-cols-5">
          {/* Label panel, styled to match the 4 tiles */}
          <div className="group relative block aspect-[3/4] overflow-hidden bg-ink md:aspect-auto md:h-[360px] lg:h-[420px]">
            {/* Subtle lime radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-radial-lime)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 lg:p-7">
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-lime lg:text-[1.75rem]">
                Vêtements
                <br />
                promotionnels
              </h3>
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

      {/* Turnkey Service, editorial split with category gallery */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
          {/* Eyebrow + asymmetric intro */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/55">
                <span className="h-px w-8 bg-ink/40" />
                Service clé en main
              </span>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-ink text-balance">
                Une seule équipe,{" "}
                <em className="font-script font-normal not-italic text-lime-deep">
                  du concept
                </em>
                <br />
                jusqu'à la livraison.
              </h2>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5">
              <p className="text-lg leading-relaxed text-ink/70">
                Jordal est un chef de file de l'industrie en matière de vêtements
                et produits corporatifs. Nous décorons vos articles directement
                sur place, pour un meilleur contrôle de la qualité et des
                délais.
              </p>
              <a
                href="/contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink underline-grow"
              >
                Personnalisez vos articles
                <ArrowUpRight className="h-4 w-4 text-lime-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Numbered process rail */}
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/10 pt-10 md:grid-cols-4">
            {[
              { n: "01", t: "Concept", d: "Idéation & maquettes" },
              { n: "02", t: "Sélection", d: "Vêtements & objets" },
              { n: "03", t: "Décoration", d: "Sur place, au Québec" },
              { n: "04", t: "Livraison", d: "Dans les délais" },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-lime-deep tabular-nums">
                  {step.n}
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {step.t}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product category gallery, full-bleed editorial cards */}
        <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "T-Shirts & Polos", img: catTshirts, idx: "01" },
              { label: "Chemises", img: catShirts, idx: "02" },
              { label: "Manteaux & Vestes", img: catJackets, idx: "03" },
              { label: "Casquettes & Tuques", img: catCaps, idx: "04" },
            ].map((cat, i) => (
              <a
                key={cat.label}
                href="/contact"
                className={`group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 ${
                  i % 2 === 1 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    loading="lazy"
                    width={480}
                    height={480}
                    className="h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                {/* Hover overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Index marker */}
                <span className="absolute left-5 top-5 font-display text-xs font-semibold tracking-[0.2em] text-ink/70 mix-blend-multiply">
                  {cat.idx}
                </span>
                {/* Caption */}
                <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-1">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                    {cat.label}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-ink/40 transition-all group-hover:text-lime-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="px-5 pb-5 text-xs uppercase tracking-[0.16em] text-ink/45">
                  Voir la collection
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <PartnersMarquee />

      {/* Schedule a Visit, split with YouTube video */}
      <section className="relative bg-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
          {/* Left: copy + CTA */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/55">
              <span className="h-px w-8 bg-ink/40" />
              Salle de montre
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1] tracking-tight text-ink text-balance">
              Planifiez une visite{" "}
              <em className="font-script font-normal not-italic text-lime-deep">
                à notre showroom.
              </em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Vous aimeriez toucher les matières, voir la qualité de nos
              produits et visiter nos installations ? Nos représentants vous
              accueillent et vous présentent notre vaste catalogue. Nous vous
              aidons à trouver les bons articles pour votre entreprise.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
              Découvrez comment nos produits corporatifs peuvent renforcer votre
              image de marque et fidéliser votre clientèle.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Pas près de Saint-Jérôme ? Nous nous déplaçons pour vous présenter
              nos échantillons.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-lime hover:text-ink"
              >
                <Calendar className="h-4 w-4" />
                Planifier une visite
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/representants"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-grow"
              >
                <MapPin className="h-4 w-4 text-lime-deep" />
                Voir nos représentants
              </a>
            </div>
          </div>

          {/* Right: YouTube video */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-ink shadow-soft ring-1 ring-ink/10">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/Q2vhKzu-yxk?rel=0&modestbranding=1"
                  title="Jordal, visite de l'atelier"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            {/* Caption */}
            <div className="mt-4 flex items-center justify-between px-1">
              <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
                Jordal · Atelier Saint-Jérôme
              </p>
              <span className="text-xs font-semibold text-ink/40">
                Vidéo officielle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Request callback */}
      <CallbackSection />

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
