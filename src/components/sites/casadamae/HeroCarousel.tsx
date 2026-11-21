"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

const slides: Slide[] = [
  {
    id: "natal-presépio",
    title: "Presépios & Especial de Natal",
    subtitle: "Tradição, fé e elegância sacra para abençoar o seu lar neste fim de ano.",
    image: "/images/banners/natal-prespio.jpg",
    href: "/categoria/natal",
    badge: "Coleção 2026",
    badgeColor: "bg-emerald-600 text-white",
  },
  {
    id: "imagens-sacras",
    title: "Imagens Sacras em Resina & Mármore",
    subtitle: "Riqueza de detalhes artesanais e acabamento nobre para sua paróquia e altar.",
    image: "/images/banners/nossa-senhora.jpg",
    href: "/categoria/imagens-sacras",
    badge: "Destaque da Loja",
    badgeColor: "bg-amber-600 text-white",
  },
  {
    id: "black-friday",
    title: "Crucifixos & Artigos Litúrgicos",
    subtitle: "Condições exclusivas de atacado e varejo com até 40% de desconto.",
    image: "/images/banners/black-friday.jpg",
    href: "/categoria/crucifixos",
    badge: "Oferta Especial",
    badgeColor: "bg-red-600 text-white",
  },
  {
    id: "vela-pascal",
    title: "Velas & Incensos Especiais",
    subtitle: "Fabricação própria com cera pura e tradição de mais de 20 anos de ofício.",
    image: "/images/banners/vela-pascal.jpg",
    href: "/categoria/velas",
    badge: "Fabricação Própria",
    badgeColor: "bg-amber-700 text-white",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play every 6s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-900"
      aria-label="Banners promocionais em destaque"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] w-full"
        role="region"
        aria-roledescription="carousel"
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} de ${slides.length}`}
              aria-current={isActive ? "true" : "false"}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Enhanced Contrast Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />

              {/* Slide Content */}
              <div className="container relative h-full flex items-center z-10 px-6 sm:px-12 md:px-16">
                <div className="max-w-xl text-white">
                  {slide.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full mb-3 shadow-md shadow-black/20 uppercase tracking-wider backdrop-blur-sm">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-bold", slide.badgeColor)}>
                        {slide.badge}
                      </span>
                    </div>
                  )}

                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>

                  {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg text-neutral-200 mb-6 sm:mb-8 leading-relaxed max-w-lg drop-shadow">
                      {slide.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={slide.href}>
                      <Button
                        size="lg"
                        className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-amber-600/30 transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                      >
                        <span>Ver Coleção</span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                    <Link href="/categoria/imagens-sacras">
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-full px-6 text-sm sm:text-base"
                      >
                        Explorar Catálogo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/40 hover:bg-amber-600/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="size-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/40 hover:bg-amber-600/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Próximo slide"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Indicators Inside the Hero Banner */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "w-7 bg-amber-400" : "w-2 bg-white/50 hover:bg-white"
              )}
              aria-label={`Ir para banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
