import type { Metadata, Viewport } from "next";
import { Figtree, Marcellus } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sites/casadamae/Header";
import { Footer } from "@/components/sites/casadamae/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Casa da Mãe — Artigos Religiosos | Atacado e Varejo",
    template: "%s | Casa da Mãe",
  },
  description: "Casa da Mãe - Mais de 20 anos de tradição em artigos religiosos. Imagens, velas, terços, crucifixos, adornos e muito mais. Atacado a partir de R$ 500. Frete grátis acima de R$ 500. 5% off no Pix/boleto.",
  keywords: ["artigos religiosos", "imagens sacras", "velas", "terços", "crucifixos", "adornos", "atacado religioso", "casa da mae", "aparecida"],
  authors: [{ name: "Casa da Mãe" }],
  creator: "Casa da Mãe",
  publisher: "Casa da Mãe",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.casadamae.com.br",
    siteName: "Casa da Mãe",
    title: "Casa da Mãe — Artigos Religiosos | Atacado e Varejo",
    description: "Mais de 20 anos de tradição em artigos religiosos. Imagens, velas, terços, crucifixos e adornos. Atacado e varejo.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa da Mãe - Artigos Religiosos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa da Mãe — Artigos Religiosos",
    description: "Mais de 20 anos de tradição em artigos religiosos.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${marcellus.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.casadamae.com.br" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-32 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}