import Link from "next/link";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} home`}
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-sage/50 bg-paper"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5 text-sage"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5c.4 4.6 2.6 8.2 7 10-4.4 1.8-6.6 5.4-7 10-0.4-4.6-2.6-8.2-7-10 4.4-1.8 6.6-5.4 7-10Z"
            fill="currentColor"
          />
          <circle cx="16" cy="16" r="1.6" fill="#34443B" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-serif text-[1.2rem] tracking-tight text-forest">
          {brand.name}
        </span>
        <span className="mt-1 whitespace-nowrap text-[0.62rem] tracking-[0.22em] text-sage">
          {brand.nameZh}
        </span>
      </span>
    </Link>
  );
}
