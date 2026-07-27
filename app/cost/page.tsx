import Link from "next/link";

export const metadata = {
  title: "백테스트에 없는 비용, 실제로 재봤습니다 | StockPick26",
  description:
    "백테스트 CAGR 19.2%에는 매매 비용이 빠져 있습니다. 실제 주문을 내서 왕복 비용을 재봤고, 한 번의 왕복으로는 비용을 잴 수 없다는 것을 배웠습니다. 대신 호가 단위로 하한을 잡고 교체 48회에 대입해 CAGR 손실을 계산했습니다.",
};

const ROWS = [
  { bp: 5, keep: 97.63, mult: 15.88, cagr: 18.87, loss: 0.33 },
  { bp: 10, keep: 95.31, mult: 15.51, cagr: 18.69, loss: 0.51 },
  { bp: 20, keep: 90.84, mult: 14.78, cagr: 18.33, loss: 0.87 },
  { bp: 30, keep: 86.57, mult: 14.08, cagr: 17.98, loss: 1.22 },
  { bp: 50, keep: 78.62, mult: 12.79, cagr: 17.27, loss: 1.93 },
];

function DragChart() {
  const W = 680, H = 220, padL = 46, padR = 14, padT = 18, padB = 32;
  const max = 2.0;
  const x = (i: number) => padL + (i / (ROWS.length - 1)) * (W - padL - padR);
  const y = (v: number) => padT + (1 - v / max) * (H - padT - padB);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }} role="img"
      aria-label="왕복 비용이 커질수록 연 CAGR 손실이 늘어나는 그래프">
      {[0, 0.5, 1.0, 1.5, 2.0].map((g) => (
        <g key={g}>
          <line x1={padL} y1={y(g)} x2={W - padR} y2={y(g)} stroke="#232838" strokeWidth="1" />
          <text x={padL - 8} y={y(g) + 4} textAnchor="end" fontSize="11" fill="#8b93a7">{g.toFixed(1)}</text>
        </g>
      ))}
      <polyline
        points={ROWS.map((r, i) => `${x(i)},${y(r.loss)}`).join(" ")}
        fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      {ROWS.map((r, i) => (
        <g key={r.bp}>
          <circle cx={x(i)} cy={y(r.loss)} r="4" fill="#60a5fa" />
          <text x={x(i)} y={H - 10} textAnchor="middle" fontSize="11" fill="#8b93a7">{r.bp}bp</text>
        </g>
      ))}
      <text x={padL} y={12} fontSize="11" fill="#8b93a7">연 CAGR 손실(%p)</text>
    </svg>
  );
}

