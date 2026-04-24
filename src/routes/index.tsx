import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-radial-lime)" }}
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:py-36">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">
            <Sparkles className="h-3 w-3 text-lime" />
            Atelier québécois · est. 2003
          </span>

          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight text-balance text-ink">
            Articles
            <br />
            corporatifs{" "}
            <em className="font-script font-normal not-italic text-lime">
              personnalisés.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">
            Quels que soient vos besoins, nous pouvons vous aider à consolider
            votre image de marque — du concept jusqu'à la production.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-lime hover:text-ink hover:shadow-glow"
            >
              Demander une soumission
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/catalogue"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-grow"
            >
              Explorer le catalogue
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:mb-4">
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
  );
}
