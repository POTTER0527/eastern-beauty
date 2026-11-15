import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Eastern Beauty Culture",
  description:
    "以文化與歷史的角度認識東方美容：古代儀式、傳統護膚、草本美學與中醫美容觀。",
};

const chapters = [
  {
    id: "ancient",
    title: "Ancient Chinese Beauty Rituals",
    image: images.ancient,
    alt: "春季花樹象徵時令與儀式",
    text: "梳洗、焚香、整理衣飾，曾是生活禮儀的一部分。古代美容史讓我們看見「被照顧的身體」如何被書寫，而不是提供可直接複製的處方。",
  },
  {
    id: "skincare",
    title: "Traditional Skincare",
    image: images.ritual,
    alt: "簡約保養質地",
    text: "米粉、膏脂、植物浸液出現在不同時代的物質文化中。它們反映當時的材料與審美，不能等同於今日經過安全評估的保養方式。",
  },
  {
    id: "herbal",
    title: "Herbal Beauty Culture",
    image: images.herbal,
    alt: "茶席與草本意象",
    text: "植物首先以氣味、顏色和季節進入美容生活。欣賞草本文化，同時尊重身體界線：天然並不自動等於適合每一個人。",
  },
  {
    id: "tcm",
    title: "Beauty in Traditional Chinese Medicine",
    image: images.tcm,
    alt: "茶葉與陶瓷",
    text: "氣色、神采與起居常被一起觀看。我們借用這套語言來思考生活節奏，而不把網站內容當作診斷或治療。",
  },
  {
    id: "history",
    title: "Historical Beauty Practices",
    image: images.tools,
    alt: "梳妝與保養物件",
    text: "鏡、梳、巾與香具構成梳妝的空間。理解歷史實踐，是為了把「節奏、節制、時令」轉譯成現代人可執行的日常，而不是復刻未經驗證的古方。",
  },
];

export default function EasternBeautyPage() {
  return (
    <>
      <PageHero
        eyebrow="Eastern Beauty"
        title="Culture first, never unverified cures."
        description="這個頁面以文化與歷史介紹為主。古代美容方法不應被描述為安全有效的現代治療方式。"
      />
      <section className="py-8">
        <Container>
          <CoverImage
            src={images.easternHero}
            alt="東方建築與自然光影"
            className="aspect-[16/8] w-full"
            sizes="100vw"
            priority
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="space-y-24">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <CoverImage
                src={chapter.image}
                alt={chapter.alt}
                className={`aspect-[4/5] w-full ${index % 2 === 1 ? "lg:order-2" : ""}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div>
                <p className="label">0{index + 1}</p>
                <h2 className="editorial-title mt-4 text-4xl">{chapter.title}</h2>
                <p className="mt-6 text-base leading-8 text-forest/75">
                  {chapter.text}
                </p>
              </div>
            </article>
          ))}
          <div className="border border-forest/10 bg-paper px-6 py-10 sm:px-10">
            <p className="label">A note on care</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-forest/75">
              若你正在尋求皮膚或健康問題的處理，請諮詢合格專業人員。Eastern Beauty
              分享的是可被理解的文化視角與生活觀察，而不是醫療服務。
            </p>
            <div className="mt-8">
              <Button href="/beauty-library?category=ancient-beauty" variant="secondary">
                Read related essays
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