export default function CostPage() {
  return (
    <main className="wrap prose" style={{ paddingTop: 34, maxWidth: 760 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>
        백테스트에 없는 비용, 실제로 재봤습니다
      </h1>
      <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
        재보려다 못 쟀고, 왜 못 쟀는지가 이 글의 절반입니다.
      </p>

      <img src="/images/cost-scale.png" alt="동전 하나와 동전 더미를 저울에 올려 비교하는 그림"
        style={{ width: "100%", maxWidth: 420, display: "block", margin: "22px auto", borderRadius: 10 }} />

      <p>
        <Link href="/backtest">백테스트 페이지</Link>에서 이 전략의 16년 CAGR은 19.2%로 나옵니다.
        그리고 같은 페이지에 이런 문장이 있습니다. &ldquo;첫째, 비용이 없습니다.&rdquo; 교체
        48회의 수수료도, 호가 슬리피지도, 세금도 전부 빠져 있다는 뜻입니다.
      </p>
      <p>
        경고만 써두고 넘어가는 건 성의가 없다고 생각했습니다. 그래서 실제로 재보기로 했습니다.
      </p>

      <h2>1주로 왕복 주문을 냈습니다</h2>
      <p>
        증권사 API로 KODEX 200을 1주 사고 곧바로 되팔았습니다. 두 번 했습니다.
      </p>
      <div className="formula" style={{ textAlign: "left", lineHeight: 1.9 }}>
        7/15 &nbsp; 매수 117,690 → 매도 117,765 &nbsp;&nbsp; <strong style={{ color: "var(--up)" }}>+75원</strong><br />
        7/23 &nbsp; 매수 113,055 → 매도 112,980 &nbsp;&nbsp; <strong style={{ color: "var(--down)" }}>-75원</strong>
      </div>
      <p>
        한 번은 75원을 잃었고 한 번은 75원을 벌었습니다. 그리고 체결 내역의 수수료 항목과
        세금 항목은 둘 다 0으로 돌아왔습니다.
      </p>

      <h2>여기서 배운 것</h2>

      <img src="/images/cost-ruler.png" alt="흔들리는 물체를 캘리퍼로 재려는 그림"
        style={{ width: "100%", maxWidth: 420, display: "block", margin: "22px auto", borderRadius: 10 }} />

      <p>
        <strong>한 번의 왕복으로는 비용을 잴 수 없습니다.</strong> 사고 파는 1분 사이에 가격
        자체가 움직이기 때문입니다. 제가 측정한 75원 안에는 호가 차이(진짜 비용)와 그 사이의
        가격 변동(비용이 아님)이 섞여 있고, 둘을 분리할 방법이 없습니다.
      </p>
      <p>
        두 번의 부호가 정반대로 나온 것이 그 증거입니다. 만약 75원이 순수한 비용이었다면 두 번
        다 마이너스여야 합니다. 표본 2개로 평균을 내면 0원이라는 엉뚱한 결론이 나오고, 표본
        하나만 골라 쓰면 원하는 답을 고르는 셈이 됩니다.
      </p>
      <p>
        제대로 재려면 같은 시각의 매수 호가와 매도 호가를 동시에 기록해야 합니다. 체결가만으로는
        안 됩니다. 지금 봇은 호가창을 저장하지 않아서, 이건 다음 과제로 남겼습니다.
      </p>

      <h2>대신 하한선은 잡을 수 있습니다</h2>
      <p>
        측정이 안 되면 범위라도 잡는 게 낫습니다. 국내 ETF의 호가 단위는 가격대와 무관하게
        5원입니다. 즉 사자와 팔자가 가장 가깝게 붙어 있을 때조차 왕복하면 최소 5원은 손해입니다.
      </p>
      <div className="formula">
        5원 ÷ 113,055원 = 0.44bp (0.0044%)
      </div>
      <p>
        이게 이론적 하한입니다. 실제로는 호가가 더 벌어져 있을 때 체결되고, 큰 금액이면 여러
        호가를 먹고 올라가므로 이보다 큽니다. 제가 관측한 75원은 6.63bp였는데, 앞서 말했듯
        여기엔 가격 변동이 섞여 있어 비용이라고 단정할 수 없습니다.
      </p>

      <h2>그래서 수익률에 얼마나 영향을 주나</h2>
      <p>
        비용을 정확히 모르니, 여러 가정을 넣고 결과가 얼마나 달라지는지 보는 편이 낫습니다.
        백테스트 16년 동안 자산 교체는 <strong>48회</strong>, 연 3회입니다. 교체 한 번을
        왕복 한 번으로 보고 계산했습니다.
      </p>

      <div className="card" style={{ padding: 16, margin: "18px 0" }}>
        <DragChart />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, margin: "14px 0" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)", textAlign: "right" }}>
            <th style={{ textAlign: "left", padding: "8px 4px" }}>왕복 비용</th>
            <th style={{ padding: "8px 4px" }}>16년 후 잔존</th>
            <th style={{ padding: "8px 4px" }}>최종 배수</th>
            <th style={{ padding: "8px 4px" }}>CAGR</th>
            <th style={{ padding: "8px 4px" }}>연 손실</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.bp} style={{ borderBottom: "1px solid var(--border)", textAlign: "right" }}>
              <td style={{ textAlign: "left", padding: "8px 4px" }}>{r.bp}bp</td>
              <td style={{ padding: "8px 4px" }}>{r.keep.toFixed(2)}%</td>
              <td style={{ padding: "8px 4px" }}>{r.mult.toFixed(2)}배</td>
              <td style={{ padding: "8px 4px" }}>{r.cagr.toFixed(2)}%</td>
              <td style={{ padding: "8px 4px", color: "var(--down)" }}>-{r.loss.toFixed(2)}%p</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        비용을 후하게 20bp로 잡아도 CAGR은 19.2%에서 18.33%로, 연 0.87%p 줄어드는 데
        그칩니다. 생각보다 작습니다.
      </p>
      <p>
        이유는 단순합니다. <strong>이 전략이 거래를 거의 안 하기 때문입니다.</strong> 16년에
        48번, 연 3번입니다. 데이트레이딩처럼 하루에 몇 번씩 돌리면 같은 비용이 수익률을
        통째로 잡아먹지만, 연 3회짜리 회전율에서는 비용이 주인공이 아닙니다.
      </p>

      <h2>진짜 큰 비용은 따로 있습니다</h2>
      <p>
        여기까지가 매매 비용이고, 세금은 별개입니다. 국내 상장 해외지수 ETF의 매매차익에는
        배당소득세 15.4%가 붙습니다. 위 표에서 가장 나쁜 경우가 16년 누적 21% 손실인데,
        세금은 이익이 날 때마다 그 15.4%를 떼어갑니다. 자릿수가 다릅니다.
      </p>
      <p>
        다만 이건 계좌 종류에 따라 크게 달라집니다. 연금저축이나 ISA 같은 절세 계좌에서는
        과세 시점과 세율이 달라지므로, 하나의 숫자로 못 박기보다는 각자 조건에 맞춰
        따져봐야 하는 영역입니다. 저는 여기에 대해 자신 있게 계산할 만큼 알지 못하고,
        아는 척하지 않겠습니다.
      </p>

      <h2>정리</h2>
      <p>
        재보려다 못 쟀습니다. 한 번의 왕복에는 비용과 가격 변동이 섞여 있어서 분리가 안 됩니다.
        대신 호가 단위로 하한을 잡고, 넉넉한 가정까지 넣어 범위를 계산했습니다. 이 전략의
        회전율에서는 매매 비용이 CAGR을 연 0.3%p에서 1%p 정도 깎습니다. 무시할 정도는 아니지만
        전략의 성패를 가르지도 않습니다.
      </p>
      <p>
        <Link href="/backtest">백테스트 페이지</Link>의 &ldquo;비용이 없습니다&rdquo;라는
        경고는 그대로 둡니다. 이 글은 그 경고가 얼마나 큰 경고인지를 숫자로 옮겨놓은 것이고,
        정확한 측정은 호가창을 기록하기 시작한 다음에 다시 쓰겠습니다.
      </p>

      <p className="muted" style={{ fontSize: 13, marginTop: 26, lineHeight: 1.7 }}>
        이 페이지는 계산 방식과 측정 기록을 공개하는 문서이며, 특정 종목이나 매매 시점에 대한
        의견이 아닙니다. 과거 성과는 미래 수익을 보장하지 않습니다. 판단과 책임은 각자에게
        있습니다.
      </p>
    </main>
  );
}
