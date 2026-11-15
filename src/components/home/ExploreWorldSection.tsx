import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/lib/images";

const topics = [
  {
    title: "Ancient Beauty",
    text: "古代美容文化、傳統美容方法、古籍記載及東方美學。",
    href: "/eastern-beauty#ancient",
    image: images.ancient,
    alt: "春季花樹與柔和自然光",
  },
  {
    title: "TCM Beauty",
    text: "中醫美容理論、氣血、五臟、肌膚與傳統養生觀點。",
    href: "/eastern-beauty#tcm",
    image: images.tcm,
    alt: "茶葉與陶瓷呈現的養生意象",
  },
  {
    title: "Modern Wellness",
    text: "現代皮膚知識、睡眠、飲食、壓力與健康生活。",
    href: "/seasonal-wellness",
    image: images.wellness,
    alt: "寧靜伸展與自然光線",
  },
];

export function ExploreWorldSection() {
  return (
    <section className="py-8 sm:py-16">
      <Container>
        <p className="label">Explore Our World</p>
        <h2 className="editorial-title mt-4 max-w-3xl text-4xl sm:text-5xl">
          Three paths into Eastern beauty.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.title} className="flex flex-col">
              <CoverImage
                src={topic.image}
                alt={topic.alt}
                className="aspect-[4/5] w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <h3 className="mt-6 font-serif text-3xl">{topic.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-forest/70">
                {topic.text}
              </p>
              <div className="mt-6">
                <Button href={topic.href} variant="secondary">
                  Explore More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
