'use client';

import { useEffect, useRef } from 'react';

interface Props {
  symbol: string;
  height?: number;
  theme?: 'light' | 'dark';
}

export function TradingViewWidget({ symbol, height = 300, theme = 'light' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: 'D',
      timezone: 'Asia/Seoul',
      theme,
      style: '1',
      locale: 'kr',
      backgroundColor: theme === 'light' ? '#ffffff' : '#111113',
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      calendar: false,
      studies: ['RSI@tv-basicstudies', 'MASimple@tv-basicstudies'],
      support_host: 'https://www.tradingview.com',
    });

    const wrapper = document.createElement('div');
    wrapper.className = 'tradingview-widget-container__widget';
    wrapper.style.height = `${height}px`;
    container.appendChild(wrapper);
    container.appendChild(script);
  }, [symbol, height]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container rounded-xl overflow-hidden"
      style={{ height }}
    />
  );
}
