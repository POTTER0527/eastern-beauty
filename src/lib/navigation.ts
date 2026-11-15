export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/beauty-library", label: "Beauty Library" },
  { href: "/eastern-beauty", label: "Eastern Beauty" },
  { href: "/seasonal-wellness", label: "Seasonal Wellness" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  ...mainNav,
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export const cta = {
  href: "/eastern-beauty",
  label: "Explore Beauty",
} as const;
