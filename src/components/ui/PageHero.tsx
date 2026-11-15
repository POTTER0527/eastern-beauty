import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-forest/10 pb-14 pt-10 sm:pb-20 sm:pt-16">
      <Container>
        <p className="label">{eyebrow}</p>
        <h1 className="editorial-title mt-5 max-w-4xl text-4xl text-forest sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-forest/75 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
