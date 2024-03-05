// ./app/page.tsx

import { BlogsBanner } from "@/components/blogs-banner";
import { CardsSection } from "@/components/cards-section";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { LogoCarousel } from "@/components/logo-carousel";
import { TwoSideSection } from "@/components/two-side-section";

export default async function Page() {
  return (
    <main>
      <Hero />
      <section className="py-20 bg-black">
        <p className="text-center text-sm font-light mb-20 text-muted-foreground">
          Trused by these companies
        </p>
        <LogoCarousel />
      </section>
      <TwoSideSection />
      <CardsSection />
      <CtaBanner />
      <BlogsBanner />
    </main>
  );
}
