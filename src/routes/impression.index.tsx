import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Zap,
  Gift,
  Check,
  ChevronRight,
} from "lucide-react";

import silkscreenImg from "@/assets/print-silkscreen.jpg";
import embroideryImg from "@/assets/print-embroidery.jpg";
import dtfImg from "@/assets/print-dtf.jpg";
import promoImg from "@/assets/print-promo.jpg";

export const Route = createFileRoute("/impression/")({
  component: PrintingPage,
  head: () => ({
    meta: [
      { title: "Printing methods — Jordal · Silkscreen, Embroidery, DTF" },
      {
        name: "description",
        content:
          "Four mastered techniques: silkscreen, embroidery, DTF transfer and promotional items. Master craftsmanship from our Quebec workshops.",
      },
      { property: "og:title", content: "Printing methods — Jordal" },
      {
        property: "og:description",
        content:
          "From a single piece to thousands of units — choose the right technique for your brand.",
      },
      { property: "og:image", content: silkscreenImg },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

type Method = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  intro: string;
  what: string;
  process: { title: string; body: string }[];
  advantages: string[];
  bestFor: string[];
  image: string;
  imageAlt: string;
  accent: "lime" | "ink";
  icon: typeof Layers;
};

const METHODS: Method[] = [
  {
    id: "silkscreen",
    index: "01",
    name: "Silkscreen",
    tagline: "The classic, perfected.",
    intro:
      "A printing process where ink is pushed through the fine mesh of a screen by a squeegee, depositing pigment directly onto the support.",
    what: "Often called a stencil technique. The screen — fabric stretched on an aluminum frame — is coated with a photosensitive emulsion that hardens under UV light. A film blocks the rays where ink should pass. The screen is then mounted on the press; the squeegee glides across, and the ink crosses the open mesh to reveal the artwork.",
    process: [
      {
        title: "Coating",
        body: "The screen is coated with a UV-sensitive emulsion that hardens with light exposure.",
      },
      {
        title: "Exposure",
        body: "A film positioned over the screen blocks UV rays where ink should later pass through.",
      },
      {
        title: "Printing",
        body: "The squeegee pushes ink through the open mesh onto the substrate, building up a vivid, opaque deposit.",
      },
      {
        title: "Curing",
        body: "After printing, the screen is raised, the support removed, washed, and dried for permanence.",
      },
    ],
    advantages: [
      "5 to 10× more ink than other processes",
      "Intense color that lasts over time",
      "Excellent opacity, even on dark fabric",
      "Specialty inks: metallic, fluo, puff, glitter",
      "Best cost per unit at high volumes",
    ],
    bestFor: ["T-shirts", "Hoodies", "Tote bags", "Workwear", "Event apparel"],
    image: silkscreenImg,
    imageAlt: "Yellow ink being pushed through a silkscreen mesh in a Jordal workshop",
    accent: "lime",
    icon: Layers,
  },
  {
    id: "embroidery",
    index: "02",
    name: "Embroidery",
    tagline: "Stitched permanence.",
    intro:
      "Decoration sewn directly into the garment using high-density thread — the most premium, durable signature on corporate apparel.",
    what: "Your logo is digitized into stitch instructions, then executed by multi-head machines running up to fifteen colors at once. The needle plunges thousands of times per minute, building a tactile, three-dimensional emblem that becomes part of the garment itself.",
    process: [
      {
        title: "Digitization",
        body: "Your artwork is converted into precise stitch paths, densities, and thread sequences.",
      },
      {
        title: "Hooping",
        body: "The garment is stabilized in a hoop with backing to prevent any distortion.",
      },
      {
        title: "Stitching",
        body: "Multi-needle machines lay thousands of stitches with surgical precision and color changes.",
      },
      {
        title: "Finishing",
        body: "Loose threads are trimmed, backing removed, every piece quality-checked by hand.",
      },
    ],
    advantages: [
      "Perceived premium quality, instantly",
      "Lifetime of the garment — won't crack or peel",
      "Adds tactile, dimensional texture",
      "Ideal on caps, polos, jackets, fleece",
      "Resistant to industrial laundering",
    ],
    bestFor: ["Polos", "Caps", "Jackets", "Uniforms", "Workwear"],
    image: embroideryImg,
    imageAlt: "Multi-color embroidery machine stitching a logo on navy fabric",
    accent: "ink",
    icon: Palette,
  },
  {
    id: "dtf",
    index: "03",
    name: "DTF Transfer",
    tagline: "Photographic, anywhere.",
    intro:
      "Direct-to-film printing — full-color artwork printed onto a special film, then heat-pressed to virtually any fabric with zero compromise on detail.",
    what: "DTF lets us print intricate gradients, photographs, and dense color blends without screen setup. The image is printed in CMYK + white onto a PET film, coated with adhesive powder, cured, and pressed onto the garment. The result: a soft, stretchy, ultra-sharp finish on cotton, polyester, blends — even nylon.",
    process: [
      {
        title: "Print",
        body: "Artwork is printed in CMYK with a white underlayer onto specialized PET film.",
      },
      {
        title: "Powder",
        body: "Hot-melt adhesive powder is applied evenly to the wet ink and cured.",
      },
      {
        title: "Press",
        body: "The film is heat-pressed to the garment at precise temperature and pressure.",
      },
      {
        title: "Peel",
        body: "Once cooled, the film peels away leaving a vivid, durable, soft-hand transfer.",
      },
    ],
    advantages: [
      "Photographic detail and unlimited colors",
      "Works on cotton, polyester, blends, nylon",
      "Cost-effective from a single piece",
      "Soft, stretchy hand — moves with the fabric",
      "Quick turnaround with no screen setup",
    ],
    bestFor: ["Sport jerseys", "Custom one-offs", "Photo prints", "Small runs", "Mixed apparel"],
    image: dtfImg,
    imageAlt: "DTF transfer being heat pressed onto a black t-shirt",
    accent: "lime",
    icon: Zap,
  },
  {
    id: "promo",
    index: "04",
    name: "Promotional Items",
    tagline: "Your brand, beautifully objected.",
    intro:
      "Curated corporate gifts and branded objects sourced from a global catalog, decorated and assembled in our workshop.",
    what: "Mugs, water bottles, notebooks, tech accessories, leather goods, eco-friendly items — we source the right object for the right occasion, then apply the right decoration technique: pad printing, laser engraving, debossing, sublimation. Every kit assembled and quality-checked before delivery.",
    process: [
      {
        title: "Curate",
        body: "We propose objects matched to your brand, audience, and budget.",
      },
      {
        title: "Decorate",
        body: "Pad print, engraving, deboss, or sublimation — chosen per material and effect.",
      },
      {
        title: "Assemble",
        body: "Kits are hand-packed, optionally with custom packaging or thank-you cards.",
      },
      {
        title: "Deliver",
        body: "Bulk shipped to your office, or drop-shipped to recipients across Canada.",
      },
    ],
    advantages: [
      "Thousands of curated objects available",
      "End-to-end project management",
      "Custom kit assembly and packaging",
      "Eco-conscious options on request",
      "Direct-to-recipient shipping",
    ],
    bestFor: ["Welcome kits", "Conferences", "Client gifting", "Internal events", "Trade shows"],
    image: promoImg,
    imageAlt: "Curated branded promotional items on a charcoal background",
    accent: "ink",
    icon: Gift,
  },
];

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

function PrintingPage() {
  return (
    <>
      <PrintingHero />
      <MethodsNav />
      {METHODS.map((m, i) => (
        <MethodSection key={m.id} method={m} reversed={i % 2 === 1} />
      ))}
      <ComparisonTable />
      <PrintingCta />
    </>
  );
}

/* ----------------------------------- Hero --------------------------------- */

function PrintingHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-radial-lime)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70 backdrop-blur">
              <Sparkles className="h-3 w-3 text-lime" />
              Four mastered techniques
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.75rem,7.5vw,7rem)] font-bold leading-[0.9] tracking-tight text-balance">
              The right{" "}
              <em className="font-script font-normal not-italic text-lime">
                method
              </em>
              <br />
              for every brand.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/65 lg:text-lg">
              Silkscreen, embroidery, DTF transfer, promotional items. Each
              technique chosen for the substrate, the volume, and the story you
              want to tell.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10">
            {METHODS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="group flex items-center justify-between gap-3 bg-ink p-5 transition-colors hover:bg-ink-soft"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                    {m.index}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-cream">
                    {m.name}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-cream/40 transition-all group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-px h-16 bg-cream [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}

/* ---------------------------------- Sticky -------------------------------- */

function MethodsNav() {
  const [active, setActive] = useState<string>("silkscreen");

  return (
    <div className="sticky top-16 z-30 -mt-4 border-y border-ink/10 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 overflow-x-auto px-6 py-3">
        <span className="hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] text-ink/40 md:block">
          Jump to
        </span>
        {METHODS.map((m) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            onClick={() => setActive(m.id)}
            className={[
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all",
              active === m.id
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 bg-transparent text-ink hover:border-ink/40",
            ].join(" ")}
          >
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-60">
              {m.index}
            </span>
            {m.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Method --------------------------------- */

function MethodSection({ method, reversed }: { method: Method; reversed: boolean }) {
  const Icon = method.icon;
  const isLime = method.accent === "lime";

  return (
    <section
      id={method.id}
      className="relative scroll-mt-32 border-b border-ink/10 bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-end">
          <div className="flex items-center gap-5">
            <span
              className={[
                "font-display text-[7rem] font-bold leading-none tracking-tighter lg:text-[10rem]",
                isLime ? "text-lime" : "text-ink/10",
              ].join(" ")}
            >
              {method.index}
            </span>
            <span
              className={[
                "inline-flex h-12 w-12 items-center justify-center rounded-full",
                isLime ? "bg-ink text-lime" : "bg-lime text-ink",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" />
            </span>
          </div>

          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink lg:text-7xl">
              {method.name}.
            </h2>
            <p className="mt-3 font-script text-2xl text-ink/60 lg:text-3xl">
              {method.tagline}
            </p>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {method.id === "embroidery" && (
              <Link
                to="/impression/embroidery"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                Explore embroidery
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
            {method.id === "silkscreen" && (
              <Link
                to="/impression/silkscreen"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                Explore silkscreen
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
            {method.id === "dtf" && (
              <Link
                to="/impression/dtf"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                Explore DTF
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-lime hover:text-ink"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Body */}
        <div
          className={[
            "grid gap-12 lg:grid-cols-2 lg:items-start",
            reversed ? "lg:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink">
              <img
                src={method.image}
                alt={method.imageAlt}
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <span className="rounded-full bg-cream/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-ink backdrop-blur">
                  {method.name}
                </span>
                <span className="font-script text-3xl text-cream">
                  Jordal
                </span>
              </div>
            </div>

            {/* Best for chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/40 self-center">
                Best for
              </span>
              {method.bestFor.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-ink/15 bg-cream px-3 py-1.5 text-xs font-medium text-ink/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12 lg:pt-2">
            {/* Intro */}
            <div>
              <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">
                {method.intro}
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink/65">
                {method.what}
              </p>
            </div>

            {/* Process */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ink/30" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
                  The process
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {method.process.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-5 rounded-2xl border border-ink/10 bg-stone/40 p-5 transition-colors hover:border-ink/25"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-cream tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-base font-semibold text-ink">
                        {step.title}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div
              className={[
                "rounded-3xl p-8 lg:p-10",
                isLime
                  ? "bg-lime text-ink"
                  : "bg-ink text-cream",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <span
                  className={[
                    "h-px w-8",
                    isLime ? "bg-ink/40" : "bg-cream/40",
                  ].join(" ")}
                />
                <span
                  className={[
                    "text-[11px] font-bold uppercase tracking-[0.22em]",
                    isLime ? "text-ink/70" : "text-cream/70",
                  ].join(" ")}
                >
                  Advantages
                </span>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {method.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <Check
                      className={[
                        "mt-0.5 h-4 w-4 shrink-0",
                        isLime ? "text-ink" : "text-lime",
                      ].join(" ")}
                      strokeWidth={3}
                    />
                    <span className="text-sm font-medium leading-snug">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Comparison -------------------------------- */

const COMPARE = [
  {
    label: "Min. quantity",
    silkscreen: "24 pcs",
    embroidery: "12 pcs",
    dtf: "1 pc",
    promo: "25 pcs",
  },
  {
    label: "Color count",
    silkscreen: "1 – 8 spot",
    embroidery: "Up to 15 threads",
    dtf: "Unlimited / photo",
    promo: "1 – 4 typical",
  },
  {
    label: "Durability",
    silkscreen: "Excellent",
    embroidery: "Lifetime",
    dtf: "Very good",
    promo: "Per object",
  },
  {
    label: "Setup time",
    silkscreen: "1 – 2 days",
    embroidery: "1 day",
    dtf: "Same day",
    promo: "Per quote",
  },
  {
    label: "Sweet spot",
    silkscreen: "Volume runs",
    embroidery: "Premium feel",
    dtf: "Detail & color",
    promo: "Brand kits",
  },
];

function ComparisonTable() {
  return (
    <section className="border-b border-ink/10 bg-stone/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
              At a glance
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink lg:text-6xl">
              Choose with{" "}
              <em className="font-script font-normal not-italic text-lime-deep">
                clarity
              </em>
              .
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/65">
            A side-by-side reference. Not sure which technique fits? Send us
            your project and we recommend the right approach within a day.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-cream shadow-soft">
          <div className="grid grid-cols-5 border-b border-ink/10 bg-ink text-cream">
            <div className="p-5 text-[10px] font-bold uppercase tracking-[0.22em] text-cream/50">
              Criterion
            </div>
            {METHODS.map((m) => (
              <div
                key={m.id}
                className="border-l border-cream/10 p-5"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-lime">
                  {m.index}
                </div>
                <div className="mt-1 font-display text-sm font-semibold">
                  {m.name}
                </div>
              </div>
            ))}
          </div>

          {COMPARE.map((row, i) => (
            <div
              key={row.label}
              className={[
                "grid grid-cols-5 border-b border-ink/5 last:border-b-0",
                i % 2 === 1 ? "bg-stone/30" : "",
              ].join(" ")}
            >
              <div className="p-5 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
                {row.label}
              </div>
              <div className="border-l border-ink/5 p-5 text-sm font-medium text-ink">
                {row.silkscreen}
              </div>
              <div className="border-l border-ink/5 p-5 text-sm font-medium text-ink">
                {row.embroidery}
              </div>
              <div className="border-l border-ink/5 p-5 text-sm font-medium text-ink">
                {row.dtf}
              </div>
              <div className="border-l border-ink/5 p-5 text-sm font-medium text-ink">
                {row.promo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ---------------------------------- */

function PrintingCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial-lime)" }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">
          <Sparkles className="h-3 w-3 text-lime" />
          Ready when you are
        </span>
        <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance lg:text-7xl">
          Let's pick the{" "}
          <em className="font-script font-normal not-italic text-lime">
            right one
          </em>{" "}
          together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65 lg:text-lg">
          Send us your artwork, your quantity, your timeline. We reply within
          24 business hours with a recommendation and quote.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-shadow hover:shadow-glow"
          >
            Request a quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="tel:4504198855"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-lime hover:text-lime"
          >
            450 419-8855
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
