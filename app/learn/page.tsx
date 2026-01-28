import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn Stock Investing | Beginner Guides | StockPick26',
  description: 'Free guides to help you start investing in stocks. Learn how to read charts, understand key metrics, and build your first portfolio.',
};

const guides = [
  {
    slug: 'how-to-read-stock-charts',
    title: 'How to Read Stock Charts (Without Getting Overwhelmed)',
    description: 'Candlesticks, volume bars, moving averages—here\'s what actually matters when you\'re starting out.',
    readTime: '8 min read',
    category: 'Basics',
  },
  {
    slug: '5-numbers-every-investor-should-know',
    title: '5 Numbers Every Investor Should Know',
    description: 'Skip the 50-page annual report. These five metrics tell you most of what you need.',
    readTime: '6 min read',
    category: 'Analysis',
  },
  {
    slug: 'dividend-investing-101',
    title: 'Dividend Investing 101: Getting Paid to Hold Stocks',
    description: 'How to build a portfolio that pays you cash every quarter. No selling required.',
    readTime: '7 min read',
    category: 'Strategy',
  },
];

export default function LearnPage() {
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
            <Link href="/learn" className="text-sm text-white font-medium">
              Learn
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Learn to Invest
            </h1>
            <p className="text-[#8B8B90] text-lg">
              No fluff, no jargon. Just the stuff that actually helps.
            </p>
          </div>

          {/* Guides List */}
          <div className="space-y-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/learn/${guide.slug}`}
                className="block bg-[#111113] border border-[#1F1F23] rounded-xl p-6 hover:border-[#10b981] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#10b981] font-medium">{guide.category}</span>
                  <span className="text-xs text-[#6B6B70]">•</span>
                  <span className="text-xs text-[#6B6B70]">{guide.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-[#10b981] transition-colors mb-2">
                  {guide.title}
                </h2>
                <p className="text-[#ADADB0] text-[15px]">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>

          {/* More Coming */}
          <div className="mt-12 text-center py-8 border border-dashed border-[#1F1F23] rounded-xl">
            <p className="text-[#6B6B70]">More guides coming soon.</p>
          </div>
        </div>
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
