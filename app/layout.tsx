import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noumtech - Agence Digitale Innovante",
  description:
    "Noumtech est une agence digitale en Guinée, spécialisée dans la création de sites web et d&apos;applications. Nous offrons des solutions sur mesure pour booster votre présence en ligne et accélérer votre transformation numérique. 🚀",
  icons: {
    icon: "/favicon.ico", // Chemin vers votre favicon
  },
  keywords: [
    "Noumtech",
    "développement de logiciels",
    "création de sites web",
    "marketing digital",
    "consultation technologique",
    "transformation numérique",
    "Guinée",
    "solutions technologiques",
    "innovation numérique",
  ],
  openGraph: {
    title: "Noumtech - Agence Digitale Innovante",
    description:
      "Noumtech est une agence digitale en Guinée, spécialisée dans la création de sites web et d&apos;applications. Nous offrons des solutions sur mesure pour booster votre présence en ligne et accélérer votre transformation numérique. 🚀",
    type: "website",
    url: "https://www.noumtech.com", // Remplacez par l'URL de votre site
    images: [
      {
        url: "/logo/logo-noumtech.png", // Remplacez par l'URL de votre image OpenGraph
        width: 1200,
        height: 630,
        alt: "Noumtech - Agence Digitale Innovante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noumtech - Agence Digitale Innovante",
    description:
      "Noumtech est une agence digitale en Guinée, spécialisée dans la création de sites web et d&apos;applications. Nous offrons des solutions sur mesure pour booster votre présence en ligne et accélérer votre transformation numérique. 🚀",

    images: ["logo/logo-noumtech.png"], // Remplacez par l'URL de votre image Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
