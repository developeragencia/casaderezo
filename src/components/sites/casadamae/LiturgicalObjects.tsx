"use client";

import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LiturgicalProduct {
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

const liturgicalProducts: LiturgicalProduct[] = [
  { id: "lo1", name: "Teca Inox", image: "/images/products/teca-inox.jpg", price: 44.37, pixPrice: 42.15, installments: { count: 2, value: 22.18 }, href: "/produto/teca-inox" },
  { id: "lo2", name: "Carvão Litúrgico 10 un", image: "/images/products/carvao-liturgico.jpg", price: 9.46, pixPrice: 8.98, href: "/produto/carvao-liturgico" },
  { id: "lo3", name: "Teca Cordeiro Prata", image: "/images/products/teca-cordeiro.jpg", price: 18.32, pixPrice: 17.40, href: "/produto/teca-cordeiro" },
  { id: "lo4", name: "Castiçal Bronze 16 cm", image: "/images/products/castical-bronze.jpg", price: 425.95, pixPrice: 404.65, installments: { count: 3, value: 141.98 }, href: "/produto/castical-bronze", isBestseller: true },
  { id: "lo5", name: "Incenso Sabatinus", image: "/images/products/incenso-sabatinus.jpg", price: 25.63, pixPrice: 24.34, href: "/produto/incenso-sabatinus" },
  { id: "lo6", name: "Castiçal Alumínio 22 cm", image: "/images/products/castical-aluminio.jpg", price: 44.54, pixPrice: 42.31, installments: { count: 2, value: 22.27 }, href: "/produto/castical-aluminio" },
  { id: "lo7", name: "Naveta Incenso Prata", image: "/images/products/naveta-prata.jpg", price: 89.90, pixPrice: 85.40, installments: { count: 2, value: 44.95 }, href: "/produto/naveta-prata" },
  { id: "lo8", name: "Custódia Dourada 30 cm", image: "/images/products/custodia.jpg", price: 1290.00, pixPrice: 1225.50, installments: { count: 3, value: 430.00 }, href: "/produto/custodia" },
  { id: "lo9", name: "Sineta Latão 12 cm", image: "/images/products/sineta.jpg", price: 67.90, pixPrice: 64.50, installments: { count: 2, value: 33.95 }, href: "/produto/sineta" },
  { id: "lo10", name: "Aspersório Inox", image: "/images/products/aspersorio-inox.jpg", price: 34.90, pixPrice: 33.15, href: "/produto/aspersorio-inox" },
  { id: "lo11", name: "Bandeja Ofertório Madeira", image: "/images/products/bandeja-ofertorio.jpg", price: 156.00, pixPrice: 148.20, installments: { count: 3, value: 52.00 }, href: "/produto/bandeja-ofertorio" },
  { id: "lo12", name: "Cruz Processional 45 cm", image: "/images/products/cruz-processional.jpg", price: 389.90, pixPrice: 370.40, installments: { count: 3, value: 129.97 }, href: "/produto/cruz-processional" },
];

export function LiturgicalObjects() {
  return (
    <section className="py-16 md:py-24 bg-background-alt" aria-labelledby="liturgical-heading">
      <div className="container">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 id="liturgical-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              Objetos Litúrgicos
            </h2>
            <p className="text-text-secondary mt-2">Para a paróquia — Qualidade e tradição no serviço litúrgico</p>
          </div>
          <Link
            href="/objetos-liturgicos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            Ver todos
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {liturgicalProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}