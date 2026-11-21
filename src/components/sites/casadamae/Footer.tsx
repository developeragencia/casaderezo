import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Truck, Shield, CreditCard, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  institucional: [
    { name: "Página Inicial", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Como Comprar", href: "/como-comprar" },
    { name: "Fale Conosco", href: "/fale-conosco" },
    { name: "Favoritos", href: "/favoritos" },
  ],
  politicas: [
    { name: "Política de Privacidade", href: "/politica-privacidade" },
    { name: "Frete Grátis", href: "/frete-gratis" },
    { name: "Política de Pagamento", href: "/politica-pagamento" },
    { name: "Atacado", href: "/atacado" },
  ],
  ajuda: [
    { name: "Trocas e Devoluções", href: "/trocas-devolucoes" },
    { name: "Prazos de Entrega", href: "/prazos-entrega" },
    { name: "Formas de Pagamento", href: "/formas-pagamento" },
    { name: "Personalização", href: "/personalizacao" },
    { name: "Dúvidas Frequentes", href: "/faq" },
  ],
};

const benefits = [
  { icon: Truck, title: "Frete Grátis", desc: "Acima de R$ 500 (S/SE/CO)" },
  { icon: Shield, title: "Compra Segura", desc: "Ambiente criptografado e protegido" },
  { icon: CreditCard, title: "Até 3x s/ Juros", desc: "No cartão de crédito" },
  { icon: Award, title: "5% Off no Pix", desc: "Também no boleto bancário" },
];

export function Footer() {
  return (
    <footer className="bg-text-primary text-white" role="contentinfo">
      {/* Benefits Bar */}
      <div className="bg-neutral-950 py-8 border-t border-neutral-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{benefit.title}</h4>
                  <p className="text-sm text-neutral-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Casa da Mãe - Início">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white">Casa da Mãe</span>
                  <p className="font-sans text-xs text-neutral-400 -mt-1">Artigos Religiosos — Atacado e Varejo</p>
                </div>
              </Link>
              <p className="text-neutral-400 text-sm mb-6 max-w-xs">
                Mais de 20 anos de tradição na fabricação e venda de artigos religiosos. Qualidade, fé e devoção em cada peça.
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                <MapPin className="size-4 flex-shrink-0" aria-hidden="true" />
                <span>Roseira/SP — Aparecida/SP</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                <Phone className="size-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+551236463440" className="hover:text-primary transition-colors">(12) 3646-3440</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                <Mail className="size-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:ecommerce@gruposacrarium.com.br" className="hover:text-primary transition-colors">ecommerce@gruposacrarium.com.br</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/casadamae" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="size-5" />
                </a>
                <a href="https://instagram.com/casadamae" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="size-5" />
                </a>
                <a href="https://youtube.com/casadamae" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="size-5" />
                </a>
              </div>
            </div>

            {/* Institutional */}
            <nav aria-label="Links institucionais">
              <h3 className="font-medium text-white mb-4">Institucional</h3>
              <ul className="space-y-2">
                {footerLinks.institucional.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-400 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Policies */}
            <nav aria-label="Políticas e informações">
              <h3 className="font-medium text-white mb-4">Políticas e Informações</h3>
              <ul className="space-y-2">
                {footerLinks.politicas.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-400 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Help */}
            <nav aria-label="Ajuda e suporte">
              <h3 className="font-medium text-white mb-4">Ajuda e Suporte</h3>
              <ul className="space-y-2">
                {footerLinks.ajuda.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-400 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 my-8" />

          {/* Company Info & Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-white mb-4">Informações da Empresa</h3>
              <dl className="space-y-2 text-sm text-neutral-400">
                <div className="flex gap-4">
                  <dt className="font-medium text-white min-w-[140px]">Razão Social:</dt>
                  <dd>SACRARIUM INDÚSTRIA E COMÉRCIO DE VELAS LTDA</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-white min-w-[140px]">CNPJ:</dt>
                  <dd>05.810.412/0001-00</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-white min-w-[140px]">Endereço:</dt>
                  <dd>Roseira/SP — CEP 12590-000</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-white min-w-[140px]">Inscrição Estadual:</dt>
                  <dd>Isento</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium text-white mb-4">Formas de Pagamento</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-neutral-400 text-sm">Cartão de crédito:</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Visa", "Mastercard", "Elo", "Hipercard", "Amex"].map((card) => (
                    <span key={card} className="px-3 py-1 bg-neutral-800 text-white text-xs font-medium rounded">
                      {card}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="text-neutral-400 text-sm">Outros:</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded flex items-center gap-1">
                    💚 Pix
                  </span>
                  <span className="px-3 py-1 bg-warning/20 text-warning text-xs font-medium rounded flex items-center gap-1">
                    📄 Boleto
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-500 mt-4">
                Parcelamento em até 3x sem juros. Pix e boleto com 5% de desconto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-950 border-t border-neutral-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Casa da Mãe. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para levar fé e devoção até você.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}