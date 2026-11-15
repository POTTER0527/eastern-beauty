import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { brand, siteTitle } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: siteTitle.default,
    template: siteTitle.template,
  },
  description: `${brand.promise} ${brand.descriptionEn}`,
  keywords: [
    "Eastern Beauty",
    "東方美容",
    "東方養生",
    "中醫美容文化",
    "seasonal wellness",
    "mindful living",
  ],
  openGraph: {
    title: siteTitle.default,
    description: brand.promise,
    locale: "zh_TW",
    type: "website",
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.descriptionEn,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${inter.variable} ${cormorant.variable} ${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-forest">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
