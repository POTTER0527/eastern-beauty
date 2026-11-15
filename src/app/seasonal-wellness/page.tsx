import type { Metadata } from "next";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { articles } from "@/lib/articles";
import { images } from "@/lib/images";
import { seasons, solarTerms, type SeasonKey } from "@/lib/seasons";

export const metadata: Metadata = {
  title: "Seasonal Wellness",
  description: "認識二十四節氣與春夏秋冬的東方季節養生文化。",
};

const seasonImages: Record<SeasonKey, { src: string; alt: string }> = {
  spring: { src: images.spring, alt: "春季田野與花樹" },
  summer: { src: images.summer, alt: "層疊的綠葉" },
  autumn: { src: images.autumn, alt: "秋季葉色" },
  winter: { src: images.winter, alt: "冬季林木" },
};

const seasonalArticles = articles.filter((article) =>
  [
    "seasonal-beauty-eastern-wellness",
    "sleep-and-skin-health",
    "tea-food-and-radiance",
    "the-art-of-rest",
  ].includes(article.slug),
);

export default function SeasonalWellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Wellness"
        title="Live with the year, not against it."
        description="第一版以靜態展示二十四節氣與四季分類，不進行即時日期計算或個人化建議。"
      />
      <section className="py-6">
        <Container>
          <CoverImage
            src={images.seasonal}
            alt="晨光中的季節風景"
            className="aspect-[16/8] w-full"
            sizes="100vw"
            priority
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label">Four Seasons</p>
          <h2 className="editorial-title mt-4 text-4xl">春夏秋冬</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {(Object.keys(seasons) as SeasonKey[]).map((key) => (
              <article key={key} className="bg-transparent">
                <CoverImage
                  src={seasonImages[key].src}
                  alt={seasonImages[key].alt}
                  className="aspect-[16/10] w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pt-5">
                  <p className="label">{seasons[key].labelEn}</p>
                  <h3 className="mt-2 font-serif text-3xl">
                    {seasons[key].labelZh}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-forest/70">
                    {seasons[key].idea}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-24">
        <Container>
          <p className="label">Twenty-Four Solar Terms</p>
          <h2 className="editorial-title mt-4 text-4xl">二十四節氣</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solarTerms.map((term) => (
              <article
                key={term.nameZh}
                className="border border-forest/10 bg-paper px-5 py-6"
              >
                <p className="label">{seasons[term.season].labelEn}</p>
                <h3 className="mt-3 font-serif text-2xl">
                  {term.nameZh}
                  <span className="ml-2 text-lg text-forest/50">
                    {term.nameEn}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-7 text-forest/70">
                  {term.summary}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <p className="label">Seasonal Reading</p>
          <h2 className="editorial-title mt-4 text-4xl">當季養生與美容文章</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-forest/65">
            以下為編輯選文，用來展示季節美容與生活節奏，並非依今日日期自動計算。
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
