import type { Metadata } from "next";
import { LibraryExplorer } from "@/components/library/LibraryExplorer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Beauty Library",
  description:
    "閱讀東方美容文化、中醫美學語言、現代皮膚知識與生活習慣的精選文章。",
};

type LibraryPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BeautyLibraryPage({
  searchParams,
}: LibraryPageProps) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : undefined;
  const query = typeof params.q === "string" ? params.q : "";

  return (
    <>
      <PageHero
        eyebrow="Beauty Library"
        title="Essays on beauty, time, and living well."
        description="依分類閱讀示範文章。第一版使用預先建立的內容，方便未來持續新增。"
      />
      <section className="py-14 sm:py-20">
        <Container>
          <LibraryExplorer
            articles={articles}
            initialCategory={category}
            initialQuery={query}
          />
        </Container>
      </section>
    </>
  );
}
