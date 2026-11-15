import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/lib/images";

export function SeasonalSection() {
  return (
    <section className="relative min-h-[32rem] overflow-hidden">
      <CoverImage
        src={images.seasonal}
        alt="晨光中的田野與季節變化"
        className="absolute inset-0 min-h-[32rem]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/45" />
      <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center text-paper">
        <p className="label !text-mist">Seasonal Wellness</p>
        <h2 className="editorial-title mt-5 text-4xl sm:text-6xl">
          Live in Harmony with Nature.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-paper/85">
          二十四節氣與東方季節養生，提醒我們：皮膚、睡眠與心情都活在氣候之中。
        </p>
        <div className="mt-8">
          <Button
            href="/seasonal-wellness"
            variant="secondary"
            className="border-paper/40 text-paper hover:bg-paper/10"
          >
            Explore Seasonal Wellness
          </Button>
        </div>
      </div>
    </section>
  );
}
