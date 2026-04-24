import logoSrc from "@/assets/jordal-logo.png";

type Props = {
  className?: string;
  variant?: "dark" | "light";
};

/**
 * Jordal wordmark — uses the official brand image. The `variant` prop
 * controls subtle treatment so the logo reads on both light and dark surfaces.
 */
export function JordalLogo({ className, variant = "dark" }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Jordal — Apparel & promotional products"
      className={[
        "h-10 w-auto select-none lg:h-12",
        variant === "light" ? "brightness-0 invert" : "",
        className ?? "",
      ].join(" ")}
      draggable={false}
    />
  );
}
