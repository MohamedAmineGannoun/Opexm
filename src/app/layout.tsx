import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Opexm — Agence de développement web & mobile",
    template: "%s · Opexm",
  },
  description:
    "Opexm conçoit et développe des applications web et mobiles sur mesure : sites vitrines, e-commerce, plateformes SaaS, apps iOS & Android.",
  keywords: [
    "agence web",
    "développement mobile",
    "application mobile",
    "site web",
    "Next.js",
    "React Native",
    "e-commerce",
    "SaaS",
  ],
  openGraph: {
    title: "Opexm — Agence de développement web & mobile",
    description:
      "Applications web et mobiles sur mesure, conçues avec soin, livrées avec exigence.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1020] text-[#e6e9f2]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
