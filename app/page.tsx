import Link from "next/link";
import { getMomentum } from "@/lib/momentum";

const KR_NAME: Record<string, string> = {
  NASDAQ100: "나스닥100",
  KOSPI200: "코스피200",
  BOND: "국고채10년",
  CASH: "현금",
};

function Pct({ v }: { v: number | null }) {
  if (v === null) return <span className="muted">-</span>;
  return (
    <span className={`num ${v >= 0 ? "up" : "down"}`}>
      {v >= 0 ? "+" : ""}
      {v.toFixed(1)}%
    </span>
  );
}

export default function Home() {
  const m = getMomentum();
  const s = m.signal;
  const etf = m.table.filter((r) => m.etfNames.includes(r.name));
  const stocks = m.table.filter((r) => !m.etfNames.includes(r.name));

  return (
    <main className="wrap" style={{ paddingTop: 34 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>
        모멘텀 신호 대시보드
      </h1>
      <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
        가속 듀얼 모멘텀(1·3·6개월) 신호를 매일 자동 계산해 기록합니다 · 갱신{" "}
        <span className="num">{m.updated}</span>
      </p>

      {/* 현재 시그널 */}
      <section className="card" style={{ marginTop: 22 }}>
        <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
          ETF 전략 현재 신호 <Link href="/method" style={{ color: "var(--accent)" }}>· 계산 방식</Link>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
          <div style={{ fontSize: 30, fontWeight: 800 }}>
            {KR_NAME[s.signal] ?? s.signal}
          </div>
          <div className="muted" style={{ fontSize: 14 }}>
            {Object.entries(s.scores)
              .map(([k, v]) => `${KR_NAME[k] ?? k} ${v >= 0 ? "+" : ""}${v.toFixed(1)}%`)
              .join(" vs ")}
          </div>
        </div>
        <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>
          두 공격자산의 모멘텀 점수를 비교해 승자를 보유하고, 둘 다 음수면{" "}
          {KR_NAME[s.safe]}로 피신하는 규칙입니다. 페이퍼 봇 현재 보유:{" "}
          <strong style={{ color: "var(--text)" }}>{KR_NAME[s.held] ?? s.held}</strong> —{" "}
          <Link href="/log" style={{ color: "var(--accent)" }}>운용 일지</Link>
        </p>
      </section>

      {/* ETF 순위 */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "34px 0 12px" }}>ETF 모멘텀 순위</h2>
      <div className="card" style={{ padding: "6px 10px", overflowX: "auto" }}>
        <table className="rank">
          <thead>
            <tr>
              <th>자산</th><th>1개월</th><th>3개월</th><th>6개월</th><th>점수</th><th>200일선</th>
            </tr>
          </thead>
          <tbody>
            {etf.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td><Pct v={r.r1} /></td>
                <td><Pct v={r.r3} /></td>
                <td><Pct v={r.r6} /></td>
                <td style={{ fontWeight: 700 }}><Pct v={r.score} /></td>
                <td className={r.aboveMa200 ? "up" : "down"}>{r.aboveMa200 ? "위" : "아래"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 개별주 순위 */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "34px 0 12px" }}>
        코스피 대형주 모멘텀 순위
        <span className="muted" style={{ fontSize: 13, fontWeight: 400, marginLeft: 10 }}>
          점수 양수 + 200일선 위 상위 3개가 관찰 바스켓
        </span>
      </h2>
      <div className="card" style={{ padding: "6px 10px", overflowX: "auto" }}>
        <table className="rank">
          <thead>
            <tr>
              <th>종목</th><th>1개월</th><th>3개월</th><th>6개월</th><th>점수</th><th>200일선</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((r) => (
              <tr key={r.name}>
                <td>
                  {r.name}
                  {m.basket.includes(r.name) && <span className="tag">바스켓</span>}
                </td>
                <td><Pct v={r.r1} /></td>
                <td><Pct v={r.r3} /></td>
                <td><Pct v={r.r6} /></td>
                <td style={{ fontWeight: 700 }}><Pct v={r.score} /></td>
                <td className={r.aboveMa200 ? "up" : "down"}>{r.aboveMa200 ? "위" : "아래"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="disclaimer" style={{ marginTop: 30 }}>
        본 사이트는 공개된 퀀트 전략(가속 듀얼 모멘텀)의 계산 결과를 기록하는 개인
        프로젝트이며, 특정 종목의 매수·매도를 권유하지 않습니다. 모든 수치는 과거
        가격 데이터의 산술적 계산일 뿐 미래 수익을 보장하지 않으며, 투자 판단과
        책임은 투자자 본인에게 있습니다.
      </div>
    </main>
  );
}
