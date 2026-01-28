import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms, categories, getTermBySlug, getRelatedTerms } from '@/data/glossary';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all terms
export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    slug: term.slug,
  }));
}

// Generate SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    return {
      title: 'Term Not Found | StockPick26',
    };
  }

  const title = `${term.term} - What is ${term.termEn}? | Stock Glossary`;
  const description = `${term.definition}. ${term.description.slice(0, 120)}...`;

  return {
    title,
    description,
    keywords: `${term.term}, ${term.termEn}, stock terms, investing glossary, ${term.category}`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://stockpick26.com/glossary/${term.slug}`,
      siteName: 'StockPick26',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `https://stockpick26.com/glossary/${term.slug}`,
    },
  };
}

export default async function TermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = getRelatedTerms(term.relatedTerms);
  const categoryInfo = categories[term.category];

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    alternateName: term.termEn,
    description: term.description,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Stock Market Glossary',
      url: 'https://stockpick26.com/glossary',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#6B6B70]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
              </li>
              <li>/</li>
              <li className="text-white">{term.term}</li>
            </ol>
          </nav>

          {/* Term Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${categoryInfo?.color}20`,
                  color: categoryInfo?.color,
                }}
              >
                {categoryInfo?.label}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {term.term}
            </h1>
            <p className="text-[#6B6B70] font-mono text-lg">
              {term.termEn}
            </p>
          </div>

          {/* Definition Box */}
          <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6 mb-8">
            <h2 className="text-sm font-medium text-[#10b981] mb-2 uppercase tracking-wide">
              Definition
            </h2>
            <p className="text-xl text-white font-medium">
              {term.definition}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Explanation</h2>
            <p className="text-[#ADADB0] leading-relaxed whitespace-pre-wrap">
              {term.description}
            </p>
          </div>

          {/* Example */}
          {term.example && (
            <div className="bg-[#0F1419] border border-[#1F1F23] rounded-xl p-6 mb-8">
              <h2 className="text-sm font-medium text-[#f59e0b] mb-3 uppercase tracking-wide">
                Example
              </h2>
              <p className="text-white font-mono text-sm">
                {term.example}
              </p>
            </div>
          )}

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <div className="border-t border-[#1F1F23] pt-8">
              <h2 className="text-lg font-semibold text-white mb-4">Related Terms</h2>
              <div className="flex flex-wrap gap-3">
                {relatedTerms.map(related => (
                  <Link
                    key={related.slug}
                    href={`/glossary/${related.slug}`}
                    className="px-4 py-2 bg-[#111113] border border-[#1F1F23] rounded-lg text-sm text-[#ADADB0] hover:text-white hover:border-[#10b981] transition-colors"
                  >
                    {related.term}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-[#1F1F23]">
            <Link
              href="/glossary"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← Back to Glossary
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
