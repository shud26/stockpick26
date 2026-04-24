import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getReport, getAllReportDates } from '@/lib/reports';
import { TradingViewWidget } from '@/components/TradingViewWidget';

export async function generateStaticParams() {
  const dates = getAllReportDates();
  return dates.map(date => ({ date }));
}

const SENTIMENT_CONFIG = {
  bullish: { label: '강세 🟢', color: '#10b981' },
  bearish: { label: '약세 🔴', color: '#ef4444' },
  neutral: { label: '중립 🟡', color: '#f59e0b' },
};

const ACTION_COLOR: Record<string, string> = {
  '매수': '#10b981', buy: '#10b981',
  '관망': '#f59e0b', hold: '#f59e0b',
  '비중축소': '#ef4444', sell: '#ef4444',
};

const STARS = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

export default async function DailyReportPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const report = getReport(date);
  if (!report) notFound();

  const allDates = getAllReportDates();
  const currentIdx = allDates.indexOf(date);
  const prevDate = allDates[currentIdx + 1];
  const nextDate = allDates[currentIdx - 1];
  const sentiment = SENTIMENT_CONFIG[report.sentiment as keyof typeof SENTIMENT_CONFIG] ?? SENTIMENT_CONFIG.neutral;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#1F1F23] bg-[#0A0A0B]/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-[#10b981] transition-colors">
            StockPick26
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/daily" className="text-sm text-[#10b981]">Daily Report</Link>
            <Link href="/glossary" className="text-sm text-[#8B8B90] hover:text-white transition-colors">Glossary</Link>
            <Link href="/tools" className="text-sm text-[#8B8B90] hover:text-white transition-colors">Tools</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* 헤더 */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-[#6B6B70]">{report.date}</span>
            <span className="text-xs text-[#6B6B70]">•</span>
            <span className="text-xs text-[#6B6B70]">{report.generated_at} 생성</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            📊 오늘의 시황 리포트
          </h1>
          <p className="text-[#ADADB0] text-lg leading-relaxed">{report.one_liner}</p>
        </div>

        {/* 시황 요약 */}
        <section className="bg-[#111113] border border-[#1F1F23] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-lg">시장 요약</h2>
            <span className="text-sm font-medium px-3 py-1 rounded-full"
              style={{ color: sentiment.color, backgroundColor: `${sentiment.color}20` }}>
              {sentiment.label}
            </span>
          </div>
          <p className="text-[#ADADB0] leading-relaxed">{report.market_summary}</p>
        </section>

        {/* 핵심 테마 */}
        {report.key_themes?.length > 0 && (
          <section>
            <h2 className="text-white font-bold text-lg mb-4">💡 오늘의 핵심 테마</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {report.key_themes.map((t: any, i: number) => (
                <div key={i} className="bg-[#111113] border border-[#1F1F23] rounded-xl p-4">
                  <p className="text-[#10b981] font-semibold text-sm mb-1">{t.theme}</p>
                  <p className="text-[#ADADB0] text-sm leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 국내 종목 추천 */}
        {report.kr_picks?.length > 0 && (
          <section>
            <h2 className="text-white font-bold text-lg mb-4">🇰🇷 국내 종목 추천</h2>
            <div className="space-y-4">
              {report.kr_picks.map((pick: any, i: number) => (
                <div key={i} className="bg-[#111113] border border-[#1F1F23] rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-white font-bold text-lg">{pick.name}</span>
                      <span className="text-[#6B6B70] text-sm ml-2">{pick.ticker}</span>
                      <span className="text-[#f59e0b] text-sm ml-2">{STARS(pick.rating)}</span>
                    </div>
                    <span className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ color: ACTION_COLOR[pick.action] ?? '#fff', backgroundColor: `${ACTION_COLOR[pick.action] ?? '#fff'}20` }}>
                      {pick.action}
                    </span>
                  </div>
                  <p className="text-[#ADADB0] text-sm leading-relaxed mb-3">{pick.reason}</p>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">매수 구간</p>
                      <p className="text-white font-medium">{pick.buy_zone}</p>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">목표가</p>
                      <p className="text-[#10b981] font-medium">{pick.target}</p>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">리스크</p>
                      <p className="text-[#ef4444] font-medium text-[11px]">{pick.risk}</p>
                    </div>
                  </div>
                  {pick.catalyst && (
                    <p className="mt-2 text-xs text-[#10b981]">⚡ {pick.catalyst}</p>
                  )}
                  {/* TradingView 차트 */}
                  <div className="mt-4">
                    <TradingViewWidget
                      symbol={`KRX:${pick.ticker}`}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 미국 종목 추천 */}
        {report.us_picks?.length > 0 && (
          <section>
            <h2 className="text-white font-bold text-lg mb-4">🇺🇸 미국 종목 추천</h2>
            <div className="space-y-4">
              {report.us_picks.map((pick: any, i: number) => (
                <div key={i} className="bg-[#111113] border border-[#1F1F23] rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-white font-bold text-lg">{pick.name}</span>
                      <span className="text-[#6B6B70] text-sm ml-2">{pick.ticker}</span>
                      <span className="text-[#f59e0b] text-sm ml-2">{STARS(pick.rating)}</span>
                    </div>
                    <span className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ color: ACTION_COLOR[pick.action] ?? '#fff', backgroundColor: `${ACTION_COLOR[pick.action] ?? '#fff'}20` }}>
                      {pick.action}
                    </span>
                  </div>
                  <p className="text-[#ADADB0] text-sm leading-relaxed mb-3">{pick.reason}</p>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">Buy Zone</p>
                      <p className="text-white font-medium">{pick.buy_zone}</p>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">Target</p>
                      <p className="text-[#10b981] font-medium">{pick.target}</p>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-lg p-2">
                      <p className="text-[#6B6B70] mb-1">Risk</p>
                      <p className="text-[#ef4444] font-medium text-[11px]">{pick.risk}</p>
                    </div>
                  </div>
                  {pick.catalyst && (
                    <p className="mt-2 text-xs text-[#10b981]">⚡ {pick.catalyst}</p>
                  )}
                  <div className="mt-4">
                    <TradingViewWidget symbol={`NASDAQ:${pick.ticker}`} height={300} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 차트 포인트 */}
        {report.chart_points?.length > 0 && (
          <section>
            <h2 className="text-white font-bold text-lg mb-4">📈 차트 분석 포인트</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {report.chart_points.map((cp: any, i: number) => (
                <div key={i} className="bg-[#111113] border border-[#1F1F23] rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">{cp.name} <span className="text-[#6B6B70] text-xs">{cp.ticker}</span></p>
                  <div className="space-y-1 text-xs text-[#ADADB0]">
                    <p>🔑 핵심 레벨: <span className="text-white">{cp.key_level}</span></p>
                    <p>📊 MA 시그널: <span className="text-white">{cp.ma_signal}</span></p>
                    <p>💹 RSI: <span className="text-white">{cp.rsi_signal}</span></p>
                    <p>📐 패턴: <span className="text-[#10b981]">{cp.pattern}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 날짜 네비게이션 */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1F1F23]">
          {prevDate ? (
            <Link href={`/daily/${prevDate}`}
              className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              ← {prevDate}
            </Link>
          ) : <div />}
          <Link href="/daily" className="text-xs text-[#6B6B70] hover:text-[#10b981] transition-colors">
            전체 아카이브
          </Link>
          {nextDate ? (
            <Link href={`/daily/${nextDate}`}
              className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              {nextDate} →
            </Link>
          ) : <div />}
        </div>

        {/* 면책 */}
        <p className="text-[11px] text-[#4B4B50] text-center pb-6">
          본 리포트는 AI가 생성한 정보로 투자 권유가 아닙니다. 투자의 최종 결정은 본인의 판단으로 하시기 바랍니다.
        </p>
      </main>
    </>
  );
}
