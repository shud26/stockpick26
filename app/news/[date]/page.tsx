import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNews, getAllNewsDates } from '@/lib/reports';

export async function generateStaticParams() {
  return getAllNewsDates().map(date => ({ date }));
}

const SENTIMENT_MAP: Record<string, { label: string; color: string; bg: string }> = {
  bullish: { label: '강세',   color: '#16a34a', bg: '#f0fdf4' },
  bearish: { label: '약세',   color: '#dc2626', bg: '#fef2f2' },
  neutral: { label: '중립',   color: '#d97706', bg: '#fffbeb' },
};

const IMPACT_COLOR: Record<string, string> = {
  '긍정': '#16a34a',
  '부정': '#dc2626',
  '중립': '#d97706',
  positive: '#16a34a',
  negative: '#dc2626',
  neutral:  '#d97706',
};

export default async function NewsDetailPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const news = getNews(date);
  if (!news) notFound();

  const allDates = getAllNewsDates();
  const idx = allDates.indexOf(date);
  const prevDate = allDates[idx + 1];
  const nextDate = allDates[idx - 1];
  const sentiment = SENTIMENT_MAP[news.sentiment as string] ?? SENTIMENT_MAP.neutral;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* 헤더 */}
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '1rem', color: '#111', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            StockPick26
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/news"   style={{ fontSize: '0.875rem', color: '#111', textDecoration: 'none', fontWeight: 600 }}>뉴스</Link>
            <Link href="/daily"  style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>종목추천</Link>
            <Link href="/about"  style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>About</Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>

        {/* 날짜 + 제목 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
            {date} · {news.generated_at} · 뉴스 요약
          </p>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
            오늘의 경제 뉴스 브리핑
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.7 }}>
            {news.headline}
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '2rem 0' }} />

        {/* 시장 개요 */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: 0 }}>시장 개요</h2>
            <span style={{
              fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: 999,
              color: sentiment.color, background: sentiment.bg
            }}>
              {sentiment.label}
            </span>
            {news.fear_greed && (
              <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{news.fear_greed}</span>
            )}
          </div>
          <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
            {news.market_overview}
          </p>
        </section>

        {/* 핵심 테마 */}
        {news.key_themes?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>핵심 테마</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {news.key_themes.map((t: any, i: number) => (
                <div key={i} style={{ padding: '1rem', background: '#f9fafb', borderRadius: 8, border: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: 0 }}>{t.theme}</p>
                    {t.sector && <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{t.sector}</span>}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{t.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 국내 뉴스 */}
        {news.kr_headlines?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>🇰🇷 국내 주요 뉴스</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {news.kr_headlines.map((item: any, i: number) => (
                <div key={i} style={{ padding: '1.2rem', background: '#fafafa', borderRadius: 10, border: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                    {item.impact && (
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: 999,
                        color: IMPACT_COLOR[item.impact] ?? '#6b7280',
                        background: (IMPACT_COLOR[item.impact] ?? '#6b7280') + '15',
                        whiteSpace: 'nowrap', marginLeft: '0.5rem'
                      }}>
                        {item.impact}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{item.summary}</p>
                  {item.source && <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0.5rem 0 0' }}>{item.source}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 미국 뉴스 */}
        {news.us_headlines?.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>🇺🇸 미국 주요 뉴스</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {news.us_headlines.map((item: any, i: number) => (
                <div key={i} style={{ padding: '1.2rem', background: '#fafafa', borderRadius: 10, border: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                    {item.impact && (
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: 999,
                        color: IMPACT_COLOR[item.impact] ?? '#6b7280',
                        background: (IMPACT_COLOR[item.impact] ?? '#6b7280') + '15',
                        whiteSpace: 'nowrap', marginLeft: '0.5rem'
                      }}>
                        {item.impact}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{item.summary}</p>
                  {item.source && <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0.5rem 0 0' }}>{item.source}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 결론 */}
        {news.conclusion && (
          <section style={{ marginBottom: '3rem', padding: '1.5rem', background: '#f9fafb', borderRadius: 10, border: '1px solid #f3f4f6' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>총평</h2>
            <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>{news.conclusion}</p>
          </section>
        )}

        {/* 종목추천 링크 */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Link href={`/daily/${date}`} style={{
            display: 'inline-block', padding: '0.75rem 2rem',
            background: '#111', color: '#fff', borderRadius: 8,
            fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none'
          }}>
            오늘의 종목 추천 보기 →
          </Link>
        </div>

        {/* 날짜 네비게이션 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}>
          {prevDate ? (
            <Link href={`/news/${prevDate}`} style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>← {prevDate}</Link>
          ) : <span />}
          {nextDate && (
            <Link href={`/news/${nextDate}`} style={{ fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>{nextDate} →</Link>
          )}
        </div>

      </main>
    </div>
  );
}
