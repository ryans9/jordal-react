import { createFileRoute } from "@tanstack/react-router";
import { useState, useId } from "react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Sparkles,
  ExternalLink,
  Star,
  Navigation,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact, Jordal · Apparel & promotional products" },
      {
        name: "description",
        content:
          "Request a quote or schedule a call with our team. Three workshops in Quebec, Saint-Jérôme, South Shore, Eastern Townships.",
      },
      { property: "og:title", content: "Contact, Jordal" },
      {
        property: "og:description",
        content:
          "Let's talk about your next corporate project. Reply within 24 business hours.",
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* Validation                                                                  */
/* -------------------------------------------------------------------------- */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name too short")
    .max(100, "Name too long"),
  email: z
    .string()
    .trim()
    .email("Invalid email")
    .max(255, "Email too long"),
  phone: z
    .string()
    .trim()
    .max(40, "Number too long")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(2, "Subject required")
    .max(150, "Subject too long"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "At least 10 characters")
    .max(2000, "Message too long"),
  consent: z
    .boolean()
    .refine((v) => v === true, "You must accept the policy"),
});

type ContactInput = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof ContactInput, string>>;

const SERVICES = [
  "Corporate apparel",
  "Promotional items",
  "Embroidery",
  "Screen printing",
  "DTF transfer",
  "Sublimation",
  "Branding & advice",
  "Other",
];

const BUDGETS = ["< $1,000", "$1,000 – $5,000", "$5,000 – $25,000", "$25,000+"];

const LOCATIONS = [
  {
    tag: "Headquarters",
    city: "Saint-Jérôme",
    address: "247 Boul. Maisonneuve, J5L 0A1, QC",
    email: "carl@jordal.ca",
    phone: "450 419-8855",
    accent: "lime" as const,
  },
  {
    tag: "Mobile showroom",
    city: "Montreal South Shore",
    address: "Mobile service by appointment",
    email: "julie@jordal.ca",
    phone: "514 797-1201",
    accent: "ink" as const,
  },
  {
    tag: "Office",
    city: "Eastern Townships · Sherbrooke",
    address: "4050 Lesage St., suite 201, J1C 0B6, QC",
    email: "hugo@jordal.ca",
    phone: "819 446-6355",
    accent: "ink" as const,
    link: { href: "https://www.JordalEstrie.ca/", label: "JordalEstrie.ca" },
  },
];

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

function ContactPage() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--ink)",
            color: "var(--cream)",
            border: "1px solid color-mix(in oklab, var(--lime) 40%, transparent)",
          },
        }}
      />
      <ContactHero />
      <ContactBody />
      <MapSection />
      <QuickContactStrip />
    </>
  );
}

/* ----------------------------------- Hero --------------------------------- */

function ContactHero() {
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

      <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur">
          <Sparkles className="h-3 w-3 text-lime" />
          Let's talk about your project
        </span>

        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2rem,5.5vw,5rem)] font-bold leading-[0.9] tracking-tight text-balance">
          Request a{" "}
          <em className="font-script font-normal not-italic text-lime">
            callback
          </em>
          .<br />
          We'll handle the rest.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream lg:text-lg">
          Three workshops in Quebec. Reply within{" "}
          <span className="text-cream">24 business hours</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 text-sm">
          <a href="tel:4504198855" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
              <Phone className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-cream">
                Call us
              </span>
              <span className="font-display text-lg font-semibold">450 419-8855</span>
            </span>
          </a>
          <a
            href="mailto:carl@jordal.ca"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
              <Mail className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-cream">
                Email us
              </span>
              <span className="font-display text-lg font-semibold">carl@jordal.ca</span>
            </span>
          </a>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute inset-x-0 -bottom-px h-16 bg-cream [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}

/* ----------------------------------- Body --------------------------------- */

function ContactBody() {
  return (
    <section className="relative bg-cream pt-16 pb-32 lg:pt-20">
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 lg:grid-cols-2 lg:gap-12">
        <SidePanel />
        <FormCard />
      </div>
    </section>
  );
}

