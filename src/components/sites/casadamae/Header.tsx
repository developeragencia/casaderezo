"use client";

import Link from "next/link";
import { ShoppingBag, User, Search, Phone, MessageSquare, Menu, X, ChevronDown, Sparkles } from "lucide-react";
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

const allCategories = [
  { name: "Imagens Sacras", href: "/categoria/imagens-sacras" },
  { name: "Terços & Medalhas", href: "/categoria/tercos" },
  { name: "Crucifixos", href: "/categoria/crucifixos" },
  { name: "Velas & Incensos", href: "/categoria/velas" },
  { name: "Objetos Litúrgicos", href: "/categoria/objetos-liturgicos" },
  { name: "Sacramentos", href: "/categoria/sacramentos" },
  { name: "Especial Natal", href: "/categoria/natal" },
  { name: "Bíblias & Livros", href: "/categoria/biblias" },
  { name: "Mantos & Coroas", href: "/categoria/mantos-coroas" },
  { name: "Porta Velas", href: "/categoria/porta-velas" },
  { name: "Hóstias & Vinhos", href: "/categoria/hostias-vinhos" },
  { name: "Adornos & Quadros", href: "/categoria/adornos" },
  { name: "Acessórios Religiosos", href: "/categoria/acessorios" },
  { name: "Personalizados", href: "/categoria/personalizados" },
];

