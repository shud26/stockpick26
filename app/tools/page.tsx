'use client';

import Link from 'next/link';
import { useState } from 'react';

// P/E Calculator
function PECalculator() {
  const [price, setPrice] = useState('');
  const [eps, setEps] = useState('');

  const pe = price && eps && parseFloat(eps) !== 0
    ? (parseFloat(price) / parseFloat(eps)).toFixed(2)
    : null;

  const getVerdict = (pe: number) => {
    if (pe < 10) return { text: 'Looks cheap, but dig deeper—there might be a reason.', color: '#22c55e' };
    if (pe < 20) return { text: 'Pretty reasonable for most industries.', color: '#10b981' };
    if (pe < 35) return { text: 'On the pricier side. Growth stock?', color: '#f59e0b' };
    return { text: 'That\'s expensive. Better be growing fast.', color: '#ef4444' };
  };

  return (
    <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-1">P/E Ratio Calculator</h3>
      <p className="text-[13px] text-[#6B6B70] mb-5">How expensive is this stock relative to its earnings?</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Stock Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="150.00"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">EPS (Earnings Per Share)</label>
          <input
            type="number"
            value={eps}
            onChange={(e) => setEps(e.target.value)}
            placeholder="6.50"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
      </div>

      {pe && (
        <div className="bg-[#0A0A0B] rounded-lg p-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-[#10b981]">{pe}x</span>
            <span className="text-[#6B6B70] text-sm">P/E Ratio</span>
          </div>
          <p className="text-sm" style={{ color: getVerdict(parseFloat(pe)).color }}>
            {getVerdict(parseFloat(pe)).text}
          </p>
        </div>
      )}
    </div>
  );
}

