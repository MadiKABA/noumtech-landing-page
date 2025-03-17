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
  title: "Noumtech - Architectes de votre Succès Numérique",
  description:
    "Noumtech, basé en Guinée, est votre partenaire pour la transformation numérique. Nous offrons des solutions innovantes en développement de logiciels, création de sites web, marketing digital et consultation technologique. Découvrez notre mission et nos services.",
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
    title: "Noumtech - Architectes de votre Succès Numérique",
    description:
      "Noumtech, basé en Guinée, est votre partenaire pour la transformation numérique. Nous offrons des solutions innovantes en développement de logiciels, création de sites web, marketing digital et consultation technologique. Découvrez notre mission et nos services.",
    type: "website",
    url: "https://www.noumtech.com", // Remplacez par l'URL de votre site
    images: [
      {
        url: "https://www.noumtech.com/logo/logo-noumtech.png", // Remplacez par l'URL de votre image OpenGraph
        width: 1200,
        height: 630,
        alt: "Noumtech - Architectes de votre Succès Numérique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noumtech - Architectes de votre Succès Numérique",
    description:
      "Noumtech, basé en Guinée, est votre partenaire pour la transformation numérique. Nous offrons des solutions innovantes en développement de logiciels, création de sites web, marketing digital et consultation technologique. Découvrez notre mission et nos services.",
    images: ["https://www.noumtech.com/logo/logo-noumtech.png"], // Remplacez par l'URL de votre image Twitter
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
