import Link from 'next/link';

export const metadata = {
  title: '개인정보처리방침 — StockPick26',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1rem', color: '#111', textDecoration: 'none' }}>StockPick26</Link>
        </div>
      </header>
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 6rem', fontSize: '0.875rem', color: '#374151', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', marginBottom: '1.5rem' }}>개인정보처리방침</h1>
        <p>최종 업데이트: 2026년 4월 24일</p>
        <p>StockPick26(이하 "사이트")은 사용자의 개인정보를 소중히 여기며, 본 방침에 따라 처리합니다.</p>

        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2rem' }}>1. 수집하는 정보</h2>
        <p>본 사이트는 별도의 회원가입 없이 이용 가능하며, 개인식별정보를 직접 수집하지 않습니다. 다만 Google Analytics 및 Google AdSense를 통해 비식별 방문 통계가 수집될 수 있습니다.</p>

        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2rem' }}>2. 광고</h2>
        <p>본 사이트는 Google AdSense를 사용합니다. Google은 사용자의 관심사에 기반한 광고를 표시하기 위해 쿠키를 사용할 수 있습니다. Google의 개인정보처리방침은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{ color: '#374151' }}>policies.google.com/privacy</a>에서 확인할 수 있습니다.</p>

        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2rem' }}>3. 쿠키</h2>
        <p>본 사이트는 서비스 개선을 위해 쿠키를 사용할 수 있습니다. 브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 기능이 제한될 수 있습니다.</p>

        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2rem' }}>4. 면책</h2>
        <p>본 사이트의 모든 정보는 AI가 생성한 참고용 자료로, 투자 권유가 아닙니다. 투자의 최종 판단과 손익에 대한 책임은 이용자 본인에게 있습니다.</p>

        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2rem' }}>5. 문의</h2>
        <p>개인정보 관련 문의: <a href="mailto:shud26@gmail.com" style={{ color: '#374151' }}>shud26@gmail.com</a></p>
      </main>
    </div>
  );
}
