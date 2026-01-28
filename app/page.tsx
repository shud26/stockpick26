import Link from 'next/link';
import { glossaryTerms, categories } from '@/data/glossary';

export default function Home() {
  // Get featured terms (popular ones)
  const featuredSlugs = ['per', 'pbr', 'eps', 'roe', 'dividend', 'dividend-yield', 'etf', 'short-selling'];
  const featuredTerms = featuredSlugs
    .map(slug => glossaryTerms.find(t => t.slug === slug))
    .filter(Boolean);

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

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stock Investing,<br />
              <span className="text-[#10b981]">Start with the Basics</span>
            </h1>
            <p className="text-[#8B8B90] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              P/E, P/B, ROE... Sound confusing?<br />
              Learn essential stock market terms in plain English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/glossary"
                className="px-8 py-4 bg-[#10b981] text-white font-semibold rounded-xl hover:bg-[#34d399] transition-colors"
              >
                Browse Glossary
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-[#1F1F23] bg-[#111113]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-[#10b981] mb-1">{glossaryTerms.length}+</p>
                <p className="text-sm text-[#6B6B70]">Stock Terms</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">{Object.keys(categories).length}</p>
                <p className="text-sm text-[#6B6B70]">Categories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-[#6B6B70]">Free</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">Easy</p>
                <p className="text-sm text-[#6B6B70]">Plain English</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Terms */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Popular Terms</h2>
            <p className="text-[#6B6B70] text-center mb-10">Most searched stock market terms</p>

            <div className="grid md:grid-cols-2 gap-4">
              {featuredTerms.map(term => term && (
                <Link
                  key={term.slug}
                  href={`/glossary/${term.slug}`}
                  className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors">
                      {term.term}
                    </h3>
                    <span className="text-[11px] text-[#6B6B70] font-mono">{term.termEn}</span>
                  </div>
                  <p className="text-[13px] text-[#ADADB0] leading-relaxed">
                    {term.definition}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/glossary"
                className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
              >
                View all {glossaryTerms.length} terms →
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-[#111113] border-y border-[#1F1F23]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(categories).map(([key, { label, color }]) => {
                const count = glossaryTerms.filter(t => t.category === key).length;
                return (
                  <Link
                    key={key}
                    href={`/glossary?category=${key}`}
                    className="bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors text-center"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full mb-3"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-white font-medium mb-1">{label}</p>
                    <p className="text-[12px] text-[#6B6B70]">{count} terms</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Free Calculators</h2>
            <p className="text-[#6B6B70] text-center mb-10">Useful tools for your investment decisions</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/tools"
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors mb-2">
                  P/E Ratio Calculator
                </h3>
                <p className="text-[13px] text-[#ADADB0]">
                  Is this stock overpriced? Find out in seconds.
                </p>
              </Link>
              <Link
                href="/tools"
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors mb-2">
                  Dividend Yield Calculator
                </h3>
                <p className="text-[13px] text-[#ADADB0]">
                  How much income will you get from dividends?
                </p>
              </Link>
              <Link
                href="/tools"
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors mb-2">
                  Compound Growth Calculator
                </h3>
                <p className="text-[13px] text-[#ADADB0]">
                  See how your money grows over 10, 20, 30 years.
                </p>
              </Link>
              <Link
                href="/tools"
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors mb-2">
                  Position Size Calculator
                </h3>
                <p className="text-[13px] text-[#ADADB0]">
                  How many shares should you buy? Don&apos;t guess.
                </p>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/tools"
                className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
              >
                Try all calculators →
              </Link>
            </div>
          </div>
        </section>

        {/* Learn Section */}
        <section className="py-16 px-4 bg-[#111113] border-y border-[#1F1F23]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Learn to Invest</h2>
            <p className="text-[#6B6B70] text-center mb-10">No-fluff guides for beginners</p>

            <div className="space-y-4">
              <Link
                href="/learn/how-to-read-stock-charts"
                className="block bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-[#10b981]">Basics</span>
                  <span className="text-xs text-[#6B6B70]">•</span>
                  <span className="text-xs text-[#6B6B70]">8 min</span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors">
                  How to Read Stock Charts (Without Getting Overwhelmed)
                </h3>
              </Link>

              <Link
                href="/learn/5-numbers-every-investor-should-know"
                className="block bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-[#10b981]">Analysis</span>
                  <span className="text-xs text-[#6B6B70]">•</span>
                  <span className="text-xs text-[#6B6B70]">6 min</span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors">
                  5 Numbers Every Investor Should Know
                </h3>
              </Link>

              <Link
                href="/learn/dividend-investing-101"
                className="block bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-[#10b981]">Strategy</span>
                  <span className="text-xs text-[#6B6B70]">•</span>
                  <span className="text-xs text-[#6B6B70]">7 min</span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#10b981] transition-colors">
                  Dividend Investing 101: Getting Paid to Hold Stocks
                </h3>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/learn"
                className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
              >
                View all guides →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Master the Language of Investing
            </h2>
            <p className="text-[#8B8B90] mb-8">
              Look up terms whenever you need them.<br />
              Continuously updated with new content.
            </p>
            <Link
              href="/glossary"
              className="inline-block px-8 py-4 bg-[#10b981] text-white font-semibold rounded-xl hover:bg-[#34d399] transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </section>
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
              <Link href="/privacy" className="hover:text-[#10b981] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
