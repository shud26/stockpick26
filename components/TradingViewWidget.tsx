'use client';

interface Props {
  symbol: string;       // e.g. "KRX:039490" or "NASDAQ:INTC"
  name: string;
  height?: number;
  theme?: 'light' | 'dark';
}

export function TradingViewWidget({ symbol, name }: Props) {
  const url = `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.6rem 1rem',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        fontSize: '0.82rem',
        color: '#374151',
        textDecoration: 'none',
        width: 'fit-content',
        marginTop: '0.75rem',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
      {name} 차트 보기 (TradingView)
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}
