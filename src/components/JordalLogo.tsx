import logoDark from "@/assets/jordal-logo-transparent.png";
import logoLight from "@/assets/jordal-logo-light-transparent.png";

type Props = {
  className?: string;
  variant?: "dark" | "light";
};

/**
 * Jordal wordmark — uses the official brand image with a transparent background.
 * `variant="dark"` is the colored mark used on light surfaces (header).
 * `variant="light"` is the all-green mark used on dark surfaces (footer).
 */
export function JordalLogo({ className, variant = "dark" }: Props) {
  const src = variant === "light" ? logoLight : logoDark;
  return (
    <img
      src={src}
      alt="Jordal — Apparel & promotional products"
      className={["h-10 w-auto select-none lg:h-12", className ?? ""].join(" ")}
      draggable={false}
    />
  );
}
