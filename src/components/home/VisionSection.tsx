import { Container } from "@/components/ui/Container";

export function VisionSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-3xl text-center">
        <p className="label">Our Vision</p>
        <h2 className="editorial-title mt-5 text-4xl sm:text-5xl">
          A New Perspective on Beauty & Wellness.
        </h2>
        <p className="mt-8 text-base leading-8 text-forest/75 sm:text-lg">
          我們希望從美容開始，逐步探索東方養生文化、生活習慣管理與預防醫學，建立一個讓人們更了解自己、重視日常健康的數位平台。
        </p>
      </Container>
    </section>
  );
}
