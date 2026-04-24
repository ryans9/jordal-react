import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Sparkles,
  Layers,
  Palette,
  Wrench,
  Sun,
  Droplets,
  ShieldCheck,
  Zap,
  Eye,
} from "lucide-react";

import heroImg from "@/assets/silkscreen-hero.jpg";
import detailImg from "@/assets/silkscreen-detail.jpg";
import inksImg from "@/assets/silkscreen-inks.jpg";

export const Route = createFileRoute("/impression/silkscreen")({
  component: SilkscreenPage,
  head: () => ({
    meta: [
      { title: "Silkscreen Printing, Jordal · The classic, perfected" },
      {
        name: "description",
        content:
          "Silkscreen printing from our Quebec workshop. Vivid, opaque, long-lasting prints on apparel and promotional supports, Pantone-matched plastisol & water-based inks.",
      },
      { property: "og:title", content: "Silkscreen Printing, Jordal" },
      {
        property: "og:description",
        content:
          "From coating to curing, discover how we push pigment through fine mesh to deliver prints with depth, opacity and decade-long durability.",
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
    icon: Droplets,
    title: "Coating",
    body: "A polyester mesh stretched on an aluminum frame is coated with a photosensitive emulsion. Once dried, it forms a smooth, light-sensitive skin that will become our printable stencil.",
  },
  {
    n: "02",
    icon: Sun,
    title: "Exposure",
    body: "A film carrying your artwork is laid over the screen and exposed to UV light. Where light hits, the emulsion hardens. Where the film blocks light, the emulsion stays soluble, and washes out with water to reveal the open mesh.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Press setup",
    body: "The screen mounts on the carousel press, registered against the others if the design has multiple colors. The garment is fixed flat on the platen by a vacuum suction table to prevent any movement.",
  },
  {
    n: "04",
    icon: Layers,
    title: "Printing",
    body: "Ink is flooded across the screen, then a squeegee glides under firm pressure, pushing pigment through the open mesh and onto the support. One pass per color, one screen at a time.",
  },
  {
    n: "05",
    icon: Zap,
    title: "Curing",
    body: "The print travels through a conveyor dryer at 160°C. Plastisol cures, water-based inks lock into the fibers, the print becomes permanent, wash-resistant, and ready to wear.",
  },
];

const INK_TYPES = [
  {
    name: "Plastisol",
    aka: "The workhorse",
    body: "PVC-based ink that sits on top of the fabric in a thick, vivid, opaque deposit. Unbeatable on dark garments and the gold standard for sportswear, merch and bold graphics.",
    bestFor: "Cotton tees, hoodies, sportswear, dark colors",
  },
  {
    name: "Water-based",
    aka: "The soft hand",
    body: "Pigment penetrates into the fibers rather than sitting on top. The print becomes part of the fabric, soft to the touch, breathable, with a vintage, fashion-forward feel.",
    bestFor: "Premium tees, fashion brands, light garments",
  },
  {
    name: "Discharge",
    aka: "The dyed-out look",
    body: "A bleaching agent removes the original dye and replaces it with new pigment in one pass. Zero hand-feel, ultra-soft finish, exclusive to 100% cotton and reactive-dyed garments.",
    bestFor: "100% cotton, soft vintage prints, retail apparel",
  },
  {
    name: "Specialty inks",
    aka: "Tactile finishes",
    body: "Puff, metallic, glitter, glow-in-the-dark, suede, high-density, reflective. Used as accents to add dimension, sparkle or surprise to a flat print.",
    bestFor: "Accent details, premium merch, statement pieces",
  },
];

const ADVANTAGES = [
  {
    icon: Layers,
    title: "Heaviest ink deposit",
    body: "5 to 10× more pigment than digital methods, that's where the legendary opacity, vibrancy and longevity come from.",
  },
  {
    icon: ShieldCheck,
    title: "Built to outlast trends",
    body: "Properly cured silkscreen survives hundreds of industrial washes without cracking, peeling or fading.",
  },
  {
    icon: Palette,
    title: "Pantone-matched colors",
    body: "Every ink is mixed in-house to your exact Pantone reference. Consistent, repeatable, run after run.",
  },
  {
    icon: Sparkles,
    title: "Endless supports",
    body: "Cotton, polyester, blends, canvas tote bags, hoodies, posters, technical fabrics, different inks for every substrate.",
  },
  {
    icon: Zap,
    title: "Cost-effective at volume",
    body: "Set-up is fixed; per-piece cost drops dramatically past 50 units. The most economical method for medium-to-large runs.",
  },
  {
    icon: Eye,
    title: "Unmatched visual depth",
    body: "Thick, dimensional, almost three-dimensional under raking light. Nothing else looks like a true silkscreen.",
  },
];

const SPECS = [
  { label: "Minimum quantity", value: "25 pieces" },
  { label: "Max colors per design", value: "Up to 8" },
  { label: "Max print area", value: "40 × 50 cm" },
  { label: "Mesh count", value: "60  to 305 threads/in" },
  { label: "Standard turnaround", value: "8  to 10 working days" },
  { label: "Color matching", value: "Pantone Solid Coated" },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function SilkscreenPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <Intro />
      <Process />
      <InkTypes />
      <InkShowcase />
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
          alt="Silkscreen press pushing vivid red ink through a fine mesh onto a folded heather grey t-shirt in the Jordal workshop"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <nav className="mb-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream/70">
          <Link to="/" className="hover:text-lime">Home</Link>
          <span className="text-cream/30">/</span>
          <Link to="/impression" className="hover:text-lime">Printing methods</Link>
          <span className="text-cream/30">/</span>
          <span className="text-lime">Silkscreen</span>
        </nav>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/80">
                Method 01 · Silkscreen
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.035em] text-balance">
              The classic,
              <br />
              <span className="italic text-lime">perfected.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 lg:text-xl">
              Silkscreen is the original printing craft, and still the most
              vivid. Thick, opaque ink pushed through fine mesh, cured into the
              fabric, built to outlast every wash you can throw at it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-semibold text-ink transition-all hover:bg-cream hover:shadow-glow"
              >
                Start your silkscreen project
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
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/55">
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
              The craft
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Pigment pushed
              <br />
              through mesh,
              <br />
              <span className="italic">one color at a time.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/75 lg:text-xl">
              Silkscreen, also called serigraphy, is a stencil-based printing
              process. A fine fabric mesh is stretched over an aluminum frame
              and coated with a UV-sensitive emulsion. Exposed under light
              through a film, the emulsion hardens everywhere except where your
              artwork sits. The unhardened areas wash out, leaving an open
              stencil.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 lg:text-xl">
              On the press, a squeegee glides across the screen, forcing ink
              through those open meshes onto the support below. One screen, one
              color, one pass, repeated for every shade of your design. The
              result is a print with depth, opacity and a tactile presence no
              digital method can match.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <Stat value="10×" label="More ink than digital" />
              <Stat value="200+" label="Wash cycles" />
              <Stat value="8" label="Colors per design" />
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
            Five steps from artwork to cured print.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.n}
                className="group relative flex flex-col gap-5 bg-ink p-8 transition-colors hover:bg-ink-soft lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-lime/90">
                    {step.n}
                  </span>
                  <Icon className="h-6 w-6 text-cream/40 transition-colors group-hover:text-lime" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/70">
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
/* Ink types                                                                   */
/* -------------------------------------------------------------------------- */

function InkTypes() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The inks
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Four families,
              <br />
              countless <span className="italic">finishes.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/65">
            The ink choice defines the look, the feel and the longevity of the
            print. We help you pick the right system for your fabric, your
            audience, and your brand vocabulary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {INK_TYPES.map((type, i) => (
            <article
              key={type.name}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-lime hover:shadow-soft lg:p-10"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-ink/30">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-ink/10 transition-colors group-hover:bg-lime" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">
                {type.name}
              </h3>
              <p className="mt-1 font-script text-2xl text-lime-deep">
                {type.aka}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {type.body}
              </p>
              <div className="mt-7 border-t border-ink/10 pt-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  Best for
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  {type.bestFor}
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
/* Ink showcase                                                                */
/* -------------------------------------------------------------------------- */

function InkShowcase() {
  return (
    <section className="relative overflow-hidden bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The palette
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Pantone-matched,
              <br />
              <span className="italic">mixed in-house.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Every ink is hand-mixed by our pressmen against the official
              Pantone Solid Coated reference. We weigh, blend, then test on a
              sample of your exact garment before committing to the run.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Once a formula is approved, we archive it. Reorder six months or
              six years from now and your color comes back identical.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Pantone Solid",
                "Plastisol & water-based",
                "Mixed in-house",
                "Formula archived",
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
                src={inksImg}
                alt="Open buckets of vivid silkscreen inks in orange, magenta, blue, yellow and red on a workshop table with a Pantone swatch chart"
                width={1600}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-6 text-cream">
                <div>
                  <p className="font-script text-2xl text-lime">In-house mixing lab</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream/80">
                    Plastisol · Water-based · Discharge · Specialty
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
            Why silkscreen
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            Still the benchmark
            <br />
            after a <span className="italic">century.</span>
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
              The numbers behind every run.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/65">
            Need oversized, all-over, or sleeve prints? We run jumbo platens
            and specialty fixtures on demand, just ask.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-2 bg-ink p-7 transition-colors hover:bg-ink-soft"
            >
              <dt className="text-[11px] uppercase tracking-[0.22em] text-cream/55">
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
            "Free strike-off on first order",
            "Pantone formulas archived",
            "Hand inspection on every piece",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-5 py-4 text-sm text-cream/85"
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
                Let&apos;s print your
                <br />
                <span className="italic">next collection.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink/75">
                Send us your artwork and quantities, we&apos;ll come back with
                ink recommendations, a strike-off plan, and a quote within 24
                hours.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
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
