"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, Tag, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Product {
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

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
  showQuickBuy?: boolean;
}

export function ProductCard({ product, variant = "default", showQuickBuy = false }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const baseClasses = "group relative flex flex-col bg-surface rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-border";
  const variantClasses = {
    default: "h-full",
    compact: "h-auto",
    featured: "h-full md:h-[520px]",
  };

  return (
    <article className={cn(baseClasses, variantClasses[variant])} itemScope itemType="https://schema.org/Product">
      <Link href={product.href} className="relative block overflow-hidden aspect-square bg-background" aria-label={product.name}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex flex-col gap-1.5">
          {product.isLaunch && (
            <Badge variant="secondary" className="font-medium px-2.5 py-1">
              <Tag className="size-3 mr-1" aria-hidden="true" />
              Lançamento
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="default" className="font-medium px-2.5 py-1 bg-primary text-primary-foreground">
              <span className="size-3 mr-1">⭐</span>
              Mais Vendido
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="destructive" className="font-bold px-2.5 py-1">
              <Percent className="size-3 mr-1" aria-hidden="true" />
              -{discountPercent}% Black Friday
            </Badge>
          )}
          {product.badge && (
            <Badge variant={product.badgeVariant || "default"} className="font-medium px-2.5 py-1">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex-1"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <ShoppingCart className="size-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            aria-label={`Adicionar ${product.name} aos favoritos`}
          >
            <Heart className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <h3 itemProp="name" className="font-medium text-text-primary line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          <Link href={product.href} className="hover:underline">{product.name}</Link>
        </h3>

        <div className="flex flex-col gap-1 mt-auto" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span
              itemProp="price"
              content={product.price.toFixed(2).replace(".", ",")}
              className="text-2xl font-bold text-text-primary"
            >
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span
                itemProp="priceSpecification"
                itemType="https://schema.org/PriceSpecification"
                className="text-sm text-text-muted line-through"
              >
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>

          {product.pixPrice && (
            <p className="text-sm text-success font-medium flex items-center gap-1">
              <span className="size-3">💚</span>
              {formatPrice(product.pixPrice)} no Pix
            </p>
          )}

          {product.installments && (
            <p className="text-sm text-text-muted">
              ou {product.installments.count}x de {formatPrice(product.installments.value)} s/ juros
            </p>
          )}
        </div>

        {showQuickBuy && (
          <Button
            className="mt-3 w-full bg-primary hover:bg-primary-hover"
            asChild
            aria-label={`Comprar ${product.name}`}
          >
            <a href={product.href}>Comprar Agora</a>
          </Button>
        )}
      </div>
    </article>
  );
}