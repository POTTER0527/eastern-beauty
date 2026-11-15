import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/beauty-library",
    "/eastern-beauty",
    "/seasonal-wellness",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...pages.map((path) => ({
      url: `${brand.url}${path}`,
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: `${brand.url}/beauty-library/${article.slug}`,
      lastModified: article.publishedAt,
    })),
  ];
}
