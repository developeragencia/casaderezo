import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa de Rezo | Artigos Religiosos no Atacado e Varejo",
  description: "Distribuidora e loja de artigos religiosos, imagens sacras, velas, defumadores, terços, guias e oferendas. Atacado com preços direto de fábrica e varejo para todo o Brasil.",
  keywords: "casa de rezo, artigos religiosos, atacado de artigos religiosos, velas 7 dias, imagens sacras, orixás, guias de umbanda, defumadores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