const topNavCategories = [
  { name: "Imagens Sacras", href: "/categoria/imagens-sacras" },
  { name: "Terços", href: "/categoria/tercos" },
  { name: "Crucifixos", href: "/categoria/crucifixos" },
  { name: "Velas & Castiçais", href: "/categoria/velas" },
  { name: "Litúrgicos", href: "/categoria/objetos-liturgicos" },
  { name: "Sacramentos", href: "/categoria/sacramentos" },
  { name: "Presépios de Natal", href: "/categoria/natal" },
  { name: "Ofertas", href: "/categoria/ofertas", highlight: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b border-neutral-100"
      )}
    >
      {/* 1. Announcement Bar (Clean, single-line) */}
      <div className="bg-[#152336] text-white text-xs py-2 px-4">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span>🚚</span>
              <strong className="text-amber-300 font-semibold">Frete Grátis</strong> acima de R$ 299 (S/SE/CO)
            </span>
            <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap text-neutral-300">
              <span>⚡</span>
              <strong className="text-emerald-300 font-semibold">5% de Desconto</strong> no Pix ou Boleto
            </span>
            <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap text-neutral-300">
              <span>📦</span>
              <span>Atacado e Varejo direto da fábrica</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300 shrink-0 text-xs">
            <a
              href="https://wa.me/5512997750133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="size-3.5" />
              <span>(12) 99775-0133</span>
            </a>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline text-neutral-400">Atendimento: Seg à Sex 8h - 18h</span>
          </div>
        </div>
      </div>

      {/* 2. Main Header (Brand + Search + Actions) */}
      <div className="container py-3.5">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Casa de Rezo - Página Inicial">
            <div className="size-11 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <svg className="size-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M7 7h10" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900 leading-none">
                  Casa de Rezo
                </span>
              </div>
              <p className="text-[11px] text-amber-700 font-medium tracking-wide uppercase mt-0.5">
                Artigos Sacros & Religiosos
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="relative flex items-center"
              role="search"
            >
              <Search className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por imagens, santos, terços, crucifixos, velas..."
                className="w-full pl-10 pr-24 h-11 bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border-neutral-200 rounded-full text-sm text-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all shadow-sm"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1.5 h-8 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full text-xs shadow-sm"
              >
                Buscar
              </Button>
            </form>
          </div>

          {/* User & Cart Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Direct Help */}
            <a
              href="https://wa.me/5512997750133"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-full transition-colors"
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Compre via WhatsApp</span>
            </a>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 py-2 text-neutral-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg text-sm"
                  aria-label="Minha Conta"
                >
                  <User className="size-5" />
                  <div className="hidden lg:flex flex-col text-left leading-tight">
                    <span className="text-[11px] text-neutral-500">Olá, bem-vindo</span>
                    <span className="text-xs font-semibold text-neutral-800">Minha Conta</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl shadow-xl border-neutral-100 bg-white">
                <div className="px-3 py-2 border-b border-neutral-100">
                  <p className="font-semibold text-sm text-neutral-900">Acesse sua conta</p>
                  <p className="text-xs text-neutral-500">Acompanhe seus pedidos e favoritos</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/login" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-amber-50 hover:text-amber-800 font-medium">
                    <User className="size-4 text-amber-600" />
                    Entrar no Sistema
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cadastro" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-amber-50 hover:text-amber-800 font-medium">
                    <Sparkles className="size-4 text-amber-600" />
                    Criar Conta Grátis
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 border-neutral-100" />
                <DropdownMenuItem asChild>
                  <Link href="/meus-pedidos" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-amber-50">
                    <span>📦</span>
                    Meus Pedidos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favoritos" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-amber-50">
                    <span>❤️</span>
                    Lista de Desejos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping Cart */}
            <Link
              href="/carrinho"
              className="flex items-center gap-2.5 px-3 py-2 text-neutral-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors relative"
              aria-label="Carrinho de Compras"
            >
              <div className="relative">
                <ShoppingBag className="size-5" />
                <span className="absolute -top-1.5 -right-2 size-4.5 min-w-[18px] px-1 flex items-center justify-center bg-amber-600 text-white text-[10px] font-bold rounded-full shadow-sm">
                  0
                </span>
              </div>
              <div className="hidden lg:flex flex-col text-left leading-tight">
                <span className="text-[11px] text-neutral-500">Carrinho</span>
                <span className="text-xs font-semibold text-neutral-800">R$ 0,00</span>
              </div>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-neutral-700 hover:bg-neutral-100" aria-label="Abrir Menu">
                  {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-white">
                <div className="p-4 border-b border-neutral-100 bg-neutral-50 flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v20M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-neutral-900">Casa de Rezo</h3>
                    <p className="text-xs text-amber-700 font-medium">Menu de Navegação</p>
                  </div>
                </div>

                <div className="p-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (searchQuery.trim()) {
                        window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
                      }
                    }}
                    className="relative mb-4"
                  >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                    <Input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar artigos..."
                      className="w-full pl-9 h-10 text-xs bg-neutral-50 rounded-lg"
                    />
                  </form>

                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">Categorias</h4>
                  <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                    {allCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-sm text-neutral-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg font-medium transition-colors"
                      >
                        <span>{cat.name}</span>
                        <ChevronDown className="size-3.5 text-neutral-400 -rotate-90" />
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
                    <a
                      href="https://wa.me/5512997750133"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg font-medium"
                    >
                      <MessageSquare className="size-4" />
                      <span>WhatsApp Atendimento</span>
                    </a>
                    <a
                      href="tel:+551236463440"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg"
                    >
                      <Phone className="size-4" />
                      <span>(12) 3646-3440</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* 3. Horizontal Category Navigation Bar */}
      <nav className="hidden md:block border-t border-neutral-100 bg-[#FAFAFA]" aria-label="Navegação por categorias">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            {/* All Categories Dropdown Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-none font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Menu className="size-4 text-amber-400" />
                  <span>Todas as Categorias</span>
                  <ChevronDown className="size-3.5 ml-1 text-neutral-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={0} className="w-[850px] p-6 rounded-2xl shadow-2xl border-neutral-200 bg-white grid grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 pb-1 border-b border-amber-100">
                    Devoção & Santos
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/categoria/imagens-sacras" className="text-neutral-600 hover:text-amber-700 transition-colors">Imagens Sacras em Resina</Link></li>
                    <li><Link href="/santo/nossa-senhora-guadalupe" className="text-neutral-600 hover:text-amber-700 transition-colors">Nossa Senhora de Guadalupe</Link></li>
                    <li><Link href="/santo/nossa-senhora-imaculada" className="text-neutral-600 hover:text-amber-700 transition-colors">Imaculada Conceição</Link></li>
                    <li><Link href="/santo/santa-luzia" className="text-neutral-600 hover:text-amber-700 transition-colors">Santa Luzia</Link></li>
                    <li><Link href="/categoria/tercos" className="text-neutral-600 hover:text-amber-700 transition-colors">Terços de Madeira & Pérola</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 pb-1 border-b border-amber-100">
                    Celebração & Liturgia
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/categoria/crucifixos" className="text-neutral-600 hover:text-amber-700 transition-colors">Crucifixos de Parede e Mesa</Link></li>
                    <li><Link href="/categoria/velas" className="text-neutral-600 hover:text-amber-700 transition-colors">Velas Votivas & Círios Pascais</Link></li>
                    <li><Link href="/categoria/objetos-liturgicos" className="text-neutral-600 hover:text-amber-700 transition-colors">Cálices, Tecas e Ostensórios</Link></li>
                    <li><Link href="/categoria/hostias-vinhos" className="text-neutral-600 hover:text-amber-700 transition-colors">Hóstias e Vinhos Canônicos</Link></li>
                    <li><Link href="/categoria/sacramentos" className="text-neutral-600 hover:text-amber-700 transition-colors">Lembrancinhas de Batismo e Crisma</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 pb-1 border-b border-amber-100">
                    Datas Especiais & Decoração
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/categoria/natal" className="text-neutral-600 hover:text-amber-700 transition-colors font-medium text-emerald-700">Presépios & Decoração de Natal</Link></li>
                    <li><Link href="/categoria/adornos" className="text-neutral-600 hover:text-amber-700 transition-colors">Quadros e Adornos em MDF</Link></li>
                    <li><Link href="/categoria/mantos-coroas" className="text-neutral-600 hover:text-amber-700 transition-colors">Mantos Bordados & Coroas</Link></li>
                    <li><Link href="/categoria/ofertas" className="text-red-600 hover:text-red-700 font-semibold transition-colors">Outlet & Promoções da Semana</Link></li>
                  </ul>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quick Links */}
            <div className="flex items-center gap-1 pl-4">
              {topNavCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={cn(
                    "px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap",
                    cat.highlight
                      ? "text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 flex items-center gap-1 font-bold"
                      : "text-neutral-700 hover:text-amber-700 hover:bg-white"
                  )}
                >
                  {cat.highlight && <span className="text-[10px]">🔥</span>}
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-neutral-500 font-medium">
            Entregamos para todo o Brasil
          </div>
        </div>
      </nav>
    </header>
  );
}