// Dividend Yield Calculator
function DividendCalculator() {
  const [price, setPrice] = useState('');
  const [dividend, setDividend] = useState('');
  const [shares, setShares] = useState('');

  const yieldPct = price && dividend && parseFloat(price) !== 0
    ? ((parseFloat(dividend) / parseFloat(price)) * 100).toFixed(2)
    : null;

  const annualIncome = dividend && shares
    ? (parseFloat(dividend) * parseFloat(shares)).toFixed(2)
    : null;

  return (
    <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-1">Dividend Yield Calculator</h3>
      <p className="text-[13px] text-[#6B6B70] mb-5">What&apos;s your income from dividends?</p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Stock Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="50.00"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Annual Dividend ($)</label>
          <input
            type="number"
            value={dividend}
            onChange={(e) => setDividend(e.target.value)}
            placeholder="2.00"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Shares Owned</label>
          <input
            type="number"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            placeholder="100"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
      </div>

      {(yieldPct || annualIncome) && (
        <div className="bg-[#0A0A0B] rounded-lg p-4 grid grid-cols-2 gap-4">
          {yieldPct && (
            <div>
              <span className="text-2xl font-bold text-[#22c55e]">{yieldPct}%</span>
              <p className="text-xs text-[#6B6B70]">Dividend Yield</p>
            </div>
          )}
          {annualIncome && (
            <div>
              <span className="text-2xl font-bold text-white">${annualIncome}</span>
              <p className="text-xs text-[#6B6B70]">Yearly Income</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Compound Interest Calculator
function CompoundCalculator() {
  const [initial, setInitial] = useState('');
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');

  const calculate = () => {
    if (!initial || !rate || !years) return null;

    const p = parseFloat(initial);
    const m = parseFloat(monthly) || 0;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    // FV = P(1+r)^n + PMT * (((1+r)^n - 1) / r)
    const fv = p * Math.pow(1 + r, n) + m * ((Math.pow(1 + r, n) - 1) / r);
    const totalContrib = p + (m * n);
    const earnings = fv - totalContrib;

    return { total: fv.toFixed(0), contributions: totalContrib.toFixed(0), earnings: earnings.toFixed(0) };
  };

  const result = calculate();

  return (
    <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-1">Compound Growth Calculator</h3>
      <p className="text-[13px] text-[#6B6B70] mb-5">See how your money grows over time</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Starting Amount ($)</label>
          <input
            type="number"
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
            placeholder="10000"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Monthly Add ($)</label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            placeholder="500"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Annual Return (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="10"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="20"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
      </div>

      {result && (
        <div className="bg-[#0A0A0B] rounded-lg p-4">
          <div className="mb-3">
            <span className="text-3xl font-bold text-[#10b981]">${parseInt(result.total).toLocaleString()}</span>
            <p className="text-xs text-[#6B6B70]">Future Value</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white">${parseInt(result.contributions).toLocaleString()}</span>
              <p className="text-xs text-[#6B6B70]">Your contributions</p>
            </div>
            <div>
              <span className="text-[#22c55e]">+${parseInt(result.earnings).toLocaleString()}</span>
              <p className="text-xs text-[#6B6B70]">Investment gains</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Position Size Calculator
function PositionSizeCalculator() {
  const [portfolio, setPortfolio] = useState('');
  const [riskPct, setRiskPct] = useState('');
  const [entry, setEntry] = useState('');
  const [stopLoss, setStopLoss] = useState('');

  const calculate = () => {
    if (!portfolio || !riskPct || !entry || !stopLoss) return null;

    const port = parseFloat(portfolio);
    const risk = parseFloat(riskPct) / 100;
    const entryPrice = parseFloat(entry);
    const stop = parseFloat(stopLoss);

    const riskAmount = port * risk;
    const riskPerShare = Math.abs(entryPrice - stop);
    const shares = Math.floor(riskAmount / riskPerShare);
    const positionValue = shares * entryPrice;

    return { shares, riskAmount: riskAmount.toFixed(0), positionValue: positionValue.toFixed(0) };
  };

  const result = calculate();

  return (
    <div className="bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-1">Position Size Calculator</h3>
      <p className="text-[13px] text-[#6B6B70] mb-5">How many shares should you buy?</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Portfolio Value ($)</label>
          <input
            type="number"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="50000"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Risk per Trade (%)</label>
          <input
            type="number"
            value={riskPct}
            onChange={(e) => setRiskPct(e.target.value)}
            placeholder="2"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Entry Price ($)</label>
          <input
            type="number"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="150"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
        <div>
          <label className="text-xs text-[#8B8B90] mb-1 block">Stop Loss ($)</label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="140"
            className="w-full px-3 py-2 bg-[#0A0A0B] border border-[#1F1F23] rounded-lg text-white placeholder-[#3A3A3E] focus:outline-none focus:border-[#10b981]"
          />
        </div>
      </div>

      {result && (
        <div className="bg-[#0A0A0B] rounded-lg p-4">
          <div className="mb-3">
            <span className="text-3xl font-bold text-[#10b981]">{result.shares}</span>
            <span className="text-[#6B6B70] text-sm ml-2">shares</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white">${parseInt(result.positionValue).toLocaleString()}</span>
              <p className="text-xs text-[#6B6B70]">Position size</p>
            </div>
            <div>
              <span className="text-[#ef4444]">${result.riskAmount}</span>
              <p className="text-xs text-[#6B6B70]">Max loss if stopped out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ToolsPage() {
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
            <Link href="/tools" className="text-sm text-white font-medium">
              Tools
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Stock Calculators
            </h1>
            <p className="text-[#8B8B90]">
              Quick tools to help with your investment decisions
            </p>
          </div>

          {/* Calculators Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <PECalculator />
            <DividendCalculator />
            <CompoundCalculator />
            <PositionSizeCalculator />
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-[#111113] border border-[#1F1F23] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Tips</h2>
            <ul className="space-y-3 text-[#ADADB0] text-sm">
              <li className="flex gap-2">
                <span className="text-[#10b981]">•</span>
                <span><strong className="text-white">P/E Ratio:</strong> Compare it to other companies in the same industry, not across different sectors.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">•</span>
                <span><strong className="text-white">Dividend Yield:</strong> Higher isn&apos;t always better—super high yields can be a warning sign.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">•</span>
                <span><strong className="text-white">Compound Growth:</strong> S&P 500 has averaged about 10% annually over the long run.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">•</span>
                <span><strong className="text-white">Position Sizing:</strong> Most traders risk 1-2% per trade. Never bet the farm on one stock.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-[#6B6B70] text-sm mb-4">Need to look up a term?</p>
            <Link
              href="/glossary"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              Browse the Glossary →
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
              <Link href="/tools" className="hover:text-[#10b981] transition-colors">Tools</Link>
              <Link href="/privacy" className="hover:text-[#10b981] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
