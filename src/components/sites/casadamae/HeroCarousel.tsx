"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "destructive";
}

const slides: Slide[] = [
  {
    id: "black-friday",
    title: "Black Friday",
    subtitle: "Até 50% de desconto em artigos selecionados",
    image: "/images/banners/black-friday.jpg",
    href: "/black-friday",
    badge: "BLACK FRIDAY",
    badgeVariant: "destructive",
  },
  {
    id: "cirio-2027",
    title: "Círio Pascal 2027",
    subtitle: "Novos modelos já disponíveis para encomenda",
    image: "/images/banners/cirio-2027.jpg",
    href: "/cirio-pascal-2027",
    badge: "Lançamento",
    badgeVariant: "primary",
  },
  {
    id: "natal-presépio",
    title: "Natal: Presépios",
    subtitle: "Tradicional e moderno — Monte o seu",
    image: "/images/banners/natal-prespio.jpg",
    href: "/categoria/natal",
    badge: "Natal",
    badgeVariant: "secondary",
  },
  {
    id: "vela-pascal",
    title: "Vela Pascal Família",
    subtitle: "Fabricação própria — Qualidade garantida",
    image: "/images/banners/vela-pascal.jpg",
    href: "/vela-pascal-familia",
    badge: "Fabricação Própria",
    badgeVariant: "primary",
  },
  {
    id: "nossa-senhora",
    title: "Nossa Sra. Aparecida & Graças",
    subtitle: "Imagens, medalhas e terços devocionais",
    image: "/images/banners/nossa-senhora.jpg",
    href: "/nossa-senhora-aparecida",
    badge: "Devoção",
    badgeVariant: "secondary",
  },
  {
    id: "velas-fabrica",
    title: "Velas — Fabricação Própria",
    subtitle: "Mais de 20 anos de ofício e tradição",
    image: "/images/banners/velas-fabrica.jpg",
    href: "/categoria/velas",
    badge: "Fabricação Própria",
    badgeVariant: "primary",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(null);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Banners promocionais"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative h-[480px] md:h-[560px] lg:h-[640px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Promoções em destaque"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} de ${slides.length}`}
            aria-current={index === currentIndex ? "true" : "false"}
          >
            <a href={slide.href} className="block h-full" aria-label={slide.title}>
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8 md:p-16 lg:p-24">
                <div className="max-w-2xl animate-slide-up stagger-1">
                  {slide.badge && (
                    <span
                      className={cn(
                        "inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 animate-slide-up stagger-2",
                        slide.badgeVariant === "destructive" && "bg-danger text-white",
                        slide.badgeVariant === "primary" && "bg-primary text-white",
                        slide.badgeVariant === "secondary" && "bg-secondary text-white"
                      )}
                    >
                      {slide.badge}
                    </span>
                  )}
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-slide-up stagger-3">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-lg md:text-xl text-white/90 mb-6 animate-slide-up stagger-4 max-w-md">
                      {slide.subtitle}
                    </p>
                  )}
                  <Button
                    size="lg"
                    className="bg-white text-text-primary hover:bg-neutral-100 font-semibold px-8 py-3 animate-slide-up stagger-5"
                    asChild
                  >
                    <a href={slide.href}>Ver Coleção</a>
                  </Button>
                </div>
              </div>
            </a>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/90 backdrop-blur-sm",
            "flex items-center justify-center text-text-primary shadow-lg",
            "hover:bg-white transition-colors",
            "opacity-0 md:opacity-100 hover:opacity-100 transition-opacity",
            "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Slide anterior"
          disabled={isHovered}
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/90 backdrop-blur-sm",
            "flex items-center justify-center text-text-primary shadow-lg",
            "hover:bg-white transition-colors",
            "opacity-0 md:opacity-100 hover:opacity-100 transition-opacity",
            "focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Próximo slide"
          disabled={isHovered}
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Navegação dos slides">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "size-2.5 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-500"
            )}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}