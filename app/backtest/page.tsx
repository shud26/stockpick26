import fs from "fs";
import path from "path";
import Link from "next/link";

export const metadata = {
  title: "16년 백테스트 — 이 전략은 나스닥 몰빵을 이기지 못했습니다 | StockPick26",
  description:
    "가속 듀얼 모멘텀 2010~2026 백테스트 전체 공개. CAGR 19.2% vs 나스닥100 바이앤홀드 19.8% — 수익률로는 졌습니다. 그런데도 이 전략을 페이퍼 운용하는 이유(MDD -21% vs -33%)와, 백테스트가 말해주지 않는 비용·환율·과최적화 한계까지 정직하게 씁니다.",
};

interface BT {
  period: [string, string];
  months: number;
  dates: string[];
  curves: Record<string, number[]>;
  stats: Record<string, { cagr: number; mdd: number; vol: number; sharpe: number; mult: number }>;
  holdCounts: Record<string, number>;
  switches: number;
}

function getBT(): BT {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "backtest.json"), "utf-8"));
}

const LABEL: Record<string, string> = {
  ADM: "가속 듀얼 모멘텀",
  NASDAQ100: "나스닥100 바이앤홀드",
  KOSPI200: "코스피200 바이앤홀드",
};
const COLOR: Record<string, string> = {
  ADM: "#60a5fa",
  NASDAQ100: "#4ade80",
  KOSPI200: "#f87171",
};

function Chart({ bt }: { bt: BT }) {
  const W = 680, H = 300, pad = 10;
  const keys = ["ADM", "NASDAQ100", "KOSPI200"];
  const all = keys.flatMap((k) => bt.curves[k]);
  const lmin = Math.log10(Math.min(...all)), lmax = Math.log10(Math.max(...all));
  const n = bt.dates.length;
  const x = (i: number) => pad + (i / (n - 1)) * (W - pad * 2);
  const y = (v: number) => pad + (1 - (Math.log10(v) - lmin) / (lmax - lmin)) * (H - pad * 2);
  return (
    <div className="card" style={{ padding: "16px 18px 10px" }}>
      <div className="muted" style={{ fontSize: 13, marginBottom: 4 }}>
        투자 원금 1을 굴렸을 때의 성장 (로그 눈금 · {bt.period[0]} ~ {bt.period[1]})
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }} role="img"
        aria-label="가속 듀얼 모멘텀과 벤치마크의 16년 자산곡선 비교">
        {[1, 2, 4, 8, 16].map((g) => (
          <g key={g}>
            <line x1={pad} x2={W - pad} y1={y(g)} y2={y(g)} stroke="#232838" strokeWidth="1" />
            <text x={W - pad - 2} y={y(g) - 4} textAnchor="end" fontSize="11" fill="#8b93a7">{g}x</text>
          </g>
        ))}
        {keys.map((k) => (
          <path key={k} fill="none" stroke={COLOR[k]} strokeWidth={k === "ADM" ? 2.6 : 1.6}
            opacity={k === "ADM" ? 1 : 0.85}
            d={bt.curves[k].map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ")} />
        ))}
      </svg>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13, margin: "8px 0 6px" }}>
        {keys.map((k) => (
          <span key={k}><span style={{ color: COLOR[k] }}>■</span> {LABEL[k]}</span>
        ))}
      </div>
    </div>
  );
}

