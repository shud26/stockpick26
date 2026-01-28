'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { glossaryTerms, categories } from '@/data/glossary';

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;

    if (selectedCategory) {
      terms = terms.filter(t => t.category === selectedCategory);
    }

    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.termEn.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      );
    }

    return terms;
  }, [search, selectedCategory]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1F1F23] bg-[#0A0A0B]/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-[#10b981] transition-colors">
            StockPick26
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/glossary" className="text-sm text-white font-medium">
              Glossary
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Stock Market Glossary
            </h1>
            <p className="text-[#8B8B90]">
              {glossaryTerms.length} essential terms explained in plain English
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 bg-[#111113] border border-[#1F1F23] rounded-xl text-white placeholder-[#6B6B70] focus:outline-none focus:border-[#10b981] transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-[#10b981] text-white'
                  : 'bg-[#111113] text-[#8B8B90] hover:text-white border border-[#1F1F23]'
              }`}
            >
              All
            </button>
            {Object.entries(categories).map(([key, { label, color }]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === key
                    ? 'bg-[#10b981] text-white'
                    : 'bg-[#111113] text-[#8B8B90] hover:text-white border border-[#1F1F23]'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-[#6B6B70] text-sm mb-6">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
          </p>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredTerms.map(term => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="bg-[#111113] border border-[#1F1F23] rounded-xl p-5 hover:border-[#10b981] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: categories[term.category]?.color }}
                  />
                  <h2 className="text-white font-semibold group-hover:text-[#10b981] transition-colors">
                    {term.term}
                  </h2>
                  <span className="text-[11px] text-[#6B6B70] font-mono">{term.termEn}</span>
                </div>
                <p className="text-[13px] text-[#ADADB0] leading-relaxed">
                  {term.definition}
                </p>
              </Link>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B6B70]">No terms found matching your search.</p>
            </div>
          )}
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
