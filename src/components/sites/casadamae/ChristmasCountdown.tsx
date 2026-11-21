"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChristmasProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  installments?: { count: number; value: number };
  pixPrice?: number;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  isLaunch?: boolean;
  isBestseller?: boolean;
  href: string;
}

const christmasProducts: ChristmasProduct[] = [
  { id: "x1", name: "Vela Decorativa Natal 4 un - Anjo", image: "/images/products/vela-natal-anjo.jpg", price: 20.79, pixPrice: 19.75, href: "/produto/vela-natal-anjo", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "x2", name: "Vela Decorativa Natal 4 un - Estrela", image: "/images/products/vela-natal-estrela.jpg", price: 22.99, pixPrice: 21.84, href: "/produto/vela-natal-estrela", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "x3", name: "Vela Decorativa Natal 4 un - Pinheiro", image: "/images/products/vela-natal-pinheiro.jpg", price: 24.55, pixPrice: 23.32, href: "/produto/vela-natal-pinheiro", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "x4", name: "Vela Decorativa Natal 4 un - Sino", image: "/images/products/vela-natal-sino.jpg", price: 21.89, pixPrice: 20.79, href: "/produto/vela-natal-sino", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "x5", name: "Adorno Árvore Natal - Anjo 12 cm", image: "/images/products/adorno-arvore-anjo.jpg", price: 13.10, pixPrice: 12.44, href: "/produto/adorno-arvore-anjo" },
  { id: "x6", name: "Adorno Árvore Natal - Estrela 10 cm", image: "/images/products/adorno-arvore-estrela.jpg", price: 15.90, pixPrice: 15.10, href: "/produto/adorno-arvore-estrela" },
  { id: "x7", name: "Adorno Mesa Natal - Presépio 15 cm", image: "/images/products/adorno-mesa-prespio.jpg", price: 30.54, pixPrice: 29.01, href: "/produto/adorno-mesa-prespio" },
  { id: "x8", name: "Adorno Porta Natal - Guirlanda 25 cm", image: "/images/products/adorno-porta-guirlanda.jpg", price: 28.90, pixPrice: 27.45, href: "/produto/adorno-porta-guirlanda" },
  { id: "x9", name: "Presépio Resina 8 pcs 10 cm", image: "/images/products/prespio-resina-8.jpg", price: 89.90, originalPrice: 119.90, pixPrice: 85.40, installments: { count: 3, value: 29.97 }, href: "/produto/prespio-resina-8", badge: "BLACK FRIDAY -25%", badgeVariant: "destructive" },
  { id: "x10", name: "Luz Noturna Natal - LED", image: "/images/products/luz-natal-led.jpg", price: 42.90, pixPrice: 40.75, installments: { count: 2, value: 21.45 }, href: "/produto/luz-natal-led" },
  { id: "x11", name: "Meia Natal Personalizada", image: "/images/products/meia-natal.jpg", price: 18.90, pixPrice: 17.95, href: "/produto/meia-natal" },
  { id: "x12", name: "Bola Natal Personalizada 8 cm", image: "/images/products/bola-natal.jpg", price: 12.90, pixPrice: 12.25, href: "/produto/bola-natal" },
  { id: "x13", name: "Adorno Árvore - Sagrada Família", image: "/images/products/adorno-sagrada-familia.jpg", price: 22.90, pixPrice: 21.75, href: "/produto/adorno-sagrada-familia" },
  { id: "x14", name: "Vela Votiva Natal 7 dias", image: "/images/products/vela-votiva-natal.jpg", price: 16.90, pixPrice: 16.05, href: "/produto/vela-votiva-natal" },
];

export function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);
      const now = new Date();
      const diff = christmas.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-secondary text-white" aria-labelledby="christmas-heading">
      <div className="container">
        {/* Countdown Timer */}
        <div className="text-center mb-12">
          <h2 id="christmas-heading" className="font-display text-3xl md:text-4xl font-bold mb-6">
            Natal 2025
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Prepare sua casa e seu coração para a celebração do nascimento de Jesus
          </p>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap" role="timer" aria-label="Contagem regressiva para o Natal">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-6xl font-bold tabular-nums">{timeLeft.days}</span>
              </div>
              <span className="text-sm text-white/70 uppercase tracking-wide">Dias</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-6xl font-bold tabular-nums">{timeLeft.hours.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm text-white/70 uppercase tracking-wide">Horas</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-6xl font-bold tabular-nums">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm text-white/70 uppercase tracking-wide">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-6xl font-bold tabular-nums">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm text-white/70 uppercase tracking-wide">Seg</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {christmasProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/natal"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Ver Todos os Produtos de Natal
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}