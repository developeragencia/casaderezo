"use client";

import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BestsellerProduct {
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

const bestsellers: BestsellerProduct[] = [
  { id: "b1", name: "Luminária LED São Miguel 9 cm", image: "/images/products/luminaria-sao-miguel.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-sao-miguel", isBestseller: true },
  { id: "b2", name: "Luminária LED Nossa Sra. Aparecida 9 cm", image: "/images/products/luminaria-aparecida.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-aparecida", isBestseller: true },
  { id: "b3", name: "Luminária LED São Bento 9 cm", image: "/images/products/luminaria-sao-bento.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-sao-bento", isBestseller: true },
  { id: "b4", name: "Luminária LED Sagrada Família 9 cm", image: "/images/products/luminaria-sagrada-familia.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-sagrada-familia", isBestseller: true },
  { id: "b5", name: "Luminária LED Sagrado Coração 9 cm", image: "/images/products/luminaria-sagrado-coracao.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-sagrado-coracao", isBestseller: true },
  { id: "b6", name: "Luminária LED Imaculado Coração 9 cm", image: "/images/products/luminaria-imaculado.jpg", price: 19.72, pixPrice: 18.73, href: "/produto/luminaria-imaculado", isBestseller: true },
  { id: "b7", name: "Imagem Resina Arcanjo Miguel 107 cm", image: "/images/products/arcanjo-miguel-107.jpg", price: 3290.00, originalPrice: 3460.00, pixPrice: 3125.50, installments: { count: 3, value: 1096.67 }, href: "/produto/arcanjo-miguel-107", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive", isBestseller: true },
  { id: "b8", name: "Imagem Resina Arcanjo Gabriel 115 cm", image: "/images/products/arcanjo-gabriel-115.jpg", price: 4890.00, originalPrice: 5140.00, pixPrice: 4645.50, installments: { count: 3, value: 1630.00 }, href: "/produto/arcanjo-gabriel-115", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive", isBestseller: true },
  { id: "b9", name: "Imagem Resina Arcanjo Rafael 110 cm", image: "/images/products/arcanjo-rafael-110.jpg", price: 4290.00, originalPrice: 4510.00, pixPrice: 4075.50, installments: { count: 3, value: 1430.00 }, href: "/produto/arcanjo-rafael-110", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "b10", name: "Imagem Resina São Miguel 82 cm", image: "/images/products/sao-miguel-82.jpg", price: 2190.00, originalPrice: 2300.00, pixPrice: 2080.50, installments: { count: 3, value: 730.00 }, href: "/produto/sao-miguel-82", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "b11", name: "Imagem Resina N. Sra. Aparecida 75 cm", image: "/images/products/aparecida-75.jpg", price: 1890.00, originalPrice: 1990.00, pixPrice: 1795.50, installments: { count: 3, value: 630.00 }, href: "/produto/aparecida-75", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
  { id: "b12", name: "Imagem Resina Sagrado Coração 80 cm", image: "/images/products/sagrado-coracao-80.jpg", price: 2490.00, originalPrice: 2620.00, pixPrice: 2365.50, installments: { count: 3, value: 830.00 }, href: "/produto/sagrado-coracao-80", badge: "BLACK FRIDAY -5%", badgeVariant: "destructive" },
];

export function BestsellersSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="bestsellers-heading">
      <div className="container">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 id="bestsellers-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              Mais Procurados
            </h2>
            <p className="text-text-secondary mt-2">Os produtos mais vendidos e desejados pelos nossos clientes</p>
          </div>
          <Link
            href="/mais-procurados"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            Ver todos
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}