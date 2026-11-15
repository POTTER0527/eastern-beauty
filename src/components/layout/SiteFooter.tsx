import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";
import { mainNav } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-canvas">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-forest/70">
            {brand.shortIntro}
            <br />
            {brand.promise}
          </p>
        </div>
        <div>
          <p className="label">Navigation</p>
          <ul className="mt-4 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sage">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-sage">
                {brand.email}
              </a>
            </li>
            <li>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sage"
              >
                Instagram {brand.instagramHandle}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-sage">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sage">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-forest/10">
        <Container className="flex flex-col gap-2 py-6 text-xs tracking-wide text-forest/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Modern Oriental Beauty & Wellness</p>
        </Container>
      </div>
    </footer>
  );
}
