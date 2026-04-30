import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Sparkles,
  Layers,
  Palette,
  Wrench,
  Flame,
  Image as ImageIcon,
  ShieldCheck,
  Zap,
  Infinity as InfinityIcon,
} from "lucide-react";

import heroImg from "@/assets/dtf-hero.jpg";
import detailImg from "@/assets/dtf-detail.jpg";
import gangImg from "@/assets/dtf-gang.jpg";

export const Route = createFileRoute("/impression/dtf")({
  component: DTFPage,
  head: () => ({
    meta: [
      { title: "DTF Transfer, Jordal · Direct-to-Film, no creative limits" },
      {
        name: "description",
        content:
          "DTF (Direct-to-Film) transfer printing from our Quebec workshop. Photographic detail, vivid color, soft hand and exceptional wash resistance, from one piece to thousands.",
      },
      { property: "og:title", content: "DTF Transfer, Jordal" },
      {
        property: "og:description",
        content:
          "From CMYK + white film to heat-pressed garment, discover how DTF transfer prints unlock unlimited colors and details on any fabric.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const PROCESS = [
  {
    n: "01",
    icon: ImageIcon,
    title: "Artwork prep",
    body: "Your file is color-managed, separated into CMYK plus a white underbase, and arranged on a gang sheet to maximize film usage. No screens, no plates, no setup, just pixels.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Film printing",
    body: "A specialized inkjet lays down full-color CMYK ink directly onto a PET film, immediately followed by a layer of opaque white that gives the print its punch on dark garments.",
  },
  {
    n: "03",
    icon: Layers,
    title: "Powder & cure",
    body: "While the ink is still wet, a hot-melt adhesive powder is applied, then heat-cured. This thermoplastic layer becomes the bond that fuses the print to the fabric.",
  },
  {
    n: "04",
    icon: Flame,
    title: "Heat press",
    body: "The film is positioned on the garment and pressed at 160°C for 15 seconds under firm pressure. The adhesive melts into the fibers, the design transfers permanently.",
  },
  {
    n: "05",
    icon: Sparkles,
    title: "Peel & finish",
    body: "After a brief cool-down, the carrier film peels away cleanly to reveal a vivid, high-resolution print bonded to the fabric, soft to the touch and ready to wear.",
  },
];

const USES = [
  {
    name: "Photographic prints",
    aka: "Full-color, full-detail",
    body: "Photographs, gradients, fine illustrations, DTF reproduces everything your file contains, with the precision of inkjet and the resilience of textile printing.",
    bestFor: "Memorial pieces, fan merch, art collabs",
  },
  {
    name: "Small runs & one-offs",
    aka: "From a single piece",
    body: "No screens, no minimums. We print one custom shirt as easily as one hundred. Perfect for events, gifts, samples and on-demand programs.",
    bestFor: "Custom orders, samples, prototypes, gifts",
  },
  {
    name: "Mixed-fabric productions",
    aka: "One method, every textile",
    body: "Cotton, polyester, blends, nylon, fleece, performance fabrics, DTF bonds to virtually any textile. Ideal when one collection mixes many materials.",
    bestFor: "Sportswear, uniforms, mixed apparel lines",
  },
  {
    name: "Promotional & corporate",
    aka: "Multi-design, multi-garment",
    body: "Thousands of vivid logos on a single gang sheet, transferred onto the right placement on every piece. Fast turnaround for events, launches and giveaways.",
    bestFor: "Event apparel, corporate merch, swag bags",
  },
];

const ADVANTAGES = [
  {
    icon: ImageIcon,
    title: "Photographic quality",
    body: "Full CMYK with a white underbase, gradients, photos, fine details and unlimited colors, all in a single pass.",
  },
  {
    icon: ShieldCheck,
    title: "Exceptional durability",
    body: "Survives 50+ industrial wash cycles without cracking, fading or peeling when properly applied and cared for.",
  },
  {
    icon: InfinityIcon,
    title: "No quantity limits",
    body: "From a single custom piece to thousands of units, no setup costs, no minimum order, no compromise.",
  },
  {
    icon: Sparkles,
    title: "Works on any fabric",
    body: "Cotton, polyester, blends, nylon, fleece, denim, performance wear, light or dark, smooth or textured.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    body: "No screens to burn, no setup time. Production-ready as soon as your file is approved, most jobs ship in 5 days.",
  },
  {
    icon: Palette,
    title: "Vivid on dark garments",
    body: "The white underbase guarantees that every color stays bright and saturated, even on black, navy or deep colors.",
  },
];

const SPECS = [
  { label: "Minimum quantity", value: "1 piece" },
  { label: "Colors per design", value: "Unlimited (CMYK + W)" },
  { label: "Max print area", value: "55 × 100 cm" },
  { label: "Resolution", value: "1440 dpi" },
  { label: "Standard turnaround", value: "5  to 7 working days" },
  { label: "Wash resistance", value: "50+ cycles at 30°C" },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function DTFPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <Intro />
      <Process />
      <Uses />
      <GangShowcase />
      <Advantages />
      <Specs />
      <CTA />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A heat press transferring a vibrant full-color DTF design onto a black t-shirt with steam rising in the Jordal workshop"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <nav className="mb-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
          <Link to="/" className="hover:text-lime">Home</Link>
          <span className="text-cream">/</span>
          <Link to="/impression" className="hover:text-lime">Printing methods</Link>
          <span className="text-cream">/</span>
          <span className="text-lime">DTF Transfer</span>
        </nav>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
                Method 03 · DTF Transfer
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.035em] text-balance">
              No limits to
              <br />
              <span className="italic text-lime">your creativity.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream lg:text-xl">
              Direct-to-Film is the modern revolution in textile printing.
              Photographic detail, unlimited colors, soft hand and uncompromising
              durability, on virtually any fabric, from a single piece up.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-semibold text-ink transition-all hover:bg-cream hover:shadow-glow"
              >
                Start your DTF project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/impression"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-4 text-sm font-semibold text-cream transition-all hover:bg-cream/10"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                All printing methods
              </Link>
            </div>
          </div>

          <aside className="col-span-12 mt-10 lg:col-span-4 lg:mt-0">
            <div className="h-full rounded-3xl border border-cream/15 bg-cream/5 p-7 backdrop-blur-md">
              <p className="font-script text-3xl text-lime">At a glance</p>
              <dl className="mt-5 space-y-4">
                {SPECS.slice(0, 4).map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3 last:border-0"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream">
                      {spec.label}
                    </dt>
                    <dd className="text-right font-display text-lg font-semibold text-cream">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Intro                                                                       */
/* -------------------------------------------------------------------------- */

function Intro() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The technology
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Print to film,
              <br />
              press to fabric,
              <br />
              <span className="italic">wear forever.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/75 lg:text-xl">
              Direct-to-Film transfer is the most versatile printing method in
              modern apparel. A specialized inkjet lays full-color CMYK ink and
              opaque white directly onto a PET carrier film. A hot-melt
              adhesive powder is dusted on, cured, and the transfer is ready , 
              no screens, no plates, no minimums.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 lg:text-xl">
              On press day, the film is positioned on the garment and bonded
              under heat and pressure. The carrier peels away to reveal a
              high-resolution print fused into the fabric, vibrant, durable
              and remarkably soft. From a single custom tee to thousands of
              uniforms, from photographs to fine line art, DTF removes the
              traditional limits of textile decoration.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <Stat value="∞" label="Colors per design" />
              <Stat value="50+" label="Wash cycles" />
              <Stat value="1" label="Minimum quantity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold tracking-tight lg:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/55">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Process                                                                     */
/* -------------------------------------------------------------------------- */

function Process() {
  return (
    <section className="relative bg-ink py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block">
        <img
          src={detailImg}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          aria-hidden
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-lime">
            The process
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            Five steps from pixels to wearable print.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.n}
                className="group relative flex flex-col gap-5 bg-ink p-8 transition-colors hover:bg-ink-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-lime/90">
                    {step.n}
                  </span>
                  <Icon className="h-6 w-6 text-cream transition-colors group-hover:text-lime" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Uses                                                                        */
/* -------------------------------------------------------------------------- */

function Uses() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 ">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The use cases
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              When DTF is
              <br />
              the <span className="italic">right call.</span>
            </h2>
          </div>
          <p className="max-w-md mt-8 text-base leading-relaxed text-ink/65">
            DTF excels everywhere screens become limiting, full color, mixed
            fabrics, small runs and tight deadlines. Here are the projects we
            print most often.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {USES.map((use, i) => (
            <article
              key={use.name}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-lime hover:shadow-soft lg:p-10"
            >
              {/* <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-ink/30">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-ink/10 transition-colors group-hover:bg-lime" />
              </div> */}
              <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">
                {use.name}
              </h3>
              <p className="mt-1 font-script text-2xl text-lime-deep">
                {use.aka}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {use.body}
              </p>
              <div className="mt-7 border-t border-ink/10 pt-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  Best for
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  {use.bestFor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Gang sheet showcase                                                         */
/* -------------------------------------------------------------------------- */

function GangShowcase() {
  return (
    <section className="relative overflow-hidden bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The efficiency
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Gang sheets,
              <br />
              <span className="italic">smarter runs.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Multiple designs, sizes, and clients can share the same roll of
              film. Our team nests every artwork tightly to maximize coverage,
              minimize waste, and keep your per-piece cost down, even on
              ultra-small production runs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              The result: photographic prints at a price that scales sensibly,
              and the freedom to mix dozens of designs in one production batch.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "CMYK + White",
                "Gang-sheet nesting",
                "Soft hand-feel",
                "Wash-tested",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/15 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={gangImg}
                alt="A long DTF gang sheet emerging from a wide-format printer, filled with dozens of vivid full-color designs"
                width={1600}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-6 text-cream">
                <div>
                  <p className="font-script text-2xl text-lime">Gang-sheet production</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream">
                    1440 dpi · CMYK + White · 55 cm wide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Advantages                                                                  */
/* -------------------------------------------------------------------------- */

function Advantages() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
            Why DTF
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            The most versatile
            <br />
            method we <span className="italic">offer.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group rounded-3xl border border-ink/10 bg-card p-7 transition-all hover:border-lime hover:shadow-soft"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/15 text-ink transition-colors group-hover:bg-lime">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {adv.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Specs                                                                       */
/* -------------------------------------------------------------------------- */

function Specs() {
  return (
    <section className="relative bg-ink py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-lime">
              Technical specs
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
              The numbers behind every transfer.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream">
            Need express turnaround, ready-to-press films shipped to your team,
            or oversized transfers? Just ask, we build around your schedule.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-2 bg-ink p-7 transition-colors hover:bg-ink-soft"
            >
              <dt className="text-[11px] uppercase tracking-[0.22em] text-cream">
                {spec.label}
              </dt>
              <dd className="font-display text-2xl font-semibold tracking-tight">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "No setup fees",
            "Single-piece minimum",
            "Wash-tested before shipping",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-5 py-4 text-sm text-cream"
            >
              <Check className="h-4 w-4 shrink-0 text-lime" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                         */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-lime via-lime to-lime-deep p-10 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cream/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />

          <div className="relative grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-script text-3xl text-ink/70">
                Ready when you are
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink lg:text-6xl">
                Let&apos;s transfer your
                <br />
                <span className="italic">next big idea.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink/75">
                Send us your artwork and a quantity, even just one. We&apos;ll
                come back with a press plan, a fabric recommendation and a
                quote within 24 hours.
              </p>
            </div>
            <div className="col-span-12 gap-5 lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-5 text-base font-semibold text-cream shadow-soft transition-all hover:bg-ink-soft"
              >
                Get a quote
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/impression"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-ink lg:ml-0"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all methods
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
