import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          <p className="label">Modern Oriental Beauty & Wellness</p>
          <h1 className="editorial-title mt-6 text-[2.6rem] text-forest sm:text-6xl lg:text-[4.6rem]">
            Rediscover the Art of Eastern Beauty.
          </h1>
          <p className="mt-6 font-serif text-xl text-forest/80 sm:text-2xl">
            探索東方美容智慧，開啟現代健康生活。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-forest/70">
            A modern approach to beauty, inspired by Eastern wisdom and mindful
            living.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#philosophy" variant="primary">
              Explore Our Philosophy
            </Button>
            <Button href="/beauty-library" variant="secondary">
              Discover Beauty
            </Button>
          </div>
        </div>
        <CoverImage
          src={images.hero}
          alt="以蘭花、石材與柔光構成的東方療癒意象"
          className="aspect-[4/5] w-full lg:min-h-[36rem]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </Container>
    </section>
  );
}
