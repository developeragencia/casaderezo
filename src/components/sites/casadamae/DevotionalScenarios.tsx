"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DevotionalKit {
  name: string;
  saint: string;
  image: string;
  href: string;
  items: KitItem[];
  totalPrice: number;
}

interface KitItem {
  name: string;
  price: number;
  image: string;
  href: string;
}

const kits: DevotionalKit[] = [
  {
    name: "Cantinho de Oração",
    saint: "São Miguel Arcanjo",
    image: "/images/kits/cantinho-sao-miguel.jpg",
    href: "/kit/cantinho-sao-miguel",
    totalPrice: 38.70,
    items: [
      { name: "Porta Vela São Miguel", price: 17.11, image: "/images/products/portavela-sao-miguel.jpg", href: "/produto/portavela-sao-miguel" },
      { name: "Terço c/ Oração São Miguel", price: 6.93, image: "/images/products/terco-sao-miguel.jpg", href: "/produto/terco-sao-miguel" },
      { name: "Vela Votiva São Miguel", price: 14.66, image: "/images/products/vela-sao-miguel.jpg", href: "/produto/vela-sao-miguel" },
    ],
  },
  {
    name: "Devoção Completa",
    saint: "Nossa Senhora Aparecida",
    image: "/images/kits/devocao-aparecida.jpg",
    href: "/kit/devocao-aparecida",
    totalPrice: 32.79,
    items: [
      { name: "Capela Aparecida", price: 12.53, image: "/images/products/capela-aparecida.jpg", href: "/produto/capela-aparecida" },
      { name: "Porta Água Benta", price: 7.04, image: "/images/products/porta-agua-benta.jpg", href: "/produto/porta-agua-benta" },
      { name: "Relicário Aparecida", price: 9.86, image: "/images/products/relicario-aparecida.jpg", href: "/produto/relicario-aparecida" },
      { name: "Vela Encantada Aparecida", price: 3.36, image: "/images/products/vela-encantada.jpg", href: "/produto/vela-encantada" },
    ],
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function DevotionalScenarios() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="kits-heading">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 id="kits-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Cenários de Devoção
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Kits prontos para montar seu espaço de oração e devoção
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {kits.map((kit) => (
            <article key={kit.name} className="group">
              <Link
                href={kit.href}
                className="block rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                aria-label={kit.name}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={kit.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">
                      Kit Completo
                    </span>
                    <h3 className="font-display text-2xl font-bold mb-1">{kit.name}</h3>
                    <p className="text-white/90">Devoção a {kit.saint}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-4">
                    {kit.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="flex items-center gap-3 p-3 bg-background rounded-xl hover:bg-primary-light transition-colors group"
                        aria-label={item.name}
                      >
                        <div className="size-14 flex-shrink-0 rounded-lg bg-background overflow-hidden">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-text-primary text-sm truncate group-hover:text-primary transition-colors">
                            {item.name}
                          </p>
                          <p className="text-sm font-bold text-primary">{formatPrice(item.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-muted">Total do Kit</p>
                      <p className="font-display text-2xl font-bold text-text-primary">{formatPrice(kit.totalPrice)}</p>
                    </div>
                    <Link
                      href={kit.href}
                      className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
                    >
                      Montar Kit
                    </Link>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/kits-devocao"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Ver Todos os Kits
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}