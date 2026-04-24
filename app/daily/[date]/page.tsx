import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getReport, getAllReportDates } from '@/lib/reports';
import { TradingViewWidget } from '@/components/TradingViewWidget';

export async function generateStaticParams() {
  const dates = getAllReportDates();
  return dates.map(date => ({ date }));
}

const SENTIMENT_MAP = {
  bullish: { label: '강세장', color: '#16a34a', bg: '#f0fdf4' },
  bearish: { label: '약세장', color: '#dc2626', bg: '#fef2f2' },
  neutral: { label: '중립',   color: '#d97706', bg: '#fffbeb' },
};

const ACTION_MAP: Record<string, { color: string; bg: string }> = {
  '매수': { color: '#16a34a', bg: '#f0fdf4' },
  buy:    { color: '#16a34a', bg: '#f0fdf4' },
  '관망': { color: '#d97706', bg: '#fffbeb' },
  hold:   { color: '#d97706', bg: '#fffbeb' },
  '비중축소': { color: '#dc2626', bg: '#fef2f2' },
  sell:       { color: '#dc2626', bg: '#fef2f2' },
};

const STARS = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

export default async function DailyReportPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const report = getReport(date);
  if (!report) notFound();

  const allDates = getAllReportDates();
  const idx = allDates.indexOf(date);
  const prevDate = allDates[idx + 1];
  const nextDate = allDates[idx - 1];
  const sentiment = SENTIMENT_MAP[report.sentiment as keyof typeof SENTIMENT_MAP] ?? SENTIMENT_MAP.neutral;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* 헤더 */}
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1rem', color: '#111', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            StockPick26
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/daily" style={{ fontSize: '0.875rem', color: '#111', textDecoration: 'none', fontWeight: 600 }}>Daily</Link>
            <Link href="/about" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>About</Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>

        {/* 날짜 + 제목 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
            {date} · {report.generated_at}
          </p>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
            오늘의 시황 리포트
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            {report.one_liner || report.conclusion}
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        {/* 시장 요약 */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: 0 }}>시장 요약</h2>
            <span style={{
              fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: 999,
              color: sentiment.color, background: sentiment.bg
            }}>
              {sentiment.label}
            </span>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
            {report.market_summary}
          </p>
        </section>

        {/* 핵심 테마 */}
        {report.key_themes?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>핵심 테마</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {report.key_themes.map((t: any, i: number) => (
                <div key={i} style={{ padding: '1rem', background: '#f9fafb', borderRadius: 8, border: '1px solid #f3f4f6' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', marginBottom: '0.3rem' }}>{t.theme}</p>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{t.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        {/* 국내 종목 */}
        {report.kr_picks?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1.5rem' }}>🇰🇷 국내 종목</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {report.kr_picks.map((pick: any, i: number) => {
                const action = ACTION_MAP[pick.action] ?? { color: '#6b7280', bg: '#f9fafb' };
                return (
                  <div key={i}>
                    {/* 종목 헤더 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111', letterSpacing: '-0.02em' }}>{pick.name}</span>
                        <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginLeft: '0.5rem' }}>{pick.ticker}</span>
                        <span style={{ fontSize: '0.8rem', color: '#f59e0b', marginLeft: '0.5rem' }}>{STARS(pick.rating)}</span>
                      </div>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                        borderRadius: 999, color: action.color, background: action.bg
                      }}>{pick.action}</span>
                    </div>

                    {/* 섹터 */}
                    {pick.sector && (
                      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                        <span style={{ background: '#f3f4f6', padding: '0.15rem 0.5rem', borderRadius: 4 }}>{pick.sector}</span>
                      </p>
                    )}

                    {/* 뉴스 근거 */}
                    {pick.news_basis && (
                      <p style={{ fontSize: '0.82rem', color: '#6b7280', fontStyle: 'italic', borderLeft: '3px solid #e5e7eb', paddingLeft: '0.75rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                        📰 {pick.news_basis}
                      </p>
                    )}

                    {/* 분석 */}
                    <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>{pick.reason}</p>

                    {/* 수치 */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                      {[
                        { label: '매수 구간', value: pick.buy_zone, color: '#374151' },
                        { label: '목표가', value: pick.target, color: '#16a34a' },
                        { label: '손절', value: pick.stop_loss, color: '#dc2626' },
                        { label: '리스크', value: pick.risk, color: '#9ca3af' },
                      ].map((item, j) => (
                        <div key={j} style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: 8 }}>
                          <p style={{ fontSize: '0.7rem', color: '#9ca3af', marginBottom: '0.25rem' }}>{item.label}</p>
                          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: item.color, margin: 0, lineHeight: 1.4 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>

                    {pick.catalyst && (
                      <p style={{ fontSize: '0.8rem', color: '#16a34a', marginBottom: '1rem' }}>⚡ {pick.catalyst}</p>
                    )}

                    {/* 차트 */}
                    <TradingViewWidget symbol={`KRX:${pick.ticker}`} name={pick.name} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        {/* 미국 종목 */}
        {report.us_picks?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1.5rem' }}>🇺🇸 미국 종목</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {report.us_picks.map((pick: any, i: number) => {
                const action = ACTION_MAP[pick.action] ?? { color: '#6b7280', bg: '#f9fafb' };
                return (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111', letterSpacing: '-0.02em' }}>{pick.name}</span>
                        <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginLeft: '0.5rem' }}>{pick.ticker}</span>
                        <span style={{ fontSize: '0.8rem', color: '#f59e0b', marginLeft: '0.5rem' }}>{STARS(pick.rating)}</span>
                      </div>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                        borderRadius: 999, color: action.color, background: action.bg
                      }}>{pick.action}</span>
                    </div>
                    {pick.sector && (
                      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                        <span style={{ background: '#f3f4f6', padding: '0.15rem 0.5rem', borderRadius: 4 }}>{pick.sector}</span>
                      </p>
                    )}
                    {pick.news_basis && (
                      <p style={{ fontSize: '0.82rem', color: '#6b7280', fontStyle: 'italic', borderLeft: '3px solid #e5e7eb', paddingLeft: '0.75rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                        📰 {pick.news_basis}
                      </p>
                    )}
                    <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>{pick.reason}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                      {[
                        { label: 'Buy Zone', value: pick.buy_zone, color: '#374151' },
                        { label: 'Target', value: pick.target, color: '#16a34a' },
                        { label: 'Stop Loss', value: pick.stop_loss, color: '#dc2626' },
                        { label: 'Risk', value: pick.risk, color: '#9ca3af' },
                      ].map((item, j) => (
                        <div key={j} style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: 8 }}>
                          <p style={{ fontSize: '0.7rem', color: '#9ca3af', marginBottom: '0.25rem' }}>{item.label}</p>
                          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: item.color, margin: 0, lineHeight: 1.4 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    {pick.catalyst && (
                      <p style={{ fontSize: '0.8rem', color: '#16a34a', marginBottom: '1rem' }}>⚡ {pick.catalyst}</p>
                    )}
                    <TradingViewWidget symbol={`NASDAQ:${pick.ticker}`} name={pick.name} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 차트 포인트 */}
        {report.chart_points?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>차트 포인트</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {report.chart_points.map((cp: any, i: number) => (
                <div key={i} style={{ padding: '1rem', background: '#f9fafb', borderRadius: 8, border: '1px solid #f3f4f6' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#111', marginBottom: '0.5rem' }}>
                    {cp.name} <span style={{ color: '#9ca3af', fontWeight: 400 }}>{cp.ticker}</span>
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {[
                      ['핵심 레벨', cp.key_level],
                      ['MA', cp.ma_signal],
                      ['RSI', cp.rsi_signal],
                      ['패턴', cp.pattern],
                    ].map(([k, v]) => (
                      <p key={k} style={{ fontSize: '0.78rem', color: '#6b7280', margin: 0 }}>
                        <span style={{ color: '#9ca3af' }}>{k} </span>{v}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 날짜 네비 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}>
          {prevDate
            ? <Link href={`/daily/${prevDate}`} style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>← {prevDate}</Link>
            : <span />}
          {nextDate
            ? <Link href={`/daily/${nextDate}`} style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>{nextDate} →</Link>
            : <span />}
        </div>

        <p style={{ fontSize: '0.72rem', color: '#d1d5db', textAlign: 'center', marginTop: '3rem' }}>
          AI가 생성한 정보로 투자 권유가 아닙니다. 투자 결정은 본인의 판단으로 하세요.
        </p>

      </main>

      {/* 배너 — 주식 봇 예고 */}
      <div style={{ background: '#f9fafb', borderTop: '1px solid #f3f4f6', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Coming Soon
          </p>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            주식 자동매매 봇 개발 중
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            KIS API 연동 ETF 자동매매 봇을 개발하고 있습니다.<br />
            수익 현황을 이 사이트에서 실시간으로 공개할 예정입니다.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['KIS API 연동', 'ETF MA 추세추종', '수익 공개', '알림 구독'].map(tag => (
              <span key={tag} style={{
                fontSize: '0.75rem', padding: '0.25rem 0.75rem',
                background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: 999, color: '#374151'
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer style={{ borderTop: '1px solid #f3f4f6', padding: '1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: 0 }}>
            © 2026 StockPick26 — AI 시황 분석
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link href="/about" style={{ fontSize: '0.78rem', color: '#9ca3af', textDecoration: 'none' }}>About</Link>
            <Link href="/privacy" style={{ fontSize: '0.78rem', color: '#9ca3af', textDecoration: 'none' }}>Privacy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
