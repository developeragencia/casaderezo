"use client";

import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SaintProduct {
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

interface SaintSectionProps {
  saint: {
    name: string;
    slug: string;
    image: string;
    description?: string;
  };
  products: SaintProduct[];
  showViewAll?: boolean;
}

export function SaintSection({ saint, products, showViewAll = true }: SaintSectionProps) {
  return (
    <section className="py-16 md:py-24" aria-labelledby={`saint-${saint.slug}-heading`}>
      <div className="container">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Link
              href={`/santo/${saint.slug}`}
              className="font-display text-3xl md:text-4xl font-bold text-text-primary hover:text-primary transition-colors"
              aria-label={`Ver todos os produtos de ${saint.name}`}
            >
              {saint.name}
            </Link>
            {saint.description && (
              <p className="text-text-secondary mt-2 max-w-xl">{saint.description}</p>
            )}
          </div>
          {showViewAll && (
            <Link
              href={`/santo/${saint.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-4 md:mt-0"
            >
              Ver todos
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sample data for the three featured saints
export const featuredSaints: {
  name: string;
  slug: string;
  image: string;
  description: string;
  products: SaintProduct[];
}[] = [
  {
    name: "Nossa Senhora de Guadalupe",
    slug: "nossa-senhora-guadalupe",
    image: "/images/saints/guadalupe.jpg",
    description: "Imagens, medalhas, adornos e artigos devocionais de Nossa Senhora de Guadalupe",
    products: [
      { id: "g1", name: "Imagem Resina Nossa Sra. Guadalupe 32 cm", image: "/images/products/guadalupe-32cm.jpg", price: 89.90, originalPrice: 119.90, pixPrice: 85.40, installments: { count: 3, value: 29.97 }, href: "/produto/guadalupe-32cm", isLaunch: true },
      { id: "g2", name: "Imagem Resina Nossa Sra. Guadalupe 11 cm", image: "/images/products/guadalupe-11cm.jpg", price: 34.90, pixPrice: 33.15, installments: { count: 2, value: 17.45 }, href: "/produto/guadalupe-11cm" },
      { id: "g3", name: "Medalha Nossa Sra. Guadalupe 100 un", image: "/images/products/guadalupe-medalha-100.jpg", price: 156.00, pixPrice: 148.20, installments: { count: 3, value: 52.00 }, href: "/produto/guadalupe-medalha-100" },
      { id: "g4", name: "Adorno MDF Nossa Sra. Guadalupe", image: "/images/products/guadalupe-adornomdf.jpg", price: 22.90, pixPrice: 21.75, href: "/produto/guadalupe-adornomdf" },
      { id: "g5", name: "Chaveiro Nossa Sra. Guadalupe", image: "/images/products/guadalupe-chaveiro.jpg", price: 8.90, pixPrice: 8.45, href: "/produto/guadalupe-chaveiro" },
      { id: "g6", name: "Capelinha Nossa Sra. Guadalupe 7 cm", image: "/images/products/guadalupe-capelinha.jpg", price: 45.90, pixPrice: 43.60, installments: { count: 2, value: 22.95 }, href: "/produto/guadalupe-capelinha" },
    ],
  },
  {
    name: "Nossa Senhora da Imaculada Conceição",
    slug: "nossa-senhora-imaculada",
    image: "/images/saints/imaculada.jpg",
    description: "Velas, imagens, adornos e livros de ofício para devoção à Imaculada Conceição",
    products: [
      { id: "ic1", name: "Vela Devoção Imaculada Conceição", image: "/images/products/imaculada-vela.jpg", price: 18.90, pixPrice: 17.95, href: "/produto/imaculada-vela" },
      { id: "ic2", name: "Imagem Resina Imaculada Conceição 14.5 cm", image: "/images/products/imaculada-14cm.jpg", price: 52.90, originalPrice: 69.90, pixPrice: 50.25, installments: { count: 2, value: 26.45 }, href: "/produto/imaculada-14cm", badge: "BLACK FRIDAY", badgeVariant: "destructive" as const },
      { id: "ic3", name: "Imagem Resina Imaculada Conceição 11 cm", image: "/images/products/imaculada-11cm.jpg", price: 38.90, pixPrice: 36.95, href: "/produto/imaculada-11cm" },
      { id: "ic4", name: "Adorno MDF Imaculada Conceição", image: "/images/products/imaculada-adornomdf.jpg", price: 19.90, pixPrice: 18.90, href: "/produto/imaculada-adornomdf" },
      { id: "ic5", name: "Porta Vela Imaculada Conceição", image: "/images/products/imaculada-portavela.jpg", price: 28.90, pixPrice: 27.45, href: "/produto/imaculada-portavela" },
      { id: "ic6", name: "Chaveiro Imaculada Conceição", image: "/images/products/imaculada-chaveiro.jpg", price: 7.90, pixPrice: 7.50, href: "/produto/imaculada-chaveiro" },
      { id: "ic7", name: "Livro Ofício Imaculada Conceição", image: "/images/products/imaculada-livro.jpg", price: 42.90, pixPrice: 40.75, installments: { count: 2, value: 21.45 }, href: "/produto/imaculada-livro" },
    ],
  },
  {
    name: "Santa Luzia",
    slug: "santa-luzia",
    image: "/images/saints/santa-luzia.jpg",
    description: "Chaveiros, medalhas, aspersórios, imagens e incensos devocionais de Santa Luzia",
    products: [
      { id: "sl1", name: "Chaveiro Santa Luzia", image: "/images/products/luzia-chaveiro.jpg", price: 6.90, pixPrice: 6.55, href: "/produto/luzia-chaveiro" },
      { id: "sl2", name: "Medalha Santa Luzia 100 un", image: "/images/products/luzia-medalha.jpg", price: 134.00, pixPrice: 127.30, installments: { count: 3, value: 44.67 }, href: "/produto/luzia-medalha" },
      { id: "sl3", name: "Aspersório Santa Luzia", image: "/images/products/luzia-aspersorio.jpg", price: 24.90, pixPrice: 23.65, href: "/produto/luzia-aspersorio" },
      { id: "sl4", name: "Imagem Resina Santa Luzia 82 cm", image: "/images/products/luzia-82cm.jpg", price: 1290.00, pixPrice: 1225.50, installments: { count: 3, value: 430.00 }, href: "/produto/luzia-82cm", isBestseller: true },
      { id: "sl5", name: "Imagem Resina Santa Luzia 7 cm", image: "/images/products/luzia-7cm.jpg", price: 28.90, pixPrice: 27.45, href: "/produto/luzia-7cm" },
      { id: "sl6", name: "Incenso Santa Luzia", image: "/images/products/luzia-incenso.jpg", price: 15.90, pixPrice: 15.10, href: "/produto/luzia-incenso" },
      { id: "sl7", name: "Porta Vela Santa Luzia", image: "/images/products/luzia-portavela.jpg", price: 32.90, pixPrice: 31.25, href: "/produto/luzia-portavela" },
      { id: "sl8", name: "Vela Devoção Santa Luzia", image: "/images/products/luzia-vela.jpg", price: 16.90, pixPrice: 16.05, href: "/produto/luzia-vela" },
    ],
  },
];