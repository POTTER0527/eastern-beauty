import Link from "next/link";
import { getCategoryLabel, type Article } from "@/lib/articles";
import { CoverImage } from "@/components/ui/CoverImage";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col bg-transparent">
      <Link
        href={`/beauty-library/${article.slug}`}
        className="relative block overflow-hidden"
      >
        <CoverImage
          src={article.coverImage}
          alt={article.coverAlt}
          className="aspect-[4/5] w-full"
          imageClassName="transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="label">{getCategoryLabel(article.category)}</p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-forest">
          <Link
            href={`/beauty-library/${article.slug}`}
            className="hover:text-sage"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-forest/75">
          {article.excerpt}
        </p>
        <Link
          href={`/beauty-library/${article.slug}`}
          className="mt-5 inline-flex text-sm tracking-[0.08em] text-forest underline-offset-4 hover:text-sage hover:underline"
        >
          閱讀文章
        </Link>
      </div>
    </article>
  );
}
