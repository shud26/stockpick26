import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StockPick26 — 매일 시황 분석 & 종목 추천",
  description: "AI가 매일 경제뉴스를 분석해 국내·미국 시황과 종목 추천을 정리합니다.",
  openGraph: {
    title: "StockPick26 — 매일 시황 분석 & 종목 추천",
    description: "AI가 매일 경제뉴스를 분석해 국내·미국 시황과 종목 추천을 정리합니다.",
    type: "website",
    url: "https://stockpick26.com",
    siteName: "StockPick26",
  },
  alternates: {
    canonical: "https://stockpick26.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0, background: '#fff', color: '#111', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
