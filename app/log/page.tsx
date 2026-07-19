import { getLog } from "@/lib/momentum";

export const metadata = {
  title: "운용 일지 — 페이퍼 봇 신호 기록 | StockPick26",
  description:
    "가속 듀얼 모멘텀 봇의 일별 신호와 보유 자산 기록. 사후 편집 없이 신호가 나온 시점 그대로 쌓이는 전방위 기록입니다.",
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
        페이퍼 봇이 매일 기록하는 신호 이력입니다. 사후 수정 없이 신호가 나온 날
        그대로 쌓입니다. 신호가 바뀐 날이 곧 리밸런싱한 날입니다.
      </p>
      <div className="card" style={{ padding: "6px 10px", marginTop: 20, overflowX: "auto" }}>
        <table className="rank">
          <thead>
            <tr>
              <th>날짜</th>
              <th>신호</th>
              <th>보유</th>
              <th>나스닥100</th>
              <th>코스피200</th>
            </tr>
          </thead>
          <tbody>
            {log.map((e) => (
              <tr key={e.date}>
                <td className="num">{e.date}</td>
                <td style={{ fontWeight: 700 }}>{KR_NAME[e.signal] ?? e.signal}</td>
                <td>{KR_NAME[e.held] ?? e.held}</td>
                {(["NASDAQ100", "KOSPI200"] as const).map((k) => {
                  const v = e.scores?.[k];
                  return (
                    <td key={k} className={`num ${v !== undefined && v >= 0 ? "up" : "down"}`}>
                      {v !== undefined ? `${v >= 0 ? "+" : ""}${v.toFixed(1)}%` : "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
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
