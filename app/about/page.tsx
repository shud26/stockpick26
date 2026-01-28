import { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms, categories } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'About | StockPick26 - Stock Market Glossary',
  description: 'Learn about StockPick26 - your free resource for understanding stock market terminology.',
};

export default function AboutPage() {
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
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">About StockPick26</h1>

          <div className="space-y-8 text-[#ADADB0]">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                StockPick26 is dedicated to making stock market education accessible to everyone.
                We believe that understanding financial terminology shouldn&apos;t be complicated.
                Our goal is to explain complex investing concepts in plain, easy-to-understand English.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">What We Offer</h2>
              <p className="leading-relaxed mb-4">
                Our comprehensive stock market glossary covers essential terms that every investor should know:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">{glossaryTerms.length}+ Terms</strong> - From basic concepts to advanced metrics</li>
                <li><strong className="text-white">{Object.keys(categories).length} Categories</strong> - Organized for easy navigation</li>
                <li><strong className="text-white">Real Examples</strong> - Practical illustrations for each term</li>
                <li><strong className="text-white">Related Terms</strong> - Discover connected concepts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Who Is This For?</h2>
              <p className="leading-relaxed">
                Whether you&apos;re just starting your investment journey or want to brush up on terminology,
                StockPick26 is for you. Our glossary is designed for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Beginning investors learning the basics</li>
                <li>Students studying finance</li>
                <li>Anyone who wants to understand financial news</li>
                <li>Self-directed investors expanding their knowledge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Disclaimer</h2>
              <p className="leading-relaxed text-[#8B8B90]">
                The information provided on StockPick26 is for educational purposes only and should not be
                considered financial advice. Always do your own research and consult with a qualified
                financial advisor before making investment decisions. Investing involves risk,
                including the potential loss of principal.
              </p>
            </section>

            <section className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Start Learning Today</h2>
              <p className="leading-relaxed mb-4">
                Ready to expand your investment vocabulary? Browse our complete glossary
                and start mastering the language of the stock market.
              </p>
              <Link
                href="/glossary"
                className="inline-block px-6 py-3 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#34d399] transition-colors"
              >
                Browse Glossary
              </Link>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1F1F23]">
            <Link
              href="/"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← Back to Home
            </Link>
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
              <Link href="/privacy" className="hover:text-[#10b981] transition-colors">Privacy Policy</Link>
              <Link href="/about" className="hover:text-[#10b981] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
