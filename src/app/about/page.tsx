import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { brand } from "@/lib/brand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: `認識 ${brand.name} 的品牌故事、理念與未來願景。`,
};

const sections = [
  {
    id: "story",
    title: "Our Story",
    body: `${brand.name} 源於一個簡單的觀察：許多人渴望理解東方美容，卻只接觸到被簡化的產品語言，或過於醫療化的敘事。我們希望重新書寫這段文化——讓它顯得國際、現代，同時保有溫度與質感。`,
  },
  {
    id: "philosophy",
    title: "Our Philosophy",
    body: "美不只是外在的肌膚狀態，也與日常生活、身心平衡及自我照顧息息相關。我們相信，把東方美容文化、中醫養生智慧與現代科學知識放在同一張桌上，美容才能成為更完整的生活方式。",
  },
  {
    id: "meeting",
    title: "Eastern Wisdom Meets Modern Wellness",
    body: "我們閱讀古籍與節氣，是為了理解古人如何安排身體與時間；我們吸收現代皮膚與睡眠知識，是為了讓這些智慧可以被驗證、被翻譯、被溫和地實踐。兩者相遇的地方，不是診所，也不是中藥行，而是日常。",
  },
  {
    id: "vision",
    title: "Our Vision",
    body: "我們希望從美容開始，逐步探索東方養生文化、生活習慣管理與預防醫學，建立一個讓人們更了解自己、重視日常健康的數位平台。此刻的官方網站，是這個長途旅程的第一扇門。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A quieter way to practice beauty."
        description={brand.promise}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <CoverImage
            src={images.about}
            alt="層疊的植物與柔和室內光線"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <p className="label">{section.title}</p>
                <p className="mt-4 text-base leading-8 text-forest/75">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
