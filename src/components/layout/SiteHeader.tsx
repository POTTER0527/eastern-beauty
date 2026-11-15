"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { cta, mainNav } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-canvas/90 backdrop-blur-md">
      <Container
        wide
        className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]"
      >
        <Logo />
        <nav
          className="hidden items-center gap-4 xl:gap-6 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-[0.72rem] tracking-[0.1em] uppercase transition-colors",
                  active ? "text-forest" : "text-forest/55 hover:text-forest",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button
            href={cta.href}
            variant="mist"
            className="min-h-10 whitespace-nowrap px-5 py-2"
          >
            {cta.label}
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 h-px w-4 bg-forest transition-all",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-4 bg-forest transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-4 bg-forest transition-all",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </Container>
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-forest/10 bg-canvas lg:hidden"
      >
        <nav className="flex min-h-[calc(100dvh-4rem)] flex-col gap-1 px-5 py-8" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-forest/10 py-4 font-serif text-3xl text-forest"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-8">
            <Button
              href={cta.href}
              variant="mist"
              className="w-full"
              onClick={closeMenu}
            >
              {cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
