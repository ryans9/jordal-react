import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Users,
  Heart,
  TrendingUp,
  Truck,
  Award,
  Sparkles,
  Eye,
  PenTool,
  Package,
  CheckCircle2,
} from "lucide-react";

import heroImg from "@/assets/promo-clothing-hero.jpg";
import rangeImg from "@/assets/promo-clothing-range.jpg";

export const Route = createFileRoute("/services/promotional-clothing")({
  component: PromotionalClothingPage,
  head: () => ({
    meta: [
      { title: "Promotional Clothing, Jordal · Branded apparel that represents you" },
      {
        name: "description",
        content:
          "Custom corporate apparel designed to carry your brand. T-shirts, polos, jackets, caps and uniforms, printed, embroidered and delivered from our Quebec workshop.",
      },
      { property: "og:title", content: "Promotional Clothing, Jordal" },
      {
        property: "og:description",
        content:
          "From browsing to delivery, a made-to-measure clothing program for your team. 20+ years, 1000+ projects, top brands.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const BENEFITS = [
  {
    icon: Users,
    title: "Unifies your team's identity",
    body:
      "A consistent look is the clearest sign of a professional team. Apparel in your corporate colours projects coherence at every touchpoint.",
  },
  {
    icon: Heart,
    title: "Creates a sense of belonging",
    body:
      "Wearing the brand turns employees into ambassadors. Teams feel more committed, loyal, and visibly part of something bigger.",
  },
  {
    icon: TrendingUp,
    title: "Maximises your marketing reach",
    body:
      "Every sweater, cap or jacket is a moving billboard. High-quality garments deliver continuous return on investment for years.",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: Eye,
    title: "Browsing & selection",
    body:
      "Visit our showroom or browse the digital catalog. Our team helps you handpick garments that fit your brand, budget and the way your people work.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design & decoration",
    body:
      "We design according to your brand guidelines or bring your idea to life. Logos, colours, placements, every detail validated before production.",
  },
  {
    n: "03",
    icon: Package,
    title: "In-house manufacturing",
    body:
      "Production happens under one roof: silkscreen, embroidery, DTF. Nothing outsourced, that is how we keep quality consistent and timelines tight.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Final delivery",
    body:
      "Once production is done, we pack and ship. You receive your order ready to wear, no surprises, no follow-up calls needed.",
  },
];

const CATEGORIES = [
  "T-shirts",
  "Polos",
  "Sweaters & hoodies",
  "Jackets & coats",
  "Caps & beanies",
  "Pants & shorts",
  "Workwear & uniforms",
  "Socks & accessories",
];

const STATS = [
  { value: "20+", label: "Years in business" },
  { value: "1000+", label: "Projects delivered" },
  { value: "100%", label: "In-house production" },
];

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

function PromotionalClothingPage() {
  return (
    <main className="bg-cream">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-lime)" }} />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-lime"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to home
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                <Sparkles className="h-3 w-3" />
                Service · Promotional Clothing
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[0.95] tracking-tight">
                Apparel that <span className="italic text-lime">represents</span> your brand , 
                stitch by stitch.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-cream/75 lg:text-xl">
                Whether for events, uniforms or everyday workwear, we customise a wide range of
                quality garments designed to carry your brand the right way: cohesive, durable,
                unmistakably yours.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:shadow-glow"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="/catalogue"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
                >
                  Browse catalog
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-12">
              <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-cream/10 lg:border-y lg:border-cream/10">
                {STATS.map((s) => (
                  <div key={s.label} className="px-1 py-4 lg:py-5">
                    <div className="font-display text-3xl font-bold text-lime lg:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cream/55">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY, benefits */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-deep">
              Why it works
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
              Why have promotional clothing in your colours?
            </h2>
            <p className="mt-5 text-base text-ink/65">
              Corporate clothing is often the first thing people notice, and the last thing they
              remember. Done well, it does the work of a hundred ads.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-lime transition-colors group-hover:bg-lime group-hover:text-ink">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE ULTIMATE SOLUTION, split */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-2">
          <div className="px-6 py-20 lg:px-12 lg:py-32">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime">
              Ultimate solution
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-[3.25rem]">
              The complete answer for your company's clothing.
            </h2>
            <p className="mt-6 text-base text-cream/70 lg:text-lg">
              At Jordal, we know promotional clothing has to convey professionalism, cohesion and
              seriousness, without ever feeling like a uniform. That is why we offer a true
              made-to-measure customisation service, tailored to your business reality and your
              brand.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/10 bg-white/[0.04] p-6">
                <Truck className="h-8 w-8 text-lime" />
                <h3 className="mt-4 font-display text-base font-bold">Fast turnaround</h3>
                <p className="mt-2 text-sm text-cream/65">
                  Modern facilities and dedicated machines let us deliver your projects faster than
                  the competition, without cutting corners.
                </p>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-white/[0.04] p-6">
                <Award className="h-8 w-8 text-lime" />
                <h3 className="mt-4 font-display text-base font-bold">+1000 projects done</h3>
                <p className="mt-2 text-sm text-cream/65">
                  Two decades, hundreds of teams equipped, across SMBs, sports clubs, municipal
                  fleets and national brands.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-0">
            <img
              src={rangeImg}
              alt="Stack of folded branded polos in corporate colours on a workshop table"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      {/* PROCESS, Design from A to Z */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-deep">
            Our process
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
            Design from <span className="italic text-lime-deep">A to Z</span>
          </h2>
          <p className="mt-5 text-base text-ink/65">
            One partner, four steps, zero hand-offs. From the first conversation to the final
            delivery, we keep the entire chain in-house.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-lime/40 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-bold leading-none text-ink/10 transition-colors group-hover:text-lime/60">
                  {p.n}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-lime">
                  <p.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-8 font-display text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WIDE RANGE */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-deep">
                Selection
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
                A wide range of promotional clothing.
              </h2>
              <p className="mt-5 text-base text-ink/65">
                Working with a leader like Jordal means access to one of the largest selections in
                Quebec. Our most popular categories cover every season and every team:
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-lime hover:text-ink"
              >
                Discuss your selection
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CATEGORIES.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink transition-all hover:border-lime hover:bg-lime/5"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime/20 text-lime-deep">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-cream lg:px-16 lg:py-24">
          <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial-lime)" }} />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime">
                Ready when you are
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
                Let's dress your team in something they'll actually want to wear.
              </h2>
              <p className="mt-5 max-w-xl text-base text-cream/70 lg:text-lg">
                Tell us about your brand, your timeline and your team, we'll come back with a
                concrete proposal, samples and a clear quote.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-all hover:shadow-glow"
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
