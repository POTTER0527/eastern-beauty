import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getFeaturedArticles } from "@/lib/articles";

export function JournalSection() {
  const featured = getFeaturedArticles(4);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="label">Beauty Library</p>
            <h2 className="editorial-title mt-4 text-4xl sm:text-5xl">
              The Beauty Journal.
            </h2>
          </div>
          <Button href="/beauty-library" variant="ghost">
            View all essays
          </Button>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
