import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import {
  articles,
  getArticle,
  getCategoryLabel,
} from "@/lib/articles";
import { brand } from "@/lib/brand";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="pb-24">
      <Container className="max-w-3xl pt-12">
        <p className="label">{getCategoryLabel(article.category)}</p>
        <h1 className="editorial-title mt-5 text-4xl sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-sm text-forest/55">
          {article.publishedAt} · {article.readingMinutes} min read ·{" "}
          {brand.name}
        </p>
      </Container>
      <Container className="mt-10">
        <CoverImage
          src={article.coverImage}
          alt={article.coverAlt}
          className="aspect-[16/9] w-full"
          sizes="100vw"
          priority
        />
      </Container>
      <Container className="max-w-3xl">
        <div className="mt-12 space-y-6">
          {article.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-4 font-serif text-3xl text-forest"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l border-sage pl-5 font-serif text-2xl leading-snug text-forest/80"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "note") {
              return (
                <p
                  key={index}
                  className="border border-sand/50 bg-paper px-5 py-4 text-sm leading-7 text-forest/70"
                >
                  {block.text}
                </p>
              );
            }
            return (
              <p key={index} className="text-base leading-8 text-forest/80">
                {block.text}
              </p>
            );
          })}
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          <Button href="/beauty-library" variant="secondary">
            Back to Beauty Library
          </Button>
          <Button href="/eastern-beauty" variant="ghost">
            Explore Eastern Beauty
          </Button>
        </div>
      </Container>
    </article>
  );
}
