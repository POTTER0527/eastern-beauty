import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How this first version treats information."
        description={`${brand.name} 目前為品牌形象網站，沒有會員系統，也不串接電子報或資料庫。`}
      />
      <section className="py-16">
        <Container className="max-w-3xl space-y-6 text-base leading-8 text-forest/75">
          <p>
            本站第一版以靜態內容為主。導覽、文章閱讀與頁面瀏覽不需要建立帳號。頁面上的電子報欄位僅供展示，送出後不會儲存電子郵件。
          </p>
          <p>
            若你透過電子郵件與我們聯繫，我們只會使用你提供的資訊回覆該次來信。未來若啟用分析或訂閱服務，將在此頁更新說明。
          </p>
          <p>
            聯絡：
            <a className="ml-1 underline-offset-4 hover:underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
