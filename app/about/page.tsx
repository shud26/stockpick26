import Link from 'next/link';

export const metadata = {
  title: 'About — StockPick26',
  description: 'StockPick26는 AI가 매일 경제뉴스를 분석해 시황과 종목 추천을 정리하는 사이트입니다.',
};

export default function AboutPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1rem', color: '#111', textDecoration: 'none' }}>StockPick26</Link>
          <Link href="/daily" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>Daily Report</Link>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          StockPick26 소개
        </h1>

        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.8, marginBottom: '2rem' }}>
          StockPick26는 매일 국내외 경제뉴스를 AI로 분석해 시황 요약과 종목 추천을 제공하는 사이트입니다.
          복잡한 뉴스를 읽을 시간이 없는 분들을 위해, 핵심만 골라 매일 아침 리포트로 정리합니다.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>어떻게 만들어지나요?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {[
            ['📰 뉴스 수집', '매일 오전 연합뉴스, 한국경제, 매일경제, BBC, MarketWatch, Decrypt 등 국내외 주요 매체의 경제 뉴스를 자동으로 수집합니다.'],
            ['🤖 AI 분석', 'Claude AI가 수집된 뉴스를 읽고 시장 흐름을 파악해 시황 요약, 핵심 테마, 종목 추천을 생성합니다.'],
            ['📊 리포트 발행', '매일 오전 9시, 분석 결과가 자동으로 사이트에 업로드됩니다.'],
          ].map(([title, desc]) => (
            <div key={title as string} style={{ padding: '1.25rem', background: '#f9fafb', borderRadius: 8, border: '1px solid #f3f4f6' }}>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111', marginBottom: '0.4rem' }}>{title}</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>앞으로 계획</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          {[
            '✅ 매일 AI 시황 리포트 (현재 운영 중)',
            '🔧 주식 자동매매 봇 개발 (KIS API 연동)',
            '📈 봇 수익 현황 실시간 공개',
            '🔔 텔레그램 알림 구독',
            '📚 종목 추천 성과 히스토리 추적',
          ].map(item => (
            <p key={item} style={{ fontSize: '0.875rem', color: '#374151', margin: 0, lineHeight: 1.8 }}>{item}</p>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: 1.7 }}>
          본 사이트의 모든 정보는 AI가 생성한 참고용 자료이며, 투자 권유가 아닙니다.
          투자의 최종 판단과 책임은 본인에게 있습니다.
          문의: <a href="mailto:shud26@gmail.com" style={{ color: '#374151' }}>shud26@gmail.com</a>
        </p>
      </main>
    </div>
  );
}
