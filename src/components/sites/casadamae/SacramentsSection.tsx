"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Sacrament {
  name: string;
  image: string;
  href: string;
  products: SacramentProduct[];
}

interface SacramentProduct {
  name: string;
  price: number;
  image: string;
  href: string;
}

const sacraments: Sacrament[] = [
  {
    name: "Batismo",
    image: "/images/sacraments/batismo.jpg",
    href: "/sacramento/batismo",
    products: [
      { name: "Vela Batismo Personalizada", price: 1.87, image: "/images/products/vela-batismo.jpg", href: "/produto/vela-batismo" },
      { name: "Certificado Batismo", price: 1.10, image: "/images/products/certificado-batismo.jpg", href: "/produto/certificado-batismo" },
      { name: "Protetor de Vela Batismo", price: 2.50, image: "/images/products/protetor-batismo.jpg", href: "/produto/protetor-batismo" },
      { name: "Lembrança Terço Pérola", price: 9.26, image: "/images/products/lembranca-terco-perola.jpg", href: "/produto/lembranca-terco-perola" },
    ],
  },
  {
    name: "Primeira Eucaristia",
    image: "/images/sacraments/eucaristia.jpg",
    href: "/sacramento/eucaristia",
    products: [
      { name: "Vela Eucaristia Personalizada", price: 1.87, image: "/images/products/vela-eucaristia.jpg", href: "/produto/vela-eucaristia" },
      { name: "Certificado Eucaristia", price: 1.10, image: "/images/products/certificado-eucaristia.jpg", href: "/produto/certificado-eucaristia" },
      { name: "Lembrança Terço Pérola", price: 9.26, image: "/images/products/lembranca-terco-perola-euc.jpg", href: "/produto/lembranca-terco-perola-euc" },
      { name: "Almofada Alianças Eucaristia", price: 18.90, image: "/images/products/almofada-eucaristia.jpg", href: "/produto/almofada-eucaristia" },
    ],
  },
  {
    name: "Crisma",
    image: "/images/sacraments/crisma.jpg",
    href: "/sacramento/crisma",
    products: [
      { name: "Vela Crisma Personalizada", price: 1.87, image: "/images/products/vela-crisma.jpg", href: "/produto/vela-crisma" },
      { name: "Certificado Crisma", price: 1.10, image: "/images/products/certificado-crisma.jpg", href: "/produto/certificado-crisma" },
      { name: "Lembrança Espírito Santo", price: 12.90, image: "/images/products/lembranca-espirito-santo.jpg", href: "/produto/lembranca-espirito-santo" },
      { name: "Bíblia Jovem Crisma", price: 89.90, image: "/images/products/biblia-jovem.jpg", href: "/produto/biblia-jovem" },
    ],
  },
  {
    name: "Matrimônio",
    image: "/images/sacraments/matrimonio.jpg",
    href: "/sacramento/matrimonio",
    products: [
      { name: "Vela Matrimônio Personalizada", price: 1.87, image: "/images/products/vela-matrimonio.jpg", href: "/produto/vela-matrimonio" },
      { name: "Certificado Matrimônio", price: 1.10, image: "/images/products/certificado-matrimonio.jpg", href: "/produto/certificado-matrimonio" },
      { name: "Almofada Alianças Luxo", price: 45.90, image: "/images/products/almofada-aliancas.jpg", href: "/produto/almofada-aliancas" },
      { name: "Lembrança Terço Casal", price: 15.90, image: "/images/products/lembranca-terco-casal.jpg", href: "/produto/lembranca-terco-casal" },
    ],
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function SacramentsSection() {
  return (
    <section className="py-16 md:py-24 bg-background-alt" aria-labelledby="sacraments-heading">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 id="sacraments-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Sacramentos
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Artigos personalizados para os momentos mais importantes da vida cristã
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sacraments.map((sacrament) => (
            <article key={sacrament.name} className="group">
              <Link
                href={sacrament.href}
                className="block rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                aria-label={sacrament.name}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={sacrament.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-4 text-center">
                    {sacrament.name}
                  </h3>
                  <div className="space-y-3 flex-1">
                    {sacrament.products.map((product, i) => (
                      <Link
                        key={i}
                        href={product.href}
                        className="flex items-center gap-3 p-3 bg-background rounded-xl hover:bg-primary-light transition-colors group"
                        aria-label={product.name}
                      >
                        <div className="size-16 flex-shrink-0 rounded-lg bg-background overflow-hidden">
                          <Image
                            src={product.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-text-primary text-sm truncate group-hover:text-primary transition-colors">
                            {product.name}
                          </p>
                          <p className="text-sm font-bold text-primary">{formatPrice(product.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={sacrament.href}
                    className="mt-4 w-full text-center px-4 py-2 bg-primary-hover text-white font-medium rounded-lg hover:bg-primary-active transition-colors"
                  >
                    Ver Todos os Produtos
                  </Link>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}