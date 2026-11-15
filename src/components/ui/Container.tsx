import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        wide ? "max-w-[90rem]" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