function SidePanel() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-3xl border border-ink/10 bg-cream p-1.5 shadow-soft">
        <div className="rounded-[20px] bg-gradient-to-br from-stone to-cream p-8 lg:p-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
            <Clock className="h-3.5 w-3.5 text-lime" />
            Business hours
          </div>

          <dl className="mt-6 space-y-4">
            <Row label="Monday → Thursday" value="7:00 AM to 4:00 PM" />
            <Row label="Friday" value="7:00 AM to 1:00 PM" />
            <Row label="Lunch break" value="12:00  to 1:00 PM" muted />
            <Row label="Saturday & Sunday" value="Closed" muted />
          </dl>

          <div className="mt-10 rounded-2xl bg-ink p-6 text-cream">
            <p className="font-display text-2xl font-semibold leading-tight tracking-tight">
              Need it urgently?
            </p>
            <p className="mt-2 text-sm text-cream">
              For tight deadlines, mention it in your message, a representative
              will call you back as a priority.
            </p>
            <a
              href="tel:4504198855"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-shadow hover:shadow-glow"
            >
              <Phone className="h-4 w-4" />
              Call directly
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="mt-10 space-y-3 text-sm">
            {[
              "Free quote, no commitment",
              "Samples available on request",
              "100% made in Quebec",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/75">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

function Row({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-ink/10 pb-3 last:border-0">
      <dt className="text-sm text-ink/60">{label}</dt>
      <dd
        className={`font-display text-base font-semibold tabular-nums ${
          muted ? "text-ink/40" : "text-ink"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

/* ----------------------------------- Form --------------------------------- */

function FormCard() {
  const [values, setValues] = useState<ContactInput>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    budget: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = <K extends keyof ContactInput>(key: K, v: ContactInput[K]) => {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields");
      return;
    }
    setSubmitting(true);
    // Simulated submission, wire to your backend / email service.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Message sent. Thank you!");
  };

  if (done) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-ink p-12 text-cream shadow-soft lg:p-16">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{ background: "var(--gradient-radial-lime)" }}
        />
        <div className="relative">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
            <Check className="h-6 w-6" strokeWidth={3} />
          </span>
          <h3 className="mt-6 font-display text-4xl font-bold tracking-tight">
            Got it, we're on it.
          </h3>
          <p className="mt-4 max-w-md text-cream">
            Thanks {values.name.split(" ")[0]}! Your request is in the hands of
            the Jordal team. You'll get a personalized reply within 24 business
            hours.
          </p>
          <button
            onClick={() => {
              setDone(false);
              setValues({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                service: "",
                budget: "",
                message: "",
                consent: false,
              });
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-lime hover:text-lime"
          >
            Send another message
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-card p-8 shadow-soft lg:p-12"
    >
      <div className="flex items-baseline justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            New project
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
            Tell us everything.
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            The more we know, the sharper our proposal will be.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Field
          label="Full name"
          required
          value={values.name}
          onChange={(v) => set("name", v)}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={(v) => set("email", v)}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label="Phone"
          type="tel"
          value={values.phone || ""}
          onChange={(v) => set("phone", v)}
          error={errors.phone}
          autoComplete="tel"
        />
        <Field
          label="Company"
          value={values.company || ""}
          onChange={(v) => set("company", v)}
          error={errors.company}
          autoComplete="organization"
        />
      </div>

      <div className="mt-5">
        <Field
          label="Subject"
          required
          value={values.subject}
          onChange={(v) => set("subject", v)}
          error={errors.subject}
        />
      </div>

      <div className="mt-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
          Service of interest <span className="text-lime">*</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = values.service === s;
            return (
              <button
                type="button"
                key={s}
                onClick={() => set("service", s)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active
                    ? "border-ink bg-ink text-cream shadow-soft"
                    : "border-ink/15 bg-cream text-ink/75 hover:border-ink/40 hover:text-ink",
                ].join(" ")}
              >
                {s}
              </button>
            );
          })}
        </div>
        {errors.service && (
          <p className="mt-2 text-xs font-medium text-destructive">
            {errors.service}
          </p>
        )}
      </div>

      <div className="mt-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
          Estimated budget
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {BUDGETS.map((b) => {
            const active = values.budget === b;
            return (
              <button
                type="button"
                key={b}
                onClick={() => set("budget", active ? "" : b)}
                className={[
                  "rounded-2xl border px-3 py-3 text-sm font-medium transition-all",
                  active
                    ? "border-lime bg-lime/15 text-ink"
                    : "border-ink/15 bg-cream text-ink/65 hover:border-ink/30",
                ].join(" ")}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <Field
          label="Describe your project"
          textarea
          required
          value={values.message}
          onChange={(v) => set("message", v)}
          error={errors.message}
          maxLength={2000}
        />
        <div className="mt-1 text-right text-[11px] text-ink/40 tabular-nums">
          {values.message.length} / 2000
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-ink/10 bg-stone/60 p-4 text-sm text-ink/75 transition-colors hover:border-ink/30">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-lime"
        />
        <span>
          I accept Jordal's{" "}
          <a href="/privacy" className="font-semibold text-ink underline-grow">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="/cookies" className="font-semibold text-ink underline-grow">
            cookies
          </a>
          .
        </span>
      </label>
      {errors.consent && (
        <p className="mt-2 text-xs font-medium text-destructive">
          {errors.consent}
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
        <p className="text-xs text-ink/55">
          We reply within <span className="font-semibold text-ink">24 business hours</span>.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-lime hover:text-ink hover:shadow-glow disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send request"}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}

/* --------------------------------- Field --------------------------------- */

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  textarea = false,
  autoComplete,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  const id = useId();
  const filled = value.length > 0;
  const base =
    "peer w-full bg-transparent px-4 pt-6 pb-2 text-base text-ink outline-none transition-colors placeholder:text-transparent";

  return (
    <div className="relative">
      <div
        className={[
          "relative rounded-2xl border bg-cream transition-all",
          error
            ? "border-destructive/60 ring-2 ring-destructive/15"
            : "border-ink/15 focus-within:border-ink focus-within:ring-2 focus-within:ring-lime/30",
        ].join(" ")}
      >
        {textarea ? (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            rows={6}
            required={required}
            maxLength={maxLength}
            className={`${base} resize-none`}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            required={required}
            autoComplete={autoComplete}
            maxLength={maxLength}
            className={base}
          />
        )}
        <label
          htmlFor={id}
          className={[
            "pointer-events-none absolute left-4 transition-all",
            filled
              ? "top-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/55"
              : "top-4 text-base text-ink/45",
            "peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-ink/70",
          ].join(" ")}
        >
          {label}
          {required && <span className="ml-1 text-lime">*</span>}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 pl-1 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/* ----------------------------------- Map Section ---------------------------------- */

function MapSection() {
  // Saint-Jérôme HQ, 247 Bd Maisonneuve
  const lat = 45.7747;
  const lng = -74.0036;
  const bbox = `${lng - 0.006},${lat - 0.003},${lng + 0.006},${lat + 0.003}`;
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const viewLarger = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`;

  return (
    <section className="relative bg-cream pb-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid items-stretch gap-px overflow-hidden rounded-[32px] border border-ink/10 bg-ink/10 shadow-soft lg:grid-cols-[1fr_1.6fr]">
          {/* Info card */}
          <div className="relative flex flex-col justify-between bg-ink p-10 text-cream lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{ background: "var(--gradient-radial-lime)" }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream">
                <MapPin className="h-3 w-3 text-lime" />
                Visit the workshop
              </span>

              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
                Jordal , {" "}
                <em className="font-script font-normal not-italic text-lime">
                  Apparel
                </em>{" "}
                & promotional items
              </h2>

              <p className="mt-6 text-base leading-relaxed text-cream">
                247 Bd Maisonneuve
                <br />
                Saint-Jérôme, QC J5L 0A1
                <br />
                Canada
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-lime px-3 py-1.5 text-sm font-bold text-ink">
                  <Star className="h-3.5 w-3.5 fill-ink" strokeWidth={0} />
                  4.9
                </span>
                <div className="flex items-center gap-0.5 text-lime">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-lime"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-cream">
                  Google reviews
                </span>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={directions}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime px-5 py-3.5 text-sm font-semibold text-ink transition-shadow hover:shadow-glow"
              >
                <Navigation className="h-4 w-4" />
                Get directions
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={viewLarger}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/20 px-5 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-lime hover:text-lime"
              >
                Open in maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[420px] bg-stone lg:min-h-[520px]">
            <iframe
              title="Jordal, Saint-Jérôme location"
              src={osmEmbed}
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale-[20%] contrast-[0.95]"
              style={{ border: 0 }}
            />
            <div className="pointer-events-none absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              Saint-Jérôme HQ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Quick contact strip -------------------------- */

function QuickContactStrip() {
  return (
    <section className="border-t border-ink/10 bg-stone/50">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">
              Three locations across Quebec
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
              Come visit us.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <article
              key={loc.city}
              className={[
                "group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1",
                loc.accent === "lime"
                  ? "bg-lime text-ink shadow-glow"
                  : "bg-ink text-cream shadow-soft",
              ].join(" ")}
            >
              <div
                className={[
                  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]",
                  loc.accent === "lime"
                    ? "border-ink/25 text-ink/80"
                    : "border-cream/20 text-cream",
                ].join(" ")}
              >
                <MapPin className="h-3 w-3" />
                {loc.tag}
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight">
                {loc.city}
              </h3>
              <p
                className={[
                  "mt-3 text-sm leading-relaxed",
                  loc.accent === "lime" ? "text-ink/70" : "text-cream",
                ].join(" ")}
              >
                {loc.address}
              </p>

              <div
                className={[
                  "mt-8 space-y-3 border-t pt-6 text-sm",
                  loc.accent === "lime" ? "border-ink/15" : "border-cream/10",
                ].join(" ")}
              >
                <a
                  href={`mailto:${loc.email}`}
                  className="group/link flex items-center gap-3"
                >
                  <Mail className="h-4 w-4 opacity-60" />
                  <span className="underline-grow">{loc.email}</span>
                </a>
                <a
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3"
                >
                  <Phone className="h-4 w-4 opacity-60" />
                  <span className="font-display text-base font-semibold tabular-nums">
                    {loc.phone}
                  </span>
                </a>
                {loc.link && (
                  <a
                    href={loc.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <ExternalLink className="h-4 w-4 opacity-60" />
                    <span className="underline-grow">{loc.link.label}</span>
                  </a>
                )}
              </div>

              <div
                aria-hidden
                className={[
                  "absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-2xl transition-opacity",
                  loc.accent === "lime"
                    ? "bg-cream/30 opacity-40"
                    : "bg-lime/30 opacity-30 group-hover:opacity-60",
                ].join(" ")}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
