import Link from "next/link";
import { MapPin, Phone, Mail, Truck, Shield, CreditCard, Award } from "lucide-react";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

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
              <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Casa de Rezo - Início">
                <div className="size-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-md">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M7 7h10" />
                  </svg>
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-white">Casa de Rezo</span>
                  <p className="font-sans text-xs text-amber-500 font-medium -mt-0.5">Artigos Sacros & Religiosos</p>
                </div>
              </Link>
              <p className="text-neutral-400 text-sm mb-6 max-w-xs">
                Mais de 20 anos de tradição em artigos sacros e religiosos. Qualidade, fé e devoção para sua paróquia e seu lar.
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                <MapPin className="size-4 flex-shrink-0 text-amber-500" aria-hidden="true" />
                <span>Brasil — Atendimento Nacional</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                <Phone className="size-4 flex-shrink-0 text-amber-500" aria-hidden="true" />
                <a href="https://wa.me/5512997750133" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">(12) 99775-0133 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                <Mail className="size-4 flex-shrink-0 text-amber-500" aria-hidden="true" />
                <a href="mailto:contato@casadorezo.com.br" className="hover:text-amber-400 transition-colors">contato@casadorezo.com.br</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com/casadorezo" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-600 hover:text-white transition-colors" aria-label="Instagram">
                  <InstagramIcon className="size-5" />
                </a>
                <a href="https://facebook.com/casadorezo" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-amber-600 hover:text-white transition-colors" aria-label="Facebook">
                  <FacebookIcon className="size-5" />
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
            <p>© {new Date().getFullYear()} Casa de Rezo — Artigos Sacros & Religiosos. Todos os direitos reservados.</p>
            <p>Feito para levar a fé e a tradição cristã até o seu coração.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}