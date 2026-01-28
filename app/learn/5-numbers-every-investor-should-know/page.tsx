import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5 Numbers Every Investor Should Know | StockPick26',
  description: 'The essential metrics for stock analysis: P/E ratio, P/B ratio, ROE, dividend yield, and debt-to-equity. Simple explanations.',
  keywords: 'stock metrics, P/E ratio, ROE, stock analysis, fundamental analysis, investment metrics',
  openGraph: {
    title: '5 Numbers Every Investor Should Know',
    description: 'Skip the 50-page report. These five metrics tell you most of what you need.',
    type: 'article',
  },
};

export default function NumbersGuidePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1F1F23] bg-[#0A0A0B]/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-[#10b981] transition-colors">
            StockPick26
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/glossary" className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              Glossary
            </Link>
            <Link href="/tools" className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              Tools
            </Link>
            <Link href="/learn" className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              Learn
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <article className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#6B6B70]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/learn" className="hover:text-white transition-colors">Learn</Link></li>
              <li>/</li>
              <li className="text-white">5 Key Numbers</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-[#10b981] font-medium">Analysis</span>
              <span className="text-xs text-[#6B6B70]">•</span>
              <span className="text-xs text-[#6B6B70]">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              5 Numbers Every Investor Should Know
            </h1>
            <p className="text-[#8B8B90] text-lg">
              You could spend hours on financial statements. Or you could check these five numbers and know 80% of what matters.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              I&apos;m not saying you should never read an annual report. But let&apos;s be real—most people won&apos;t. These five numbers give you a solid starting point for evaluating any stock.
            </p>

            {/* Number 1 */}
            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#10b981]">1</span>
                <h2 className="text-xl font-semibold text-white">P/E Ratio (Price-to-Earnings)</h2>
              </div>
              <p className="text-[#6B6B70] text-sm mb-4">Stock Price ÷ Earnings Per Share</p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                This tells you how much you&apos;re paying for each dollar of profit. A P/E of 20 means you&apos;re paying $20 for every $1 the company earns annually.
              </p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                <strong className="text-white">What&apos;s a good P/E?</strong> It depends on the industry. Tech stocks often trade at 25-40x because they&apos;re expected to grow fast. Banks and utilities might be 10-15x. Compare a company to its peers, not to random stocks.
              </p>

              <div className="bg-[#0A0A0B] rounded-lg p-4 text-sm">
                <span className="text-[#f59e0b]">Watch out:</span>
                <span className="text-[#ADADB0]"> A super low P/E isn&apos;t always a bargain—the company might be declining. And a high P/E doesn&apos;t mean it&apos;s overpriced—maybe it&apos;s just growing fast.</span>
              </div>
            </div>

            {/* Number 2 */}
            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#10b981]">2</span>
                <h2 className="text-xl font-semibold text-white">P/B Ratio (Price-to-Book)</h2>
              </div>
              <p className="text-[#6B6B70] text-sm mb-4">Stock Price ÷ Book Value Per Share</p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                This compares the stock price to the company&apos;s net assets (what it owns minus what it owes). A P/B of 1 means you&apos;re paying exactly what the company is worth on paper.
              </p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                <strong className="text-white">When it&apos;s useful:</strong> Banks, insurance companies, real estate—anything with lots of assets on the balance sheet. For tech companies with mostly intangible assets, P/B is less meaningful.
              </p>

              <div className="bg-[#0A0A0B] rounded-lg p-4 text-sm">
                <span className="text-[#10b981]">Tip:</span>
                <span className="text-[#ADADB0]"> A P/B under 1 might mean the stock is undervalued—or that the market thinks those assets aren&apos;t worth what the books say.</span>
              </div>
            </div>

            {/* Number 3 */}
            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#10b981]">3</span>
                <h2 className="text-xl font-semibold text-white">ROE (Return on Equity)</h2>
              </div>
              <p className="text-[#6B6B70] text-sm mb-4">Net Income ÷ Shareholder Equity × 100</p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                This is the one Warren Buffett loves. It tells you how efficiently a company turns shareholder money into profit. An ROE of 15% means for every $100 of equity, the company generates $15 in profit.
              </p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                <strong className="text-white">What to look for:</strong> Consistently above 15% is solid. Above 20% is excellent. The best businesses maintain high ROE for years.
              </p>

              <div className="bg-[#0A0A0B] rounded-lg p-4 text-sm">
                <span className="text-[#f59e0b]">Watch out:</span>
                <span className="text-[#ADADB0]"> A company can boost ROE by taking on debt. Check the debt levels too.</span>
              </div>
            </div>

            {/* Number 4 */}
            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#10b981]">4</span>
                <h2 className="text-xl font-semibold text-white">Dividend Yield</h2>
              </div>
              <p className="text-[#6B6B70] text-sm mb-4">Annual Dividend ÷ Stock Price × 100</p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                If you&apos;re into dividend investing, this tells you what cash return you&apos;ll get just for holding the stock. A 4% yield means $100 invested pays you $4 per year.
              </p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                <strong className="text-white">What&apos;s good?</strong> The S&P 500 average is around 1.5%. A yield of 3-5% is decent. Above 6%? Be suspicious—the company might be in trouble and the dividend could get cut.
              </p>

              <div className="bg-[#0A0A0B] rounded-lg p-4 text-sm">
                <span className="text-[#10b981]">Tip:</span>
                <span className="text-[#ADADB0]"> Don&apos;t chase yield. A company that grows its dividend 10% yearly from 2% is better than one stuck at 5%.</span>
              </div>
            </div>

            {/* Number 5 */}
            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#10b981]">5</span>
                <h2 className="text-xl font-semibold text-white">Debt-to-Equity Ratio</h2>
              </div>
              <p className="text-[#6B6B70] text-sm mb-4">Total Debt ÷ Shareholder Equity</p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                This shows how much the company relies on debt versus its own money. A ratio of 1.0 means equal parts debt and equity. Higher = more leveraged = more risk.
              </p>

              <p className="text-[#ADADB0] leading-relaxed mb-4">
                <strong className="text-white">What&apos;s acceptable?</strong> Varies by industry. Utilities often have D/E above 1.5 (normal for them). Tech companies usually run under 0.5. Real estate can be higher. Compare to industry peers.
              </p>

              <div className="bg-[#0A0A0B] rounded-lg p-4 text-sm">
                <span className="text-[#f59e0b]">Watch out:</span>
                <span className="text-[#ADADB0]"> High debt is fine in good times, but when recession hits or rates rise, heavily indebted companies struggle first.</span>
              </div>
            </div>

            {/* Putting It Together */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Putting It All Together</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Here&apos;s a quick checklist when you&apos;re researching a stock:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-8 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">✓</span> P/E reasonable for the industry?</li>
              <li className="flex gap-2"><span className="text-[#10b981]">✓</span> ROE consistently above 15%?</li>
              <li className="flex gap-2"><span className="text-[#10b981]">✓</span> Debt-to-equity not out of control?</li>
              <li className="flex gap-2"><span className="text-[#10b981]">✓</span> If paying dividends, is the yield sustainable?</li>
            </ul>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-6">
              No single number tells the whole story. A cheap P/E might hide problems. A high ROE might come from debt. Always look at multiple metrics together.
            </p>

            {/* Bottom Line */}
            <div className="bg-[#0F1419] border border-[#1F1F23] rounded-xl p-6 mt-10">
              <h2 className="text-lg font-semibold text-white mb-3">The Bottom Line</h2>
              <p className="text-[#ADADB0] leading-relaxed">
                You don&apos;t need to be a financial analyst. Just knowing these five numbers puts you ahead of most retail investors who buy stocks based on tips and vibes. Spend 10 minutes checking these metrics before you buy anything.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-[#1F1F23] flex justify-between">
            <Link
              href="/learn/how-to-read-stock-charts"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← Previous: Reading Stock Charts
            </Link>
            <Link
              href="/learn/dividend-investing-101"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              Next: Dividend Investing 101 →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1F1F23] bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#6B6B70] text-[11px]">
            <p>StockPick26 - Stock Market Glossary for Beginners</p>
            <div className="flex items-center gap-4">
              <Link href="/glossary" className="hover:text-[#10b981] transition-colors">Glossary</Link>
              <Link href="/tools" className="hover:text-[#10b981] transition-colors">Tools</Link>
              <Link href="/learn" className="hover:text-[#10b981] transition-colors">Learn</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
