"use client";

import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { featuredSaints, type SaintProduct, type FeaturedSaint } from "@/data/featuredSaints";

export { featuredSaints, type SaintProduct, type FeaturedSaint };

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