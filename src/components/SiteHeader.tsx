import { useEffect, useState } from "react";

import { Menu, X, ArrowUpRight, Phone, ChevronDown } from "lucide-react";
import { JordalLogo } from "./JordalLogo";

type NavChild = {
  label: string;
  href: string;
  description?: string;
};

type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: NavChild[];
};

const NAV: NavItem[] = [
  { label: "Reps", href: "/representants" },
  { label: "Catalog", href: "/catalogue", badge: "New" },
  { label: "Products", href: "/produits" },
  {
    label: "Printing",
    href: "/impression",
    children: [
      { label: "Overview", href: "/impression", description: "All printing methods" },
      { label: "Embroidery", href: "/impression/embroidery", description: "Stitched, premium finish" },
      { label: "Silkscreen", href: "/impression/silkscreen", description: "Bold colors, high volume" },
      { label: "DTF Transfer", href: "/impression/dtf", description: "Photographic, any fabric" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility ribbon */}
      <div className="hidden border-b border-ink/10 bg-ink text-cream md:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 text-[11px] font-medium uppercase tracking-[0.18em]">
          <div className="flex items-center gap-6 text-cream/70">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              In workshop · Saint-Jérôme · Sherbrooke
            </span>
          </div>
          <div className="flex items-center gap-6 text-cream/80">
            <a href="tel:4504198855" className="flex items-center gap-2 underline-grow">
              <Phone className="h-3 w-3" />
              450 419-8855
            </a>
            <span className="text-cream/30">/</span>
            <a href="mailto:carl@jordal.ca" className="underline-grow">carl@jordal.ca</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_0_oklch(0_0_0/0.06)]"
            : "bg-cream",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-6 lg:h-24">
          <a href="/" className="shrink-0" aria-label="Jordal — Home">
            <JordalLogo className="text-[14px] lg:text-[16px]" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div key={item.href} className="group/nav relative">
                <a
                  href={item.href}
                  className="group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-lime px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 text-ink/50 transition-transform group-hover/nav:rotate-180" />
                  )}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
                </a>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-[0_20px_60px_-15px_oklch(0_0_0/0.25)]">
                      <div className="border-b border-ink/10 bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                        Printing methods
                      </div>
                      <div className="p-2">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-start justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-ink/5"
                          >
                            <div>
                              <div className="text-sm font-semibold text-ink">{child.label}</div>
                              {child.description && (
                                <div className="mt-0.5 text-xs text-ink/55">{child.description}</div>
                              )}
                            </div>
                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink/30 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-ink" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden items-center rounded-full border border-ink/15 bg-cream p-0.5 text-xs font-semibold sm:flex">
              {(["FR", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={[
                    "rounded-full px-3 py-1.5 transition-all",
                    lang === l ? "bg-ink text-cream" : "text-ink/60 hover:text-ink",
                  ].join(" ")}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-all hover:bg-lime hover:text-ink hover:shadow-glow md:inline-flex"
            >
              Get a quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-ink/10 bg-cream lg:hidden">
            <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
              {NAV.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-ink hover:bg-ink/5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-ink/40" />
                  </a>
                  {item.children && (
                    <div className="ml-4 mb-2 flex flex-col gap-0.5 border-l-2 border-ink/10 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-3 py-2 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-cream"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
