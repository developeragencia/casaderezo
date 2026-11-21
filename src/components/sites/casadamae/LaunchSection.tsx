"use client";

import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LaunchProduct {
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

const launches: LaunchProduct[] = [
  { id: "l1", name: "Quadro Presépio 20 cm", image: "/images/products/quadro-prespio.jpg", price: 89.90, pixPrice: 85.40, installments: { count: 3, value: 29.97 }, href: "/produto/quadro-prespio", isLaunch: true },
  { id: "l2", name: "Quadro Sagrada Família 20 cm", image: "/images/products/quadro-sagrada-familia.jpg", price: 89.90, pixPrice: 85.40, installments: { count: 3, value: 29.97 }, href: "/produto/quadro-sagrada-familia", isLaunch: true },
  { id: "l3", name: "Castiçal Vidro 9 cm", image: "/images/products/castical-vidro.jpg", price: 24.90, pixPrice: 23.65, href: "/produto/castical-vidro", isLaunch: true },
  { id: "l4", name: "Crucifixo Vidro 10 cm", image: "/images/products/crucifixo-vidro.jpg", price: 38.90, pixPrice: 36.95, href: "/produto/crucifixo-vidro", isLaunch: true },
  { id: "l5", name: "Cordão São Bento 12 un", image: "/images/products/cordao-sao-bento.jpg", price: 42.90, pixPrice: 40.75, installments: { count: 2, value: 21.45 }, href: "/produto/cordao-sao-bento", isLaunch: true },
  { id: "l6", name: "Adorno Anjo Guarda 19 cm", image: "/images/products/adorno-anjo.jpg", price: 56.90, pixPrice: 54.05, installments: { count: 2, value: 28.45 }, href: "/produto/adorno-anjo", isLaunch: true },
  { id: "l7", name: "Presépio Importado 13 pcs 12.5 cm", image: "/images/products/prespio-13pcs.jpg", price: 189.90, pixPrice: 180.40, installments: { count: 3, value: 63.30 }, href: "/produto/prespio-13pcs", isLaunch: true },
  { id: "l8", name: "Presépio Importado 13 pcs 22 cm", image: "/images/products/prespio-13pcs-22.jpg", price: 289.90, pixPrice: 275.40, installments: { count: 3, value: 96.63 }, href: "/produto/prespio-13pcs-22", isLaunch: true },
  { id: "l9", name: "Círio Pascal 2027 75×9 cm", image: "/images/products/cirio-2027.jpg", price: 459.90, pixPrice: 436.90, installments: { count: 3, value: 153.30 }, href: "/produto/cirio-2027", isLaunch: true, badge: "Lançamento 2027", badgeVariant: "secondary" },
  { id: "l10", name: "Imagem Resina São Miguel 15 cm", image: "/images/products/sao-miguel-15cm.jpg", price: 67.90, pixPrice: 64.50, installments: { count: 2, value: 33.95 }, href: "/produto/sao-miguel-15cm", isLaunch: true },
  { id: "l11", name: "Terço São Bento Madeira 12 mm", image: "/images/products/terco-sao-bento.jpg", price: 34.90, pixPrice: 33.15, href: "/produto/terco-sao-bento", isLaunch: true },
  { id: "l12", name: "Vela Votiva Perfumada 7 dias", image: "/images/products/vela-votiva.jpg", price: 18.90, pixPrice: 17.95, href: "/produto/vela-votiva", isLaunch: true },
];

export function LaunchSection() {
  return (
    <section className="py-16 md:py-24 bg-background-alt" aria-labelledby="launches-heading">
      <div className="container">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 id="launches-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              Lançamentos
            </h2>
            <p className="text-text-secondary mt-2">Novidades que acabam de chegar ao nosso catálogo</p>
          </div>
          <Link
            href="/lancamentos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            Ver todos
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {launches.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}