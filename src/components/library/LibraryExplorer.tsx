"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArticleCard } from "@/components/ui/ArticleCard";
import {
  articleCategories,
  searchArticles,
  type Article,
  type ArticleCategory,
} from "@/lib/articles";
import { cn } from "@/lib/cn";

function isCategory(value?: string): value is ArticleCategory {
  return articleCategories.some((item) => item.slug === value);
}

export function LibraryExplorer({
  articles,
  initialCategory,
  initialQuery = "",
}: {
  articles: Article[];
  initialCategory?: string;
  initialQuery?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery);
  const [selected, setSelected] = useState<ArticleCategory | undefined>(
    isCategory(initialCategory) ? initialCategory : undefined,
  );

  const visible = useMemo(
    () => searchArticles(query, selected),
    [query, selected],
  );

  const updateCategory = (category?: ArticleCategory) => {
    setSelected(category);
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (query.trim()) params.set("q", query.trim());
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-forest/10 pb-8">
        <label className="block">
          <span className="label">Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜尋文章標題或關鍵字"
            className="mt-3 block h-12 w-full max-w-xl rounded-full border border-forest/15 bg-paper px-5 text-sm outline-none focus:border-sage"
          />
        </label>
        <p className="text-xs text-forest/50">
          搜尋欄為第一版視覺與前端篩選介面，資料為預先建立的示範文章。
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateCategory(undefined)}
            className={cn(
              "rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase",
              !selected ? "bg-forest text-paper" : "border border-forest/15",
            )}
          >
            All
          </button>
          {articleCategories.map((category) => (
            <button
              type="button"
              key={category.slug}
              onClick={() => updateCategory(category.slug)}
              className={cn(
                "rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase",
                selected === category.slug
                  ? "bg-forest text-paper"
                  : "border border-forest/15",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-12 text-sm text-forest/60">
          沒有符合條件的文章。請調整分類或關鍵字。
        </p>
      )}
      <p className="sr-only">共 {articles.length} 篇示範文章。</p>
    </div>
  );
}
