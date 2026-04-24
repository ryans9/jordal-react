import { useState } from "react";

import { ArrowUpRight, Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { JordalLogo } from "./JordalLogo";

const SERVICES = [
  { label: "Promotional items", href: "/produits" },
  { label: "Corporate apparel", href: "/produits/vetements" },
  { label: "Embroidery", href: "/impression/broderie" },
  { label: "DTF transfer", href: "/impression/dtf" },
  { label: "Screen printing", href: "/impression/serigraphie" },
  { label: "Online catalog", href: "/catalogue" },
];

const COMPANY = [
  { label: "About", href: "/a-propos" },
  { label: "Our reps", href: "/representants" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy", href: "/confidentialite" },
  { label: "Cookies", href: "/temoins" },
];

const LOCATIONS = [
  {
    title: "Headquarters",
    city: "Saint-Jérôme",
    address: "247 Boul. Maisonneuve, J5L 0A1, QC",
    email: "carl@jordal.ca",
    phone: "450 419-8855 #103",
  },
  {
    title: "Mobile showroom",
    city: "South Shore",
    address: "Mobile service by appointment",
    email: "julie@jordal.ca",
    phone: "514 797-1201",
  },
  {
    title: "Office",
    city: "Eastern Townships",
    address: "4050 Lesage St., suite 201, Sherbrooke, J1C 0B6, QC",
    email: "hugo@jordal.ca",
    phone: "819 446-6355",
  },
];

const MARQUEE = [
  "Embroidery",
  "Screen printing",
  "DTF transfer",
  "Sublimation",
  "Promotional items",
  "Corporate apparel",
  "Custom bags",
  "Business gifts",
];

export function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* Decorative radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-radial-lime)" }}
      />

      {/* Newsletter band */}
      <section className="relative border-b border-cream/10">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Newsletter
            </span>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              With over <span className="text-lime">20 years</span>{" "}
              of experience, Jordal sees{" "}
              <em className="font-script text-5xl font-normal text-lime md:text-6xl lg:text-7xl">
                further than ever.
              </em>
            </h2>
            <p className="mt-5 max-w-lg text-cream/60">
              Ideas, new products, and corporate inspiration, straight to your inbox, once a month.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="group relative flex flex-col gap-3 rounded-3xl border border-cream/10 bg-cream/[0.04] p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:p-2"
          >
            <Mail className="ml-3 hidden h-5 w-5 shrink-0 text-cream/40 sm:block" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/30 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:shadow-glow"
            >
              Subscribe
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-b border-cream/10 py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-2xl font-medium text-cream/40 md:text-3xl"
            >
              {item}
              <span className="h-2 w-2 rotate-45 bg-lime" />
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="/" aria-label="Jordal, Home">
              <JordalLogo variant="light" className="text-[18px]" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A Quebec workshop specializing in corporate apparel, embroidery,
              screen printing, and premium promotional items for over two decades.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 transition-all hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <FooterColumn title="Services" items={SERVICES} />
            <FooterColumn title="Company" items={COMPANY} />
          </div>

          {/* Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime">
              Business hours
            </h4>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-baseline justify-between border-b border-cream/10 pb-3">
                <dt className="text-cream/60">Monday – Thursday</dt>
                <dd className="font-display text-base font-semibold tabular-nums">
                  7:00 AM to 4:00 PM
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-cream/10 pb-3">
                <dt className="text-cream/60">Friday</dt>
                <dd className="font-display text-base font-semibold tabular-nums">
                  7:00 AM to 1:00 PM
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-cream/60">Saturday – Sunday</dt>
                <dd className="font-display text-base font-semibold text-cream/40">
                  Closed
                </dd>
              </div>
            </dl>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime"
            >
              Book a visit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-cream/10 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div key={loc.title} className="group bg-ink p-8 transition-colors hover:bg-ink-soft">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime">
                <MapPin className="h-3.5 w-3.5" />
                {loc.title}
              </div>
              <h5 className="mt-3 font-display text-2xl font-bold tracking-tight">{loc.city}</h5>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{loc.address}</p>
              <div className="mt-5 space-y-2 text-sm">
                <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-cream/80 transition-colors hover:text-lime">
                  <Mail className="h-3.5 w-3.5" /> {loc.email}
                </a>
                <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-cream/80 transition-colors hover:text-lime">
                  <Phone className="h-3.5 w-3.5" /> {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Jordal, Apparel &amp; promotional products. Proudly from Quebec.
          </p>
          <div className="flex items-center gap-6">
            <a href="/confidentialite" className="hover:text-cream">Privacy</a>
            <a href="/temoins" className="hover:text-cream">Cookies</a>
            <span className="flex items-center gap-2">
              Crafted with
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              in Quebec
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime">{title}</h4>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-sm text-cream/75 transition-colors hover:text-lime"
            >
              <span className="underline-grow">{item.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
