import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";

export function NewsletterSection() {
  return (
    <section id="community" className="scroll-mt-24 pb-24">
      <Container>
        <div className="border border-forest/10 bg-paper px-6 py-12 sm:px-12">
          <p className="label">Community</p>
          <h2 className="editorial-title mt-4 text-4xl sm:text-5xl">
            Join Our Journey.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-forest/70">
            Discover Eastern beauty, timeless wisdom, and mindful living.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}
