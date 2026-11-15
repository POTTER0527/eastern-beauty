import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "mist" | "ghost";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-forest text-paper hover:bg-[#2a3730]",
  secondary:
    "border border-forest/20 bg-transparent text-forest hover:border-sage hover:bg-sage/10",
  mist: "bg-sage text-paper hover:bg-forest",
  ghost: "px-0 text-forest underline-offset-4 hover:text-sage hover:underline",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classNames = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm tracking-[0.04em] transition-colors duration-300",
    styles[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    const isHash = href.startsWith("#");
    const isExternal = href.startsWith("http");
    if (isHash || isExternal) {
      return (
        <a
          href={href}
          className={classNames}
          onClick={onClick}
          {...(isExternal
            ? { target: "_blank", rel: "noreferrer" }
            : undefined)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classNames} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
}
