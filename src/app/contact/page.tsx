import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { brand } from "@/lib/brand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: `與 ${brand.name} 聯繫：品牌合作、媒體與一般來信。`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to us, slowly and clearly."
        description="第一版不提供後端表單。請直接使用電子郵件或社群帳號與我們聯繫。"
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <CoverImage
            src={images.contact}
            alt="乾燥花草的靜物"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="space-y-10">
            <section>
              <p className="label">Studio</p>
              <h2 className="mt-3 font-serif text-3xl">Brand enquiries</h2>
              <p className="mt-4 text-base leading-8 text-forest/75">
                一般詢問與媒體聯絡：
                <br />
                <a className="underline-offset-4 hover:underline" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </p>
            </section>
            <section>
              <p className="label">Partnerships</p>
              <h2 className="mt-3 font-serif text-3xl">合作洽詢</h2>
              <p className="mt-4 text-base leading-8 text-forest/75">
                品牌聯名、內容合作與活動邀請，請寄至：
                <br />
                <a
                  className="underline-offset-4 hover:underline"
                  href={`mailto:${brand.partnershipEmail}`}
                >
                  {brand.partnershipEmail}
                </a>
              </p>
            </section>
            <section>
              <p className="label">Community</p>
              <h2 className="mt-3 font-serif text-3xl">Instagram</h2>
              <p className="mt-4 text-base leading-8 text-forest/75">
                跟隨日常影像與節氣筆記：
                <br />
                <a
                  className="underline-offset-4 hover:underline"
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {brand.instagramHandle}
                </a>
              </p>
            </section>
            <p className="border border-sand/60 bg-paper px-5 py-4 text-sm leading-7 text-forest/65">
              目前沒有線上問診、會員系統或客服聊天室。來信後我們會以電子郵件回覆。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
