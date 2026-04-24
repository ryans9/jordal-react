import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import buildingImg from "@/assets/jordal-building.png";

/**
 * Callback request form. Pure frontend, validates with zod and surfaces a
 * success toast. No backend wired (Lovable Cloud not enabled). When backend
 * lands, POST `data` to a server function from inside `onSubmit`.
 */
const callbackSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Veuillez entrer votre nom" })
    .max(100, { message: "Le nom doit faire moins de 100 caractères" }),
  email: z
    .string()
    .trim()
    .max(255, { message: "Courriel trop long" })
    .email({ message: "Courriel invalide" })
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Veuillez entrer votre numéro de téléphone" })
    .max(30, { message: "Numéro trop long" })
    .regex(/^[0-9+\-().\s]+$/, {
      message: "Numéro de téléphone invalide",
    }),
  consent: z.literal(true, {
    message: "Veuillez accepter la politique de confidentialité",
  }),
});

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

export function CallbackSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = callbackSchema.safeParse({ name, email, phone, consent });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    // Simulated submission, wire to server function when backend is enabled
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      setConsent(false);
      toast.success("Merci ! Nous vous rappellerons sous peu.");
    }, 600);
  };

  return (
    <section className="relative bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: building image with overlay info card */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[760px]">
          <img
            src={buildingImg}
            alt="Bâtiment Jordal à Saint-Jérôme"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/40"
          />

          {/* Floating contact card */}
          <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-cream/95 p-6 backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:p-7 lg:inset-x-auto lg:left-10 lg:bottom-10 lg:max-w-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-deep">
              Notre atelier
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ink">
              Saint-Jérôme, Québec
            </h3>
            <div className="mt-5 space-y-3 text-sm text-ink/75">
              <a
                href="tel:+14504198855"
                className="group flex items-start gap-3 underline-grow w-fit"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lime-deep" />
                <span>
                  <span className="font-semibold text-ink">450-419-8855</span>
                  <span className="ml-1 text-ink/55">poste 103</span>
                </span>
              </a>
              <a
                href="mailto:carl@jordal.ca"
                className="group flex items-start gap-3 underline-grow w-fit"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime-deep" />
                <span className="font-semibold text-ink">carl@jordal.ca</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-lime-deep" />
                <div className="text-ink/70">
                  <p>Lun–Jeu · 7h00 – 16h00</p>
                  <p>Vendredi · 7h00 – 13h00</p>
                  <p className="mt-1 text-xs text-ink/45">Fermé entre 12h et 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: callback form */}
        <div className="relative flex items-center bg-ink px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
          {/* Subtle lime glow accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-12 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-radial-lime)" }}
          />

          <div className="relative w-full max-w-xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/55">
              <span className="h-px w-8 bg-cream/40" />
              Demande de rappel
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-tight text-cream text-balance">
              Parlons de votre{" "}
              <em className="font-script font-normal not-italic text-lime">
                projet.
              </em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Communiquez avec Carl Emond pour toute question ou soumission, ou
              remplissez le formulaire, nous vous rappelons en moins de
              24 heures ouvrables.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="cb-name"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-cream/70"
                >
                  Votre nom <span className="text-lime">*</span>
                </label>
                <input
                  id="cb-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cb-name-err" : undefined}
                  className="mt-2 w-full rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-cream placeholder:text-cream/30 outline-none ring-lime/0 focus:border-lime/60 focus:ring-2 focus:ring-lime/30"
                />
                {errors.name && (
                  <p id="cb-name-err" className="mt-1.5 text-xs text-lime">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cb-email"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-cream/70"
                >
                  Courriel
                </label>
                <input
                  id="cb-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cb-email-err" : undefined}
                  className="mt-2 w-full rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-cream placeholder:text-cream/30 outline-none focus:border-lime/60 focus:ring-2 focus:ring-lime/30"
                />
                {errors.email && (
                  <p id="cb-email-err" className="mt-1.5 text-xs text-lime">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="cb-phone"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-cream/70"
                >
                  Téléphone <span className="text-lime">*</span>
                </label>
                <input
                  id="cb-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={30}
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "cb-phone-err" : undefined}
                  className="mt-2 w-full rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-cream placeholder:text-cream/30 outline-none focus:border-lime/60 focus:ring-2 focus:ring-lime/30"
                />
                {errors.phone && (
                  <p id="cb-phone-err" className="mt-1.5 text-xs text-lime">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm text-cream/70">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-cream/30 bg-cream/5 accent-lime"
                />
                <span>
                  J'accepte la{" "}
                  <a href="#" className="text-lime underline-grow">
                    Politique de confidentialité
                  </a>{" "}
                  et la Politique sur les témoins.
                </span>
              </label>
              {errors.consent && (
                <p className="-mt-2 text-xs text-lime">{errors.consent}</p>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-all hover:shadow-glow disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer la demande
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
                <span className="text-xs uppercase tracking-[0.16em] text-cream/40">
                  Réponse sous 24h
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
