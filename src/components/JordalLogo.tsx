type Props = {
  className?: string;
  variant?: "dark" | "light";
};

/**
 * Jordal wordmark — preserves the brand identity (lowercase italic script
 * "jordal" + ".ca" + tiny tagline) while rendering crisp at any size.
 */
export function JordalLogo({ className, variant = "dark" }: Props) {
  const ink = variant === "dark" ? "text-ink" : "text-cream";
  const sub = variant === "dark" ? "text-ink/70" : "text-cream/70";

  return (
    <div className={`inline-flex flex-col leading-none ${className ?? ""}`}>
      <div className="flex items-baseline">
        <span
          className="text-lime"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "2.4em",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            transform: "skewX(-6deg)",
            display: "inline-block",
          }}
        >
          jordal
        </span>
        <span
          className={ink}
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "1.6em",
            fontWeight: 600,
            marginLeft: "0.05em",
          }}
        >
          .ca
        </span>
      </div>
      <span
        className={`mt-1 text-[0.55em] font-semibold uppercase tracking-[0.22em] ${sub}`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Vêtements &amp; Objets Promotionnels
      </span>
    </div>
  );
}
