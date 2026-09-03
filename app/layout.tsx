import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://attoisse-mohamed.dev";
const title = "Attoisse Mohamed — Fondateur Ksilog Academy | Data Engineer & Software Engineer";
const description =
  "Portfolio d'Attoisse Mohamed, Fondateur de Ksilog Academy, Data Engineer et Software Engineer à Dakar. Pipelines de données, Machine Learning, ingénierie logicielle et formation tech.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Attoisse Mohamed",
  },
  description,
  keywords: [
    "Attoisse Mohamed",
    "Ksilog Academy",
    "Data Engineer Dakar",
    "Software Engineer Sénégal",
    "Data Science",
    "Machine Learning",
    "Formateur programmation",
    "ISI Dakar",
  ],
  authors: [{ name: "Attoisse Mohamed" }],
  creator: "Attoisse Mohamed",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title,
    description,
    siteName: "Attoisse Mohamed",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
