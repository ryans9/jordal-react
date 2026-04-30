import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Search,
  Crown,
  Star,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/representants")({
  component: RepresentativesPage,
  head: () => ({
    meta: [
      { title: "Our Representatives, Jordal · A team across Quebec" },
      {
        name: "description",
        content:
          "Meet the Jordal sales team. Representatives covering Laurentides, Laval, Montréal, North Shore, South Shore, Estrie, Mauricie and Lanaudière.",
      },
      { property: "og:title", content: "Our Representatives, Jordal" },
      {
        property: "og:description",
        content:
          "Find the Jordal representative closest to you across Quebec, direct lines, dedicated territories, real people.",
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

type Rep = {
  name: string;
  role: string;
  territory?: string;
  phone: string;
  group: GroupKey;
  badge?: "leadership";
};

type GroupKey =
  | "north-shore"
  | "mobile-south-shore"
  | "estrie";

const GROUPS: { key: GroupKey; label: string; icon: typeof MapPin; blurb: string }[] = [
  {
    key: "north-shore",
    label: "North Shore",
    icon: MapPin,
    blurb:
      "Our largest team, covering Laurentides, Laval, Montréal, Mauricie, Lanaudière and the North & South Shores.",
  },
  {
    key: "mobile-south-shore",
    label: "Mobile Showroom · South Shore",
    icon: Truck,
    blurb:
      "Our mobile showroom brings the catalog directly to your door across the South Shore and Estrie regions.",
  },
  {
    key: "estrie",
    label: "Estrie",
    icon: MapPin,
    blurb: "A dedicated Eastern Townships team for clients across the Estrie region.",
  },
];

const REPS: Rep[] = [
  // North Shore
  {
    name: "Daniel Emond",
    role: "President",
    phone: "514-793-7533",
    group: "north-shore",
    badge: "leadership",
  },
  {
    name: "Carl Emond",
    role: "Vice-President",
    phone: "438-884-7533",
    group: "north-shore",
    badge: "leadership",
  },
  {
    name: "Caroline",
    role: "Representative",
    territory: "Laval",
    phone: "514-910-1782",
    group: "north-shore",
  },
  {
    name: "Nicole Roy",
    role: "Representative",
    territory: "Laurentides, Laval",
    phone: "450-560-1465",
    group: "north-shore",
  },
  {
    name: "Danielle Ross",
    role: "Representative",
    territory: "Laurentides, Laval",
    phone: "514-862-8320",
    group: "north-shore",
  },
  {
    name: "François Cloutier",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "450-275-4626",
    group: "north-shore",
  },
  {
    name: "Pierre Roche",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-260-0378",
    group: "north-shore",
  },
  {
    name: "Luc Sigouin",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-910-2898",
    group: "north-shore",
  },
  {
    name: "Jean Arcand",
    role: "Representative",
    territory: "Mauricie, Lanaudière, Montréal",
    phone: "438-396-2190",
    group: "north-shore",
  },
  {
    name: "François Barrette",
    role: "Representative",
    territory: "Rive Sud, Rive Nord",
    phone: "514-862-4595",
    group: "north-shore",
  },
  {
    name: "Patrice Gravel",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-217-1713",
    group: "north-shore",
  },
  {
    name: "Dany Picard",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-885-7012",
    group: "north-shore",
  },
  {
    name: "Yannick Collin",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-998-9313",
    group: "north-shore",
  },
  {
    name: "Eric Lavallée",
    role: "Representative",
    territory: "Laurentides, Laval, Montréal",
    phone: "514-953-2019",
    group: "north-shore",
  },
  // Mobile Showroom
  {
    name: "Julie Gagnon",
    role: "Representative",
    territory: "Rive Sud, Estrie",
    phone: "514-797-1201",
    group: "mobile-south-shore",
  },
  // Estrie
  {
    name: "Alain Bernard",
    role: "Representative",
    territory: "Rive Sud, Estrie",
    phone: "514-773-1905",
    group: "estrie",
  },
  {
    name: "Jacques Faucher",
    role: "Representative",
    territory: "Estrie",
    phone: "819-345-8810",
    group: "estrie",
  },
  {
    name: "Hugo Demers",
    role: "Representative",
    territory: "Estrie",
    phone: "819-446-6355",
    group: "estrie",
  },
  {
    name: "Louis Boulet Côté",
    role: "Representative",
    territory: "Estrie",
    phone: "450-204-1960",
    group: "estrie",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function RepresentativesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return REPS;
    return REPS.filter((r) =>
      [r.name, r.role, r.territory ?? "", r.phone].some((field) =>
        field.toLowerCase().includes(q),
      ),
    );
  }, [query]);

  const repsByGroup = useMemo(() => {
    const map = new Map<GroupKey, Rep[]>();
    for (const g of GROUPS) map.set(g.key, []);
    for (const r of filtered) map.get(r.group)?.push(r);
    return map;
  }, [filtered]);

  const totalCount = REPS.length;
  const territories = useMemo(() => {
    const set = new Set<string>();
    for (const r of REPS) {
      if (!r.territory) continue;
      r.territory.split(",").forEach((t) => set.add(t.trim()));
    }
    return set.size;
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero totalCount={totalCount} territories={territories} />
      <SearchBar query={query} setQuery={setQuery} count={filtered.length} />

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6">
          {GROUPS.map((group) => {
            const reps = repsByGroup.get(group.key) ?? [];
            if (reps.length === 0) return null;
            return <RepGroup key={group.key} group={group} reps={reps} />;
          })}

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-ink/10 bg-card p-16 text-center">
              <p className="font-display text-2xl font-semibold">
                No representative matches{" "}
                <span className="italic text-lime-deep">"{query}"</span>
              </p>
              <p className="mt-3 text-ink/60">
                Try another name, city or region, or call our head office at{" "}
                <a href="tel:4504198855" className="font-semibold text-ink underline-offset-4 hover:underline">
                  450 419-8855
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

function Hero({
  totalCount,
  territories,
}: {
  totalCount: number;
  territories: number;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
          <Link to="/" className="hover:text-lime">
            Home
          </Link>
          <span className="text-cream">/</span>
          <span className="text-lime">Our Representatives</span>
        </nav>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
                The team · {totalCount} representatives
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.035em] text-balance">
              People you can
              <br />
              <span className="italic text-lime">actually call.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream lg:text-xl">
              Behind every Jordal order is a real person who knows your region,
              your fabrics and your deadlines. Find your representative below
              and call directly, no forms, no chatbots, no queue.
            </p>
          </div>

          {/* Stats card */}
          <aside className="col-span-12 mt-10 lg:col-span-4 lg:mt-0">
            <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream/15 bg-cream/10 backdrop-blur-md">
              <Stat value={String(totalCount)} label="Representatives" />
              <Stat value={String(territories)} label="Territories" />
              <Stat value="3" label="Regional teams" full />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  full,
}: {
  value: string;
  label: string;
  full?: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col justify-center gap-2 bg-ink p-6 lg:p-8",
        full ? "col-span-2" : "",
      ].join(" ")}
    >
      <div className="font-display text-4xl font-bold tracking-tight text-cream lg:text-5xl">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-cream">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Search bar                                                                  */
/* -------------------------------------------------------------------------- */

function SearchBar({
  query,
  setQuery,
  count,
}: {
  query: string;
  setQuery: (v: string) => void;
  count: number;
}) {
  return (
    <section className="sticky top-20 z-30 border-y border-ink/10 bg-cream/85 backdrop-blur-xl lg:top-24">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <label
          htmlFor="rep-search"
          className="flex flex-1 items-center gap-3 rounded-full border border-ink/15 bg-cream px-5 py-3 transition-colors focus-within:border-ink"
        >
          <Search className="h-4 w-4 shrink-0 text-ink/50" />
          <input
            id="rep-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, city, region…"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs font-semibold uppercase tracking-wider text-ink/50 hover:text-ink"
            >
              Clear
            </button>
          )}
        </label>
        <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
          {count} {count === 1 ? "result" : "results"}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Group section                                                               */
/* -------------------------------------------------------------------------- */

function RepGroup({
  group,
  reps,
}: {
  group: (typeof GROUPS)[number];
  reps: Rep[];
}) {
  const Icon = group.icon;
  return (
    <section className="mt-20 first:mt-16">
      <div className="mb-10 flex flex-col gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-5">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-cream">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
              Region
            </p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight lg:text-5xl">
              {group.label}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
              {group.blurb}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink/70">
          {reps.length} {reps.length === 1 ? "rep" : "reps"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reps.map((rep) => (
          <RepCard key={rep.name + rep.phone} rep={rep} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Rep card                                                                    */
/* -------------------------------------------------------------------------- */

function RepCard({ rep }: { rep: Rep }) {
  const isLeadership = rep.badge === "leadership";
  const initials = getInitials(rep.name);
  const telHref = `tel:${rep.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <article
      className={[
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft",
        isLeadership
          ? "border-ink bg-ink text-cream hover:border-lime"
          : "border-ink/10 hover:border-ink/30",
      ].join(" ")}
    >
      {/* Top row: avatar + badge */}
      <div className="flex items-start justify-between">
        <div
          className={[
            "flex h-14 w-14 items-center justify-center rounded-2xl font-display text-xl font-bold tracking-tight",
            isLeadership
              ? "bg-lime text-ink"
              : "bg-ink/5 text-ink",
          ].join(" ")}
        >
          {initials}
        </div>
        {isLeadership ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime">
            <Crown className="h-3 w-3" />
            Leadership
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/60"
          >
            <Star className="h-3 w-3" />
            Rep
          </span>
        )}
      </div>

      {/* Identity */}
      <div className="mt-6">
        <h3
          className={[
            "font-display text-xl font-semibold tracking-tight",
            isLeadership ? "text-cream" : "text-ink",
          ].join(" ")}
        >
          {rep.name}
        </h3>
        <p
          className={[
            "mt-1 text-xs uppercase tracking-[0.18em]",
            isLeadership ? "text-lime" : "text-ink/55",
          ].join(" ")}
        >
          {rep.role}
        </p>
      </div>

      {/* Territory */}
      {rep.territory && (
        <div
          className={[
            "mt-5 flex items-start gap-2 text-sm leading-relaxed",
            isLeadership ? "text-cream" : "text-ink/70",
          ].join(" ")}
        >
          <MapPin
            className={[
              "mt-0.5 h-4 w-4 shrink-0",
              isLeadership ? "text-lime" : "text-ink/40",
            ].join(" ")}
          />
          <span>{rep.territory}</span>
        </div>
      )}

      {/* Phone CTA */}
      <a
        href={telHref}
        className={[
          "mt-auto flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all",
          isLeadership
            ? "mt-6 border border-cream/15 bg-cream/5 text-cream hover:border-lime hover:bg-lime hover:text-ink"
            : "mt-6 border border-ink/10 bg-cream text-ink hover:border-ink hover:bg-ink hover:text-cream",
        ].join(" ")}
      >
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          {rep.phone}
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                         */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <section className="relative overflow-hidden bg-cream pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-lime via-lime to-lime-deep p-10 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cream/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />

          <div className="relative grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-script text-3xl text-ink/70">
                Not sure who to call?
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink lg:text-6xl">
                Reach our head
                <br />
                office <span className="italic">directly.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink/75">
                We&apos;ll connect you to the representative covering your
                region, or take your project on directly from Saint-Jérôme.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href="tel:4504198855"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-5 text-base font-semibold text-cream shadow-soft transition-all hover:bg-ink-soft"
              >
                <Phone className="h-5 w-5" />
                450 419-8855
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-ink"
              >
                Or send us a message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
