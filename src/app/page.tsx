import {
  HeroCarousel,
  BenefitsBar,
  CategoryGrid,
  SaintSection,
  LaunchSection,
  MaterialHighlights,
  SacramentsSection,
  DevotionalScenarios,
  LiturgicalObjects,
  VideoSection,
  ChristmasCountdown,
  BestsellersSection,
} from "@/components/sites/casadamae";
import { featuredSaints } from "@/data/featuredSaints";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Trust & Benefits Bar */}
      <BenefitsBar />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured Saints Sections */}
      {featuredSaints.map((saint) => (
        <SaintSection key={saint.slug} saint={saint} products={saint.products} />
      ))}

      {/* Lançamentos */}
      <LaunchSection />

      {/* Material Highlights */}
      <MaterialHighlights />

      {/* Sacramentos */}
      <SacramentsSection />

      {/* Cenários de Devoção */}
      <DevotionalScenarios />

      {/* Objetos Litúrgicos */}
      <LiturgicalObjects />

      {/* O Produto em Vídeo */}
      <VideoSection />

      {/* Natal Countdown */}
      <ChristmasCountdown />

      {/* Mais Procurados */}
      <BestsellersSection />
    </>
  );
}