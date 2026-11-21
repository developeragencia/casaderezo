"use client";

import Link from "next/link";
import { ShoppingCart, User, Search, Phone, MessageSquare, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const categories = [
  { name: "Acessórios", href: "/categoria/acessorios" },
  { name: "Adornos", href: "/categoria/adornos" },
  { name: "Bíblias", href: "/categoria/biblias" },
  { name: "Círio Pascal", href: "/categoria/cirio-pascal" },
  { name: "Crucifixos", href: "/categoria/crucifixos" },
  { name: "Devocional", href: "/categoria/devocional" },
  { name: "Hóstia", href: "/categoria/hostia" },
  { name: "Imagens Sacras", href: "/categoria/imagens-sacras" },
  { name: "Mantos/Coroas", href: "/categoria/mantos-coroas" },
  { name: "Natal", href: "/categoria/natal" },
  { name: "Objetos Litúrgicos", href: "/categoria/objetos-liturgicos" },
  { name: "Personalizados", href: "/categoria/personalizados" },
  { name: "Sacramentos", href: "/categoria/sacramentos" },
  { name: "Terços", href: "/categoria/tercos" },
  { name: "Velas", href: "/categoria/velas" },
];

const topBarItems = [
  { icon: "🚚", text: "Frete grátis acima de R$ 500 (S/SE/CO)" },
  { icon: "💰", text: "5% de desconto no Pix ou no boleto" },
  { icon: "🏪", text: "Atacado a partir de R$ 500" },
  { icon: "🏭", text: "Fabricação própria — Mais de 20 anos de ofício" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
    )}>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 text-sm hidden md:flex">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {topBarItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-base">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+551236463440" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="size-4" />
              <span>(12) 3646-3440</span>
            </a>
            <a href="https://wa.me/5512997750133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageSquare className="size-4" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:ecommerce@gruposacrarium.com.br" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span>✉️</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="bg-secondary text-white py-1.5 text-xs md:hidden">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {topBarItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1 whitespace-nowrap">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/5512997750133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <MessageSquare className="size-4" />
            </a>
            <a href="tel:+551236463440" className="flex items-center gap-1">
              <Phone className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Casa da Mãe - Início">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-text-primary">Casa da Mãe</span>
                <p className="font-sans text-xs text-text-muted -mt-1">Artigos Religiosos — Atacado e Varejo</p>
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl hidden md:block">
            <form className="relative" role="search">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-text-muted" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Buscar produtos, santos, categorias..."
                className="pl-10 h-11 bg-background border-border focus:border-primary"
                aria-label="Buscar produtos"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                  {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <nav className="p-4 space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-primary-light text-text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{cat.name}</span>
                      <ChevronDown className="size-4 text-text-muted" />
                    </Link>
                  ))}
                  <div className="border-t my-4" />
                  <a href="tel:+551236463440" className="flex items-center gap-2 px-3 py-2 text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                    <Phone className="size-5" />
                    <span>(12) 3646-3440</span>
                  </a>
                  <a href="https://wa.me/5512997750133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                    <MessageSquare className="size-5" />
                    <span>WhatsApp</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" aria-label="Minha conta">
                  <User className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-4 py-3 border-b">
                  <p className="font-medium text-sm">Minha Conta</p>
                  <p className="text-xs text-text-muted">Faça login para acessar</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/login" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <User className="size-4" />
                    Entrar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cadastro" className="flex items-center gap-2">
                    <User className="size-4" />
                    Cadastrar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/meus-pedidos" className="flex items-center gap-2">
                    <span className="size-4">📦</span>
                    Meus Pedidos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favoritos" className="flex items-center gap-2">
                    <span className="size-4">❤️</span>
                    Favoritos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link href="/carrinho" className="relative" aria-label="Carrinho de compras">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="size-5" />
                <span className="absolute -top-1 -right-1 size-5 flex items-center justify-center bg-primary text-white text-xs font-medium rounded-full">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <nav className="hidden md:block border-t border-border bg-white" aria-label="Categorias principais">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-4 py-3 font-medium text-text-primary hover:bg-primary-light hover:text-primary transition-colors" aria-haspopup="true">
              <span className="flex items-center gap-2">
                <span className="size-5">📿</span>
                <span>Todas as Categorias</span>
                <ChevronDown className="size-4 ml-auto text-text-muted" />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom" sideOffset={4} className="w-full max-w-[900px] p-0">
            <div className="grid grid-cols-4 gap-0 p-4">
              {categories.map((cat, i) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="col-span-1 px-3 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors group"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}