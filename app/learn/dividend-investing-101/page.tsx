import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dividend Investing 101: Getting Paid to Hold Stocks | StockPick26',
  description: 'Learn how to build a dividend portfolio that pays you quarterly. Dividend yield, payout ratio, and dividend growth strategies explained.',
  keywords: 'dividend investing, dividend stocks, passive income stocks, dividend yield, dividend growth, income investing',
  openGraph: {
    title: 'Dividend Investing 101: Getting Paid to Hold Stocks',
    description: 'How to build a portfolio that pays you cash every quarter.',
    type: 'article',
  },
};

export default function DividendGuidePage() {
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
              <li className="text-white">Dividend Investing</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-[#10b981] font-medium">Strategy</span>
              <span className="text-xs text-[#6B6B70]">•</span>
              <span className="text-xs text-[#6B6B70]">7 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Dividend Investing 101: Getting Paid to Hold Stocks
            </h1>
            <p className="text-[#8B8B90] text-lg">
              Imagine getting paid every quarter just for owning stocks. That&apos;s dividend investing.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-6">
              Most people think you make money in stocks by buying low and selling high. But there&apos;s another way—getting paid to wait. Companies share their profits with shareholders through dividends. You don&apos;t have to sell anything. You just collect checks.
            </p>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Here&apos;s how it works and how to build a portfolio around it.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How Dividends Work</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              When a company makes money, it can do two things with the profits:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-4 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">1.</span> Reinvest it back into the business (growth)</li>
              <li className="flex gap-2"><span className="text-[#10b981]">2.</span> Give some to shareholders (dividends)</li>
            </ul>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Mature companies with stable profits tend to pay dividends. Think Coca-Cola, Johnson & Johnson, Procter & Gamble. They&apos;re not growing 50% a year, but they&apos;re making steady money and sharing it.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Key Terms You Need to Know</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Dividend Yield</h3>
                <p className="text-[#ADADB0] text-[15px] mb-2">
                  Annual dividend divided by stock price. If a $100 stock pays $4/year, that&apos;s a 4% yield.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  Higher yield = more income per dollar invested. But watch out for yield traps (more on that below).
                </p>
              </div>

              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Payout Ratio</h3>
                <p className="text-[#ADADB0] text-[15px] mb-2">
                  What percentage of earnings goes to dividends. If a company earns $5/share and pays $2 in dividends, that&apos;s 40%.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  Under 60% is healthy. Over 80% is risky—not much room if earnings dip.
                </p>
              </div>

              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Ex-Dividend Date</h3>
                <p className="text-[#ADADB0] text-[15px] mb-2">
                  You must own the stock before this date to get the next dividend payment.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  Buy on or after the ex-date? You won&apos;t get that quarter&apos;s dividend.
                </p>
              </div>

              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">Dividend Growth Rate</h3>
                <p className="text-[#ADADB0] text-[15px] mb-2">
                  How fast the company increases its dividend each year.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  A 2% yield growing 10% annually beats a 4% yield that never grows.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">The Yield Trap: Don&apos;t Chase High Yields</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              You might see a stock with an 8% yield and think &quot;jackpot.&quot; Slow down.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Yield goes up when the stock price goes down. A company yielding 8% might be:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-4 space-y-2">
              <li className="flex gap-2"><span className="text-[#ef4444]">•</span> In financial trouble</li>
              <li className="flex gap-2"><span className="text-[#ef4444]">•</span> About to cut its dividend</li>
              <li className="flex gap-2"><span className="text-[#ef4444]">•</span> In a declining industry</li>
            </ul>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              A 3% yield from a rock-solid company is way better than an 8% yield from one that might slash it next quarter.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Two Approaches to Dividend Investing</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-3">High Yield</h3>
                <p className="text-[#ADADB0] text-[15px] mb-3">
                  Focus on stocks paying 4%+ right now. More immediate income.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  Good for: Retirees who need cash flow today.
                </p>
              </div>

              <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5">
                <h3 className="text-white font-medium mb-3">Dividend Growth</h3>
                <p className="text-[#ADADB0] text-[15px] mb-3">
                  Focus on companies raising dividends 8-12% yearly. Lower yield now, much higher later.
                </p>
                <p className="text-[#6B6B70] text-sm">
                  Good for: Younger investors building for the future.
                </p>
              </div>
            </div>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Most investors are better off with dividend growth. A stock yielding 2% that grows dividends 10% yearly will pay you more in 10 years than one stuck at 4%.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Dividend Aristocrats: The Gold Standard</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              &quot;Dividend Aristocrats&quot; are S&P 500 companies that have increased their dividend every year for at least 25 years straight. Through recessions, market crashes, pandemics—they kept raising that dividend.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Some examples:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-8 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">Coca-Cola</strong> - 60+ years of increases</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">Johnson & Johnson</strong> - 60+ years</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">Procter & Gamble</strong> - 65+ years</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">3M</strong> - 60+ years</li>
            </ul>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              These aren&apos;t sexy stocks. They&apos;re boring. And that&apos;s the point.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">DRIP: Let It Snowball</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              DRIP = Dividend Reinvestment Plan. Instead of taking cash, you automatically buy more shares with your dividends.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              This is compound interest on steroids. Your dividends buy more shares, which pay more dividends, which buy more shares...
            </p>

            <div className="bg-[#0F1419] border border-[#1F1F23] rounded-xl p-5 mb-8">
              <p className="text-[#ADADB0] text-[15px]">
                <strong className="text-white">Example:</strong> $10,000 invested in a stock with 3% yield and 7% dividend growth. After 20 years with DRIP, you&apos;d have around $55,000. Without DRIP? About $38,000. Same stock, big difference.
              </p>
            </div>

            {/* Section 7 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Building Your Dividend Portfolio</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Here&apos;s a simple approach to get started:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-6 space-y-3">
              <li className="flex gap-2"><span className="text-[#10b981]">1.</span> <span><strong className="text-white">Start with quality.</strong> Stick to companies with 10+ years of dividend growth history.</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">2.</span> <span><strong className="text-white">Check the payout ratio.</strong> Under 60% means room to grow.</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">3.</span> <span><strong className="text-white">Diversify sectors.</strong> Don&apos;t put everything in one industry.</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">4.</span> <span><strong className="text-white">Turn on DRIP.</strong> Let compounding do its thing.</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">5.</span> <span><strong className="text-white">Be patient.</strong> This is a 10-20 year strategy, not get-rich-quick.</span></li>
            </ul>

            {/* Quick Math */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Quick Math: What It Takes</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              How much do you need invested to replace your income with dividends?
            </p>

            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 mb-8">
              <p className="text-[#ADADB0] mb-3">At a 4% yield:</p>
              <ul className="text-[#ADADB0] space-y-2">
                <li><span className="text-white">$500/month</span> = $150,000 invested</li>
                <li><span className="text-white">$1,000/month</span> = $300,000 invested</li>
                <li><span className="text-white">$3,000/month</span> = $900,000 invested</li>
              </ul>
              <p className="text-[#6B6B70] text-sm mt-3">
                Big numbers, but remember—you don&apos;t need to start there. Start with what you have and let it grow.
              </p>
            </div>

            {/* Bottom Line */}
            <div className="bg-[#0F1419] border border-[#1F1F23] rounded-xl p-6 mt-10">
              <h2 className="text-lg font-semibold text-white mb-3">The Bottom Line</h2>
              <p className="text-[#ADADB0] leading-relaxed">
                Dividend investing isn&apos;t glamorous. You won&apos;t brag about it at parties. But 20 years from now, when cash is hitting your account every quarter without you lifting a finger, you&apos;ll be glad you started.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-[#1F1F23] flex justify-between">
            <Link
              href="/learn/5-numbers-every-investor-should-know"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← Previous: 5 Key Numbers
            </Link>
            <Link
              href="/learn"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              All Guides →
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
