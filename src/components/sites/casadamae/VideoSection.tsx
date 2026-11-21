"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoProduct {
  name: string;
  thumbnail: string;
  href: string;
  duration?: string;
}

const videos: VideoProduct[] = [
  { name: "Teca Inox - Detalhes e Uso", thumbnail: "/images/videos/teca-inox.jpg", href: "/produto/teca-inox", duration: "1:23" },
  { name: "Imagem Nossa Sra. Aparecida 15 cm", thumbnail: "/images/videos/aparecida-15cm.jpg", href: "/produto/aparecida-15cm", duration: "0:58" },
  { name: "Presépio Bíblia c/ Luz e Som", thumbnail: "/images/videos/prespio-biblia.jpg", href: "/produto/prespio-biblia", duration: "2:15" },
  { name: "Imagem São Rafael Arcanjo", thumbnail: "/images/videos/sao-rafael.jpg", href: "/produto/sao-rafael", duration: "1:07" },
  { name: "Imagem Nossa Sra. Aparecida 15 cm (2)", thumbnail: "/images/videos/aparecida-15cm-2.jpg", href: "/produto/aparecida-15cm-2", duration: "0:45" },
  { name: "Kit Medalha São Bento + Terço Pulso", thumbnail: "/images/videos/kit-sao-bento.jpg", href: "/produto/kit-sao-bento", duration: "1:34" },
];

export function VideoSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="videos-heading">
      <div className="container">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 id="videos-heading" className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              O Produto em Vídeo
            </h2>
            <p className="text-text-secondary mt-2">Veja os detalhes e funcionamento dos nossos principais produtos</p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            Ver todos
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {videos.map((video) => (
            <article key={video.name} className="group xl:col-span-2">
              <Link
                href={video.href}
                className="block rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-xl"
                aria-label={video.name}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      className="size-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-text-primary shadow-xl hover:bg-white transition-colors group-hover:scale-110 transition-transform"
                      aria-label={`Assistir vídeo: ${video.name}`}
                    >
                      <Play className="size-7 ml-1 text-primary" aria-hidden="true" />
                    </button>
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                      {video.duration}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {video.name}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}