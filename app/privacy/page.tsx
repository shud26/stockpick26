export const metadata = {
  title: "개인정보처리방침 — StockPick26",
};

export default function PrivacyPage() {
  return (
    <main className="wrap prose" style={{ paddingTop: 34, maxWidth: 720 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>개인정보처리방침</h1>
      <p className="muted" style={{ fontSize: 13 }}>최종 업데이트: 2026년 7월 19일</p>
      <p>StockPick26(이하 &ldquo;사이트&rdquo;)은 사용자의 개인정보를 소중히 여기며, 본 방침에 따라 처리합니다.</p>

      <h2>1. 수집하는 정보</h2>
      <p>
        본 사이트는 회원가입 없이 이용 가능하며, 개인식별정보를 직접 수집하지 않습니다.
        다만 Google Analytics 및 Google AdSense를 통해 비식별 방문 통계가 수집될 수 있습니다.
      </p>

      <h2>2. 광고</h2>
      <p>
        본 사이트는 Google AdSense를 사용합니다. Google은 사용자의 관심사에 기반한 광고를
        표시하기 위해 쿠키를 사용할 수 있습니다. Google의 개인정보처리방침은{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>
          policies.google.com/privacy
        </a>
        에서 확인할 수 있습니다.
      </p>

      <h2>3. 쿠키</h2>
      <p>
        본 사이트는 서비스 개선을 위해 쿠키를 사용할 수 있습니다. 브라우저 설정에서 쿠키를
        거부할 수 있으나, 일부 기능이 제한될 수 있습니다.
      </p>

      <h2>4. 면책</h2>
      <p>
        본 사이트의 모든 정보는 공개 전략의 자동 계산 결과를 기록한 참고용 자료로, 투자
        권유가 아닙니다. 투자의 최종 판단과 손익에 대한 책임은 이용자 본인에게 있습니다.
      </p>

      <h2>5. 문의</h2>
      <p>
        개인정보 관련 문의:{" "}
        <a href="mailto:shud26@gmail.com" style={{ color: "var(--accent)" }}>shud26@gmail.com</a>
      </p>
    </main>
  );
}