export default function BacktestPage() {
  const bt = getBT();
  const s = bt.stats;
  const total = Object.values(bt.holdCounts).reduce((a, b) => a + b, 0);
  const pctHold = (k: string) => Math.round(((bt.holdCounts[k] ?? 0) / total) * 100);

  return (
    <main className="wrap prose" style={{ paddingTop: 34, maxWidth: 760 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.4 }}>
        16년 백테스트 — 이 전략은 나스닥 몰빵을 이기지 못했습니다
      </h1>
      <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
        방법론 시리즈 · 데이터 {bt.period[0]} ~ {bt.period[1]} ({bt.months}개월)
      </p>

      <p style={{ marginTop: 22 }}>
        결론부터 쓰겠습니다. 이 사이트가 매일 계산하는 가속 듀얼 모멘텀 전략을 2010년부터
        16년치 데이터로 백테스트한 결과, 연복리 수익률은 <strong>+19.2%</strong>였습니다.
        같은 기간 나스닥100을 그냥 사서 버틴 결과는 <strong>+19.8%</strong>. 졌습니다.
        위험 대비 수익을 재는 샤프지수로도 0.90 대 1.14로 명확히 뒤집니다.
      </p>
      <p>
        전략 사이트가 첫 백테스트 글에서 &ldquo;우리 전략이 벤치마크에 졌다&rdquo;고 쓰는 게
        이상해 보일 수 있지만, 이 숫자를 숨기면 이 사이트의 존재 이유가 없어집니다. 그리고
        뒤에서 보겠지만, 제가 이 전략을 그래도 페이퍼로 돌리는 이유 역시 이 표 안에 있습니다.
      </p>

      <h2>결과 전체</h2>
      <Chart bt={bt} />
      <div className="card" style={{ padding: "6px 10px", marginTop: 14, overflowX: "auto" }}>
        <table className="rank">
          <thead>
            <tr><th>전략</th><th>연복리</th><th>최대낙폭</th><th>변동성</th><th>샤프</th><th>최종배수</th></tr>
          </thead>
          <tbody>
            {(["ADM", "NASDAQ100", "KOSPI200"] as const).map((k) => (
              <tr key={k} style={k === "ADM" ? { fontWeight: 700 } : undefined}>
                <td>{LABEL[k]}</td>
                <td className={s[k].cagr >= 0 ? "up" : "down"}>{s[k].cagr >= 0 ? "+" : ""}{s[k].cagr}%</td>
                <td className="down">{s[k].mdd}%</td>
                <td>{s[k].vol}%</td>
                <td>{s[k].sharpe.toFixed(2)}</td>
                <td>{s[k].mult.toFixed(2)}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>
        참고: 두 자산을 절반씩 들고 리밸런싱만 하는 50:50 정적 배분은 연복리 +16.4%,
        최대낙폭 -30.2%였습니다. 규칙은 <Link href="/method" style={{ color: "var(--accent)" }}>방법론</Link> 참고.
      </p>

      <h2>그런데 왜 이 전략인가 — 낙폭의 문제</h2>
      <p>
        표에서 수익률 대신 <strong>최대낙폭(MDD)</strong> 열을 보면 이야기가 달라집니다.
        나스닥 몰빵의 16년은 <strong>-33%</strong>짜리 낙폭을 포함한 여정이었습니다. 1억이
        6,700만 원이 되는 구간을 지나야 +19.8%가 완성된다는 뜻입니다. 백테스트 차트에서는
        이 구간이 잠깐의 움푹함이지만, 실제로 겪으면 몇 달에서 몇 년짜리 고통입니다. 그리고
        대부분의 사람은 바닥 근처에서 버티지 못하고 팝니다 — 저도 그랬습니다. 백테스트의
        바이앤홀드 수익률은 &ldquo;끝까지 안 판 사람&rdquo;만 가져가는 숫자입니다.
      </p>
      <p>
        가속 듀얼 모멘텀의 낙폭은 <strong>-21.3%</strong>였습니다. 수익률 0.6%포인트를
        내주고 최악의 구간을 3분의 1쯤 얕게 만든 거래입니다. 코스피200 몰빵(-34.3%,
        연복리 +12.2%)과 비교하면 수익과 방어 양쪽에서 압도했고, 50:50 정적 배분과
        비교해도 수익은 높고 낙폭은 얕았습니다. 요약하면 이 전략은{" "}
        <strong>&ldquo;최고의 수익&rdquo;이 아니라 &ldquo;버틸 수 있는 수익&rdquo;</strong>을
        노리는 규칙입니다.
      </p>

      <h2>전략은 16년간 무엇을 들고 있었나</h2>
      <p>
        {bt.months}개월 중 나스닥100 보유가 {bt.holdCounts["NASDAQ100"]}개월({pctHold("NASDAQ100")}%),
        코스피200이 {bt.holdCounts["KOSPI200"]}개월({pctHold("KOSPI200")}%), 둘 다 하락
        추세라 현금으로 피신한 기간이 {bt.holdCounts["CASH"]}개월({pctHold("CASH")}%)입니다.
        3분의 2를 나스닥에 얹혀 지낸 셈이니, 성과의 큰 몫은 미국 성장주의 16년에서 왔음을
        인정해야 합니다. 보유 교체는 총 {bt.switches}회 — 평균 연 3회 정도로, 잦은 매매
        전략은 아닙니다.
      </p>
      <p>
        흥미로운 건 최근입니다. 전략은 2025년 여름부터 지금까지 줄곧 코스피200을 보유하고
        있습니다. 나스닥이 아니라 코스피가 더 강한 드문 구간을 규칙이 잡아낸 것인데, 이런
        구간이 앞으로도 반복된다면 몰빵 대비 이 전략의 존재 가치가 커지고, 반복되지 않는다면
        그냥 나스닥을 사는 게 나았다는 결론이 될 겁니다. 그걸 확인하는 것이 이 사이트의{" "}
        <Link href="/log" style={{ color: "var(--accent)" }}>운용 일지</Link>입니다.
      </p>

      <h2>이 백테스트가 말해주지 않는 것</h2>
      <p>
        <strong>첫째, 비용이 없습니다.</strong> 교체 {bt.switches}회의 매매 수수료, 호가
        슬리피지, 해외 ETF 매매차익 과세(15.4% 배당소득세 또는 양도세)가 전부 빠져 있습니다.
        실전 수익률은 표의 숫자보다 반드시 낮습니다.
      </p>
      <p>
        <strong>둘째, 환율이 다릅니다.</strong> 백테스트의 나스닥100은 달러 기준(QQQ)인데,
        실제 운용 대상은 원화로 거래되는 국내 상장 ETF입니다. 원달러 환율이 움직이면 두
        수익률은 벌어집니다. 지난 16년은 대체로 환율이 미국 자산 보유자에게 유리했던
        기간이라, 이 역시 성과를 부풀린 쪽으로 작용했을 가능성이 있습니다.
      </p>
      <p>
        <strong>셋째, 과최적화 위험입니다.</strong> 1·3·6개월이라는 룩백은 제가 찾은 게
        아니라 해외에서 공개된 조합을 가져온 것입니다. 그래도 &ldquo;과거에 잘 맞았던
        조합이 살아남아 유명해졌다&rdquo;는 생존 편향에서 자유롭지 않습니다. 룩백을 조금만
        바꿔도 결과는 달라지며, 미래에 이 조합이 최선일 근거는 없습니다.
      </p>
      <p>
        <strong>넷째, 16년은 특정한 시대였습니다.</strong> 이 기간은 저금리와 미국 기술주의
        초장기 강세장을 포함합니다. 다른 체제(장기 횡보, 고금리, 신흥국 주도)에서 이 전략이
        같은 성격을 보일지는 백테스트가 답할 수 없는 질문입니다.
      </p>

      <h2>그래서 페이퍼로 돌립니다</h2>
      <p>
        위 한계들 때문에 저는 이 전략에 실제 돈을 넣기 전에, 판정이 나온 시점 그대로
        기록이 박제되는 페이퍼 운용을 먼저 돌리고 있습니다. 백테스트는 과거를 소급해 계산한
        가설이고, <Link href="/log" style={{ color: "var(--accent)" }}>운용 일지</Link>는
        앞으로 걸어가며 쌓는 검증입니다. 이 글의 숫자가 미래에도 성립하는지를 확인하는
        가장 정직한 방법은 시간을 들여 기록하는 것뿐이라고 생각합니다.
      </p>

      <div className="disclaimer" style={{ margin: "30px 0" }}>
        본 글은 공개된 전략 규칙의 과거 데이터 검증 결과를 기록한 교육 자료입니다. 백테스트
        성과는 미래 수익을 보장하지 않으며, 거래 비용과 세금이 반영되지 않았습니다. 특정
        상품의 매수·매도 권유가 아니며, 투자 판단과 책임은 투자자 본인에게 있습니다.
      </div>
    </main>
  );
}
