"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  image: string;
  href: string;
  count?: number;
}

const categories: Category[] = [
  { name: "Adornos", image: "/images/categories/adornos.jpg", href: "/categoria/adornos", count: 156 },
  { name: "Crucifixos", image: "/images/categories/crucifixos.jpg", href: "/categoria/crucifixos", count: 89 },
  { name: "Porta Velas", image: "/images/categories/porta-velas.jpg", href: "/categoria/porta-velas", count: 67 },
  { name: "Hóstias e Vinhos", image: "/images/categories/hostias.jpg", href: "/categoria/hostias-vinhos", count: 45 },
  { name: "Mantos, Coroas e Broches", image: "/images/categories/mantos.jpg", href: "/categoria/mantos-coroas", count: 78 },
  { name: "Colunas e Bases", image: "/images/categories/colunas.jpg", href: "/categoria/colunas-bases", count: 34 },
];

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="categories-heading">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 id="categories-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            DEMAIS CATEGORIAS
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore todas as categorias de artigos religiosos disponíveis
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <article key={category.name} className="group">
              <Link
                href={category.href}
                className="block rounded-2xl overflow-hidden bg-background transition-all duration-300 hover:shadow-lg border border-border"
                aria-label={category.name}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  {category.count && (
                    <p className="text-sm text-text-muted mt-1">{category.count} produtos</p>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/categorias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-hover text-white font-medium rounded-lg hover:bg-primary-active transition-colors"
          >
            Ver Todas as Categorias
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}