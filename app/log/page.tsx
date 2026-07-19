import { getLog } from "@/lib/momentum";

export const metadata = {
  title: "운용 일지 — 페이퍼 봇 판정 기록 | StockPick26",
  description:
    "가속 듀얼 모멘텀 봇의 일별 판정과 보유 자산, 순위 변동 요약. 사후 편집 없이 판정이 나온 시점 그대로 쌓이는 전방위 기록입니다.",
};

const KR_NAME: Record<string, string> = {
  NASDAQ100: "나스닥100",
  KOSPI200: "코스피200",
  BOND: "국고채10년",
  CASH: "현금",
};

export default function LogPage() {
  const log = getLog();
  return (
    <main className="wrap" style={{ paddingTop: 34, maxWidth: 760 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>운용 일지</h1>
      <p className="muted" style={{ fontSize: 14, marginTop: 6, lineHeight: 1.8 }}>
        페이퍼 봇이 매일 남기는 판정 기록입니다. 사후 수정 없이 그날 그대로 쌓이며,
        판정이 바뀐 날이 곧 리밸런싱한 날입니다.
      </p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        {log.map((e) => (
          <div key={e.date} className="card" style={{ padding: "14px 18px" }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
              <span className="num muted" style={{ fontSize: 13 }}>{e.date}</span>
              <span style={{ fontWeight: 700 }}>판정 {KR_NAME[e.signal] ?? e.signal}</span>
              <span className="muted" style={{ fontSize: 13 }}>보유 {KR_NAME[e.held] ?? e.held}</span>
              <span className="muted num" style={{ fontSize: 13 }}>
                {(["NASDAQ100", "KOSPI200"] as const)
                  .map((k) => {
                    const v = e.scores?.[k];
                    return v !== undefined ? `${KR_NAME[k]} ${v >= 0 ? "+" : ""}${v.toFixed(1)}%` : null;
                  })
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </div>
            {"note" in e && (e as { note?: string }).note && (
              <p className="muted" style={{ fontSize: 14, margin: "8px 0 0", lineHeight: 1.7 }}>
                {(e as { note?: string }).note}
              </p>
            )}
          </div>
        ))}
      </div>
      {log.length < 5 && (
        <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>
          일지는 2026년 7월부터 매일 쌓입니다. 기록이 짧은 이유는 사이트를 이 시점에
          리뉴얼했기 때문이고, 이전 기록을 소급 생성하지 않습니다.
        </p>
      )}
    </main>
  );
}
