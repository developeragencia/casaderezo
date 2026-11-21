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
  metadataBase: new URL("https://casadorezo.com.br"),
  title: {
    default: "Casa de Rezo — Artigos Sacros & Religiosos | Atacado e Varejo",
    template: "%s | Casa de Rezo",
  },
  description: "Casa de Rezo - Mais de 20 anos de tradição em artigos religiosos católicos. Imagens sacras, velas, terços, crucifixos, adornos e artigos litúrgicos. Atacado e varejo. 5% off no Pix.",
  keywords: ["artigos religiosos", "imagens sacras", "velas", "terços", "crucifixos", "adornos", "atacado religioso", "casa de rezo", "liturgia católica"],
  authors: [{ name: "Casa de Rezo" }],
  creator: "Casa de Rezo",
  publisher: "Casa de Rezo",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://casadorezo.com.br",
    siteName: "Casa de Rezo",
    title: "Casa de Rezo — Artigos Sacros & Religiosos | Atacado e Varejo",
    description: "Mais de 20 anos de tradição em artigos religiosos. Imagens sacras, velas, terços, crucifixos e adornos. Atacado e varejo.",
    images: [
      {
        url: "/images/banners/nossa-senhora.jpg",
        width: 1200,
        height: 630,
        alt: "Casa de Rezo - Artigos Sacros & Religiosos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa de Rezo — Artigos Sacros & Religiosos",
    description: "Tradição, fé e nobreza em artigos religiosos e sacros.",
    images: ["/images/banners/nossa-senhora.jpg"],
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
        <link rel="dns-prefetch" href="https://casadorezo.com.br" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-[104px] md:pt-[148px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}