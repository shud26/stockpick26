import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Stock Market Glossary | Learn Stock Terms for Beginners | StockPick26",
  description: "Learn stock market terminology for beginners. Simple explanations of PER, PBR, EPS, ROE, dividends, ETFs, and more. Free stock investing glossary.",
  keywords: "stock glossary, stock terms, PER meaning, PBR meaning, EPS explained, stock investing basics, dividend yield, stock market for beginners",
  openGraph: {
    title: "Stock Market Glossary | Learn Stock Terms | StockPick26",
    description: "Learn stock market terminology for beginners. Simple explanations of investing terms.",
    type: "website",
    url: "https://stockpick26.com",
    locale: "en_US",
    siteName: "StockPick26",
  },
  twitter: {
    card: "summary",
    title: "Stock Market Glossary | StockPick26",
    description: "Learn stock market terminology for beginners.",
  },
  alternates: {
    canonical: "https://stockpick26.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${inter.variable} ${dmMono.variable} antialiased min-h-screen bg-[#0A0A0B] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
