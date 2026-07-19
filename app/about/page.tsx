export const metadata = {
  title: "소개 — StockPick26",
  description:
    "StockPick26는 가속 듀얼 모멘텀 전략을 자동매매 봇으로 운용하며 그 신호와 기록을 공개하는 개인 프로젝트입니다.",
};

export default function AboutPage() {
  return (
    <main className="wrap prose" style={{ paddingTop: 34, maxWidth: 760 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>소개</h1>

      <h2>이 사이트는 무엇인가</h2>
      <p>
        StockPick26는 공개된 퀀트 전략인 <strong>가속 듀얼 모멘텀</strong>을 자동매매
        봇으로 구현해 페이퍼(모의) 운용하면서, 그 계산 결과와 판정 이력을 매일
        기록하는 개인 프로젝트입니다. 사람이 매일 판단하는 게 아니라 코드가 정해진
        규칙대로 계산하고, 사이트는 그 결과를 그대로 보여줍니다.
      </p>
      <p>
        &ldquo;종목 추천&rdquo; 사이트가 아닙니다. 오히려 반대로 — 추천이라는 행위에서
        사람의 감과 사후 편집을 제거하면 무엇이 남는지를 기록으로 보여주는 실험에
        가깝습니다. 판정은 나온 시점 그대로 박제되고, 틀린 판정도 지우지 않습니다.
      </p>

      <h2>누가 만들었나</h2>
      <p>
        코딩을 배우며 자동화 봇을 만드는 개인 개발자(shud)가 만들었습니다. 트레이딩
        봇, 시장 신호 도구, 개발 기록을 다루는 블로그{" "}
        <a href="https://shud26.com" style={{ color: "var(--accent)" }}>shud26.com</a>과
        코스피 추세 판정 도구{" "}
        <a href="https://ftd.shud26.com" style={{ color: "var(--accent)" }}>FTD 신호기</a>도
        같은 사람이 운영합니다.
      </p>

      <h2>데이터와 갱신</h2>
      <p>
        가격 데이터는 공개 시세 API에서 가져오고, 매일 장 마감 후 봇이 자동으로 계산과
        기록을 갱신합니다. 계산 규칙 전문은{" "}
        <a href="/method" style={{ color: "var(--accent)" }}>방법론</a> 페이지에 있으며,
        운용 이력은 <a href="/log" style={{ color: "var(--accent)" }}>운용 일지</a>에서
        볼 수 있습니다.
      </p>

      <h2>면책 고지</h2>
      <div className="disclaimer">
        본 사이트는 투자 자문업·유사투자자문업 서비스가 아니며, 특정 금융투자상품의
        매수·매도를 권유하지 않습니다. 게시된 모든 수치는 과거 가격 데이터에 대한
        산술적 계산 결과로 미래 수익률을 보장하지 않습니다. 본 사이트의 정보를 근거로
        한 투자 결과에 대해 운영자는 어떠한 책임도 지지 않으며, 모든 투자 판단과
        책임은 투자자 본인에게 있습니다.
      </div>

      <h2>연락처</h2>
      <p>
        문의는 블로그{" "}
        <a href="https://shud26.com/contact" style={{ color: "var(--accent)" }}>
          shud26.com 연락처
        </a>
        로 부탁드립니다.
      </p>
    </main>
  );
}
