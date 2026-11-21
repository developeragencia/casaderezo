"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Material {
  name: string;
  image: string;
  href: string;
  description: string;
  count: number;
}

const materials: Material[] = [
  {
    name: "Imagens de Mármore",
    image: "/images/materials/marmore.jpg",
    href: "/material/marmore",
    description: "Esculturas nobres e duradouras",
    count: 42,
  },
  {
    name: "Resina Nacional",
    image: "/images/materials/resina-nacional.jpg",
    href: "/material/resina-nacional",
    description: "Fabricação própria — Qualidade garantida",
    count: 356,
  },
  {
    name: "Resina Importada",
    image: "/images/materials/resina-importada.jpg",
    href: "/material/resina-importada",
    description: "Detalhes refinados e acabamento premium",
    count: 189,
  },
  {
    name: "Terços e Dezenas",
    image: "/images/materials/tercos.jpg",
    href: "/material/tercos",
    description: "Para oração e devoção diária",
    count: 234,
  },
];

export function MaterialHighlights() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="materials-heading">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 id="materials-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Materiais em Destaque
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Conheça os materiais que fazem a diferença na qualidade dos nossos artigos
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <article key={material.name} className="group">
              <Link
                href={material.href}
                className="block rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-xl"
                aria-label={material.name}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={material.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                    {material.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">{material.description}</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
                    <span>{material.count} produtos</span>
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}