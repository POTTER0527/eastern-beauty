import { ExploreWorldSection } from "@/components/home/ExploreWorldSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JournalSection } from "@/components/home/JournalSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { SeasonalSection } from "@/components/home/SeasonalSection";
import { VisionSection } from "@/components/home/VisionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ExploreWorldSection />
      <JournalSection />
      <SeasonalSection />
      <VisionSection />
      <NewsletterSection />
    </>
  );
}
