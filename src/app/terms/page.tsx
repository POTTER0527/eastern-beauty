import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="A cultural publication, not medical care."
        description="使用本網站即表示你理解以下說明。"
      />
      <section className="py-16">
        <Container className="max-w-3xl space-y-6 text-base leading-8 text-forest/75">
          <p>
            {brand.name}{" "}
            提供品牌介紹、文化評論與生活觀察。內容不能取代醫師、中醫師或其他合格專業人員的建議、診斷或治療。
          </p>
          <p>
            網站提及的古代方法與草本文化屬於歷史與美學討論，不構成產品功效宣稱，也不保證適用於任何人。
          </p>
          <p>
            本站文字與設計為品牌形象用途。若需轉載或合作，請先來信：
            <a className="ml-1 underline-offset-4 hover:underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
