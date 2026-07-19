import Link from "next/link";
import { notFound } from "next/navigation";
import { ASSETS, bySlug } from "@/lib/assets";
import { getMomentum, getHistory } from "@/lib/momentum";

export function generateStaticParams() {
  return ASSETS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = bySlug[slug];
  if (!a) return {};
  return {
    title: `${a.name} 모멘텀 현황 — ${a.full} | StockPick26`,
    description: `${a.full}의 1·3·6개월 수익률과 가속 듀얼 모멘텀 점수, 200일 이동평균 위치를 매일 자동 계산해 기록합니다.`,
  };
}

function Spark({ points }: { points: [string, number][] }) {
  if (!points || points.length < 2) return null;
  const vals = points.map((p) => p[1]);
  const min = Math.min(...vals), max = Math.max(...vals);
  const W = 640, H = 160, pad = 8;
  const x = (i: number) => pad + (i / (points.length - 1)) * (W - pad * 2);
  const y = (v: number) => max === min ? H / 2 : pad + (1 - (v - min) / (max - min)) * (H - pad * 2);
  const d = vals.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const upTrend = vals[vals.length - 1] >= vals[0];
  const color = upTrend ? "var(--up)" : "var(--down)";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }} role="img"
      aria-label="최근 1년 주간 종가 추이">
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx={x(points.length - 1)} cy={y(vals[vals.length - 1])} r="4" fill={color} />
    </svg>
  );
}

function Pct({ v }: { v: number | null }) {
  if (v === null || v === undefined) return <span className="muted">-</span>;
  return (
    <span className={`num ${v >= 0 ? "up" : "down"}`}>
      {v >= 0 ? "+" : ""}{v.toFixed(1)}%
    </span>
  );
}

export default async function AssetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = bySlug[slug];
  if (!a) notFound();
  const m = getMomentum();
  const row = m.table.find((r) => r.name === a.name);
  const rank = m.table.findIndex((r) => r.name === a.name) + 1;
  const hist = getHistory()[a.name];

  return (
    <main className="wrap prose" style={{ paddingTop: 34, maxWidth: 760 }}>
      <p className="muted" style={{ fontSize: 13 }}>
        <Link href="/">대시보드</Link> / {a.kind === "ETF" ? "ETF" : "코스피 대형주"}
      </p>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>
        {a.name} <span className="muted" style={{ fontSize: 15, fontWeight: 400 }}>{a.full}</span>
      </h1>

      {row && (
        <div className="card" style={{ marginTop: 18 }}>
          <div className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
            모멘텀 현황 · 전체 {m.table.length}개 중 <strong style={{ color: "var(--text)" }}>{rank}위</strong> · 갱신 {m.updated}
          </div>
          <div style={{ display: "flex", gap: 26, flexWrap: "wrap", fontSize: 14 }}>
            <span>1개월 <Pct v={row.r1} /></span>
            <span>3개월 <Pct v={row.r3} /></span>
            <span>6개월 <Pct v={row.r6} /></span>
            <span>점수 <strong><Pct v={row.score} /></strong></span>
            <span>200일선 <span className={row.aboveMa200 ? "up" : "down"}>{row.aboveMa200 ? "위" : "아래"}</span></span>
          </div>
        </div>
      )}

      {hist && (
        <div className="card" style={{ marginTop: 14, padding: "16px 18px 8px" }}>
          <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>최근 1년 주간 종가 추이</div>
          <Spark points={hist} />
        </div>
      )}

      {a.desc.map((p, i) => (
        <p key={i} style={{ marginTop: i === 0 ? 24 : undefined }}>{p}</p>
      ))}

      <p className="muted" style={{ fontSize: 13 }}>
        모멘텀 점수의 계산 방식은 <Link href="/method" style={{ color: "var(--accent)" }}>방법론</Link>에,
        용어 설명은 <Link href="/glossary" style={{ color: "var(--accent)" }}>용어집</Link>에 있습니다.
      </p>

      <div className="disclaimer" style={{ margin: "26px 0" }}>
        이 페이지는 공개 데이터의 산술적 계산과 자산에 대한 사실 서술만을 담고 있으며,
        해당 종목의 매수·매도를 권유하지 않습니다. 투자 판단과 책임은 투자자 본인에게 있습니다.
      </div>
    </main>
  );
}
