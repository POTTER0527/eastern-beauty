import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/lib/images";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <CoverImage
          src={images.philosophy}
          alt="草本精油瓶與溫潤光影"
          className="aspect-[4/5] w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <p className="label">Our Philosophy</p>
          <h2 className="editorial-title mt-5 text-4xl text-forest sm:text-5xl">
            Beauty Beyond Appearance.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-forest/75">
            <p>
              我們相信，美不只是外在的肌膚狀態，也與日常生活、身心平衡及自我照顧息息相關。
            </p>
            <p>
              我們希望透過東方美容文化、中醫養生智慧及現代科學知識，讓美容成為一種更完整的生活方式。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
