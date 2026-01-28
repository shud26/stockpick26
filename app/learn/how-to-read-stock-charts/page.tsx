import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Read Stock Charts for Beginners | StockPick26',
  description: 'Learn how to read stock charts without getting overwhelmed. Candlesticks, volume, moving averages explained simply.',
  keywords: 'stock charts, candlestick charts, how to read charts, stock chart basics, technical analysis beginner',
  openGraph: {
    title: 'How to Read Stock Charts (Without Getting Overwhelmed)',
    description: 'Learn the basics of reading stock charts. No complicated jargon.',
    type: 'article',
  },
};

export default function ChartGuidePage() {
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
              <li className="text-white">Stock Charts</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-[#10b981] font-medium">Basics</span>
              <span className="text-xs text-[#6B6B70]">•</span>
              <span className="text-xs text-[#6B6B70]">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How to Read Stock Charts (Without Getting Overwhelmed)
            </h1>
            <p className="text-[#8B8B90] text-lg">
              You don&apos;t need to become a chart wizard. Here&apos;s what actually matters.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-6">
              Open any trading app and you&apos;ll see a chart covered in lines, bars, and colors. It looks like something NASA built. But here&apos;s the thing—you don&apos;t need to understand 90% of it.
            </p>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Let me show you what actually matters when you&apos;re looking at a stock chart.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">The Price Line (Start Here)</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              The most basic chart is just a line showing the stock price over time. That&apos;s it. Price goes up, line goes up. Price goes down, line goes down.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-6">
              Before you learn anything fancy, just look at the overall direction:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-8 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Is it generally going up over the past year? Good sign.</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Trending down for months? Maybe there&apos;s a reason.</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Moving sideways? The stock is &quot;consolidating&quot;—waiting for something to happen.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Candlesticks: More Info, Same Idea</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Instead of a simple line, most traders use &quot;candlestick&quot; charts. Each candle shows four things for that time period:
            </p>

            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 mb-6">
              <ul className="text-[#ADADB0] space-y-2">
                <li><span className="text-white font-medium">Open:</span> Price when the day started</li>
                <li><span className="text-white font-medium">Close:</span> Price when the day ended</li>
                <li><span className="text-white font-medium">High:</span> Highest price that day</li>
                <li><span className="text-white font-medium">Low:</span> Lowest price that day</li>
              </ul>
            </div>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Green candle = price went up that day. Red candle = price went down.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              That&apos;s really all you need to know. Don&apos;t fall down the rabbit hole of &quot;doji patterns&quot; and &quot;hammer formations.&quot; Most of that stuff barely works better than flipping a coin.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Volume: Are People Actually Buying?</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Those bars at the bottom of the chart show volume—how many shares were traded that day.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Here&apos;s why it matters:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-6 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <span><strong className="text-white">Price up + high volume</strong> = lots of buyers, probably real momentum</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <span><strong className="text-white">Price up + low volume</strong> = meh, not many people care</span></li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <span><strong className="text-white">Huge volume spike</strong> = something happened (check the news)</span></li>
            </ul>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Volume confirms price moves. A breakout to new highs means more if it comes with heavy buying.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Moving Averages: The Only Line You Need</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              A moving average smooths out the daily noise and shows you the trend. The two most common ones:
            </p>

            <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 mb-6">
              <ul className="text-[#ADADB0] space-y-3">
                <li><span className="text-white font-medium">50-day MA:</span> Average price over the last 50 trading days. Good for spotting medium-term trends.</li>
                <li><span className="text-white font-medium">200-day MA:</span> Average over ~10 months. This is the big one—if a stock is above its 200-day MA, the long-term trend is up.</li>
              </ul>
            </div>

            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Simple rule of thumb:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-8 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Stock above the 200-day MA? Long-term uptrend.</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Stock below it? Long-term downtrend.</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> Price bouncing off the MA? That level might be support.</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Support & Resistance: Where Prices Tend to Stop</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              Ever notice how a stock keeps bouncing off the same price? That&apos;s support (floor) or resistance (ceiling).
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              If Apple keeps failing to break $200 and falls back every time, $200 is resistance. If it keeps bouncing at $170 and never goes lower, $170 is support.
            </p>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              When these levels finally break, the move can be significant. A stock that finally breaks above long-term resistance often runs higher.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Time Frames: Zoom In and Out</h2>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-4">
              You can view charts in different time frames:
            </p>
            <ul className="text-[#ADADB0] text-[17px] leading-relaxed mb-4 space-y-2">
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">1 day:</strong> For day traders (probably not you)</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">1 week / 1 month:</strong> Good for timing entries</li>
              <li className="flex gap-2"><span className="text-[#10b981]">•</span> <strong className="text-white">1 year / 5 years:</strong> For seeing the big picture</li>
            </ul>
            <p className="text-[#ADADB0] text-[17px] leading-relaxed mb-8">
              Pro tip: Always check the longer time frame first. A stock might look like it&apos;s &quot;crashing&quot; on the daily chart but is just having a normal pullback on the yearly chart.
            </p>

            {/* Bottom Line */}
            <div className="bg-[#0F1419] border border-[#1F1F23] rounded-xl p-6 mt-10">
              <h2 className="text-lg font-semibold text-white mb-3">The Bottom Line</h2>
              <p className="text-[#ADADB0] leading-relaxed">
                Don&apos;t overcomplicate charts. Check the trend direction, look at volume on big moves, and pay attention to the 200-day moving average. That&apos;s 80% of what you need. Everything else is mostly noise.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-[#1F1F23] flex justify-between">
            <Link
              href="/learn"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← All Guides
            </Link>
            <Link
              href="/learn/5-numbers-every-investor-should-know"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              Next: 5 Numbers Every Investor Should Know →
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
