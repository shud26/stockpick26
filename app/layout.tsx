import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stockpick26.com"),
  title: "StockPick26 — 모멘텀 순위 대시보드",
  description:
    "가속 듀얼 모멘텀 전략의 계산 결과와 국내 ETF·대형주 모멘텀 순위를 매일 자동 기록하는 대시보드. 페이퍼 봇의 운용 일지를 그대로 공개합니다.",
  openGraph: {
    title: "StockPick26 — 모멘텀 순위 대시보드",
    description:
      "가속 듀얼 모멘텀 순위와 페이퍼 운용 기록을 매일 자동 갱신합니다.",
    type: "website",
    url: "https://stockpick26.com",
    siteName: "StockPick26",
  },
  alternates: { canonical: "https://stockpick26.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <nav className="nav">
          <div className="wrap" style={{ display: "flex", alignItems: "center", gap: 22, width: "100%" }}>
            <Link href="/" className="brand">
              Stock<span>Pick26</span>
            </Link>
            <Link href="/" className="item">대시보드</Link>
            <Link href="/method" className="item">방법론</Link>
            <Link href="/backtest" className="item">백테스트</Link>
            <Link href="/cost" className="item">비용</Link>
            <Link href="/log" className="item">운용 일지</Link>
            <Link href="/glossary" className="item">용어집</Link>
            <Link href="/about" className="item">소개</Link>
          </div>
        </nav>
        <div className="wrap" style={{ paddingTop: 10 }}>
          <p className="muted" style={{ fontSize: 12 }}>
            본 사이트는 공개 전략의 자동 계산 기록이며, 투자 자문이나 종목 추천이 아닙니다.
          </p>
        </div>
        {children}
        <footer className="footer">
          <div className="wrap" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <span>StockPick26 — 자동화 봇의 모멘텀 관찰 기록</span>
            <Link href="/about">소개·면책</Link>
            <Link href="/privacy">개인정보처리방침</Link>
            <span>본 사이트의 모든 정보는 투자 권유가 아닙니다.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
