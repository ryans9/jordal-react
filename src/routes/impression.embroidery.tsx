import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Sparkles,
  Ruler,
  Shirt,
  Layers,
  Palette,
  Wrench,
  Scissors,
  ShieldCheck,
} from "lucide-react";


import heroImg from "@/assets/embroidery-hero.jpg";
import detailImg from "@/assets/embroidery-detail.jpg";
import threadsImg from "@/assets/embroidery-threads.jpg";

export const Route = createFileRoute("/impression/embroidery")({
  component: EmbroideryPage,
  head: () => ({
    meta: [
      { title: "Embroidery, Jordal · Stitched permanence on every garment" },
      {
        name: "description",
        content:
          "Premium embroidery from our Quebec workshop. Multi-head Tajima machines, 15-needle precision, Isacord & Pantone-matched threads. Polos, caps, jackets, uniforms.",
      },
      { property: "og:title", content: "Embroidery, Jordal" },
      {
        property: "og:description",
        content:
          "From digitization to the final stitch, discover how we turn your logo into a tactile, lifetime emblem.",
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
    icon: Wrench,
    title: "Digitization",
    body: "Your artwork is converted into a precise stitch file, paths, densities, underlay, pull compensation, color sequences. This is the most critical step: a great digitization is what separates a flat-looking logo from a sharp, dimensional emblem.",
  },
  {
    n: "02",
    icon: Ruler,
    title: "Hooping",
    body: "The garment is fixed in a hoop with the right backing, cut-away, tear-away, or water-soluble depending on fabric. Stabilization prevents distortion, puckering, and mis-registration during the run.",
  },
  {
    n: "03",
    icon: Layers,
    title: "Stitching",
    body: "Multi-needle Tajima heads run up to 15 colors at once, plunging thousands of stitches per minute with surgical precision. Color changes happen automatically, what used to take hours now takes minutes.",
  },
  {
    n: "04",
    icon: Scissors,
    title: "Finishing",
    body: "Loose threads are trimmed, jump stitches removed, backing torn or cut away. Every piece is hand-inspected before it leaves the floor.",
  },
];

const TYPES = [
  {
    name: "Regular embroidery",
    aka: "Flat embroidery",
    body: "The most common technique. Threads are laid flat into the fabric in dense, continuous stitches that follow the contours of your logo. Crisp, refined, infinitely versatile.",
    bestFor: "Polos, dress shirts, fleece, jackets, caps",
  },
  {
    name: "3D puff embroidery",
    aka: "Foam embroidery",
    body: "A foam underlay is placed beneath satin stitches to create a raised, sculptural effect. Bold, sporty, instantly tactile, the signature look on snapback caps and varsity gear.",
    bestFor: "Caps, beanies, statement varsity pieces",
  },
  {
    name: "Tone-on-tone",
    aka: "Subtle stitch",
    body: "Thread color is matched to the garment for a discreet, premium emblem you feel before you see. Loved by hospitality, luxury and corporate uniforms.",
    bestFor: "Hospitality uniforms, premium polos, knitwear",
  },
  {
    name: "Applied patches",
    aka: "Embroidered patches",
    body: "The design is embroidered onto a separate substrate with a finished merrowed or laser-cut edge, then sewn or heat-pressed to the garment. Ideal for thick fabrics or replaceable badges.",
    bestFor: "Workwear, jackets, caps, technical apparel",
  },
];

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Lifetime durability",
    body: "Stitches outlast the garment. No cracking, no peeling, no fading after industrial laundering.",
  },
  {
    icon: Sparkles,
    title: "Perceived premium",
    body: "Embroidery instantly elevates a garment, the gold standard for corporate and hospitality apparel.",
  },
  {
    icon: Palette,
    title: "Pantone-matched thread",
    body: "We work from Isacord 40, over 380 colors with a Pantone conversion chart for true brand fidelity.",
  },
  {
    icon: Shirt,
    title: "Works on the toughest fabrics",
    body: "Caps, fleece, soft-shell, denim, canvas, fabrics that defeat printing welcome the needle.",
  },
];

const SPECS = [
  { label: "Minimum quantity", value: "12 pieces" },
  { label: "Stitch count", value: "Up to 50,000" },
  { label: "Colors per design", value: "Up to 15 simultaneous" },
  { label: "Max area (standard hoop)", value: "30 × 20 cm" },
  { label: "Standard turnaround", value: "10  to 12 working days" },
  { label: "Thread system", value: "Isacord 40 · 380+ colors" },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function EmbroideryPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <Intro />
      <Process />
      <Types />
      <ThreadShowcase />
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
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tajima multi-head embroidery machine stitching a logo on navy fabric in the Jordal workshop"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
          <Link to="/" className="hover:text-lime">Home</Link>
          <span className="text-cream">/</span>
          <Link to="/impression" className="hover:text-lime">Printing methods</Link>
          <span className="text-cream">/</span>
          <span className="text-lime">Embroidery</span>
        </nav>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
                Method 02 · Embroidery
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.035em] text-balance">
              Stitched
              <br />
              <span className="italic text-lime">permanence.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream lg:text-xl">
              Embroidery is the most premium signature you can put on a garment.
              Thread becomes part of the fabric, dimensional, tactile, and built
              to outlast the piece it decorates.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-semibold text-ink transition-all hover:bg-cream hover:shadow-glow"
              >
                Start your embroidery project
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

          {/* Side card */}
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
              The craft
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Thread laid into the
              <br />
              fabric, one stitch
              <br />
              <span className="italic">at a time.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/75 lg:text-xl">
              Embroidery is sewing transformed into branding. Your logo is first
              digitized, translated into the precise language of stitch paths,
              densities and underlay, and then executed by multi-head Japanese
              machines running up to fifteen colors at once.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 lg:text-xl">
              The needle plunges thousands of times per minute, building a
              tactile, three-dimensional emblem that becomes part of the
              garment itself. There is nothing to peel, nothing to crack, and no
              shortcut around the craft. It is the most premium way to wear a
              brand.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <Stat value="1 200" label="Stitches / minute" />
              <Stat value="15" label="Simultaneous colors" />
              <Stat value="380+" label="Thread shades" />
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
      {/* Background detail image */}
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
            Four steps from logo to finished piece.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.n}
                className="group relative flex flex-col gap-5 bg-ink p-8 transition-colors hover:bg-ink-soft lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-lime/90">
                    {step.n}
                  </span>
                  <Icon className="h-6 w-6 text-cream transition-colors group-hover:text-lime" />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
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
/* Types of embroidery                                                         */
/* -------------------------------------------------------------------------- */

function Types() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The styles
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Four ways to wear
              <br />
              your <span className="italic">signature.</span>
            </h2>
          </div>
          <p className="max-w-md mt-8 text-base leading-relaxed text-ink/65">
            We choose the right finish based on the fabric, the placement, and
            the visual impact you want. Below, the techniques we run most often
            in our cap and apparel programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TYPES.map((type, i) => (
            <article
              key={type.name}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-lime hover:shadow-soft lg:p-10"
            >
              {/* <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-ink/30">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-ink/10 transition-colors group-hover:bg-lime" />
              </div> */}
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
/* Thread showcase                                                             */
/* -------------------------------------------------------------------------- */

function ThreadShowcase() {
  return (
    <section className="relative overflow-hidden bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              The palette
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Pantone-matched
              <br />
              <span className="italic">to your brand.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              We work exclusively with Isacord 40 polyester thread, over 380
              shades, color-fast, abrasion-resistant, and engineered for
              industrial laundering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Send us your Pantone references and we cross-reference them on the
              official Pantone × Isacord conversion chart. Your green stays your
              green, run after run, garment after garment.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Isacord 40",
                "Pantone matching",
                "Color-fast",
                "Industrial wash",
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
                src={threadsImg}
                alt="Rainbow gradient of Isacord embroidery thread spools laid out on cream linen"
                width={1600}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-6 text-cream">
                <div>
                  <p className="font-script text-2xl text-lime">Isacord 40</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream">
                    380+ shades · Pantone matched
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
            Why embroidery
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            The premium standard
            <br />
            for a <span className="italic">reason.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          <p className="max-w-sm text-sm leading-relaxed text-cream">
            Beyond these defaults? Talk to us, we run jumbo hoops, sequin
            attachments, and cap frames on demand.
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
            "Free digitization on first order",
            "Sample sew-out before production",
            "Quality control on every piece",
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
                Let&apos;s stitch your
                <br />
                <span className="italic">next collection.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink/75">
                Send us your logo and a brief, we&apos;ll come back with
                recommendations, a sew-out plan, and a quote within 24 hours.
              </p>
            </div>
            <div className="col-span-12 flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-5 text-base font-semibold text-cream shadow-soft transition-all hover:bg-ink-soft"
              >
                Get a quote
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/impression"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-ink"
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
