export interface GlossaryTerm {
  slug: string;
  term: string;
  termEn: string;
  definition: string;
  description: string;
  example?: string;
  category: 'basic' | 'indicator' | 'trading' | 'dividend' | 'analysis' | 'market';
  relatedTerms?: string[];
}

export const categories: Record<string, { label: string; color: string }> = {
  basic: { label: 'Basic Concepts', color: '#3b82f6' },
  indicator: { label: 'Valuation Metrics', color: '#8b5cf6' },
  trading: { label: 'Trading', color: '#ef4444' },
  dividend: { label: 'Dividends', color: '#22c55e' },
  analysis: { label: 'Analysis', color: '#f59e0b' },
  market: { label: 'Market & Structure', color: '#06b6d4' },
};

export const glossaryTerms: GlossaryTerm[] = [
  // === Basic Concepts ===
  {
    slug: 'stock',
    term: 'Stock',
    termEn: 'Share / Equity',
    definition: 'A security representing ownership in a corporation',
    description: 'When you buy a stock, you become a part-owner (shareholder) of that company. If the company makes money, you may receive dividends. If the stock price rises, you can sell for a profit. Companies issue stocks to raise capital, and investors trade them on stock exchanges.',
    example: 'Buying 1 share of Apple = owning a tiny piece of Apple Inc.',
    category: 'basic',
    relatedTerms: ['shareholder', 'dividend', 'capital-gain'],
  },
  {
    slug: 'shareholder',
    term: 'Shareholder',
    termEn: 'Stockholder',
    definition: 'A person or entity that owns shares in a company',
    description: 'If you own even one share, you\'re a shareholder. Shareholders have voting rights at annual meetings and may receive dividends when the company distributes profits. The more shares you own, the greater your influence on company decisions.',
    example: 'Owning 100 shares of Microsoft = You\'re a Microsoft shareholder',
    category: 'basic',
    relatedTerms: ['stock', 'dividend', 'voting-rights'],
  },
  {
    slug: 'ipo',
    term: 'IPO',
    termEn: 'Initial Public Offering',
    definition: 'When a private company first sells shares to the public',
    description: 'An IPO is when a private company lists its shares on a stock exchange, allowing anyone to buy and sell them. Companies use IPOs to raise large amounts of capital. Investors get the opportunity to invest early in potentially high-growth companies. You can participate through IPO subscriptions.',
    example: 'Airbnb IPO: December 2020, opened at $146 per share',
    category: 'market',
    relatedTerms: ['listing', 'public-offering'],
  },
  {
    slug: 'market-cap',
    term: 'Market Cap',
    termEn: 'Market Capitalization',
    definition: 'Stock Price × Total Shares Outstanding = Company\'s market value',
    description: 'Market capitalization is the total value of a company as determined by the stock market. It\'s calculated by multiplying the current stock price by the total number of outstanding shares. Large-cap (>$10B), mid-cap ($2B-$10B), and small-cap (<$2B) classify companies by size.',
    example: 'Stock price $150 × 16 billion shares = $2.4 trillion market cap (Apple)',
    category: 'basic',
    relatedTerms: ['stock-price', 'large-cap'],
  },
  {
    slug: 'sp500',
    term: 'S&P 500',
    termEn: 'Standard & Poor\'s 500',
    definition: 'An index of 500 largest US publicly traded companies',
    description: 'The S&P 500 is one of the most widely followed stock market indices. It includes 500 of the largest companies listed on US stock exchanges, weighted by market capitalization. It\'s considered the best single gauge of large-cap US equities and represents about 80% of total US market value.',
    example: 'S&P 500 at 5,000 = roughly 50x increase since its 1957 start',
    category: 'market',
    relatedTerms: ['nasdaq', 'index', 'dow-jones'],
  },
  {
    slug: 'nasdaq',
    term: 'NASDAQ',
    termEn: 'National Association of Securities Dealers Automated Quotations',
    definition: 'A stock exchange known for technology and growth companies',
    description: 'NASDAQ is the second-largest stock exchange globally by market cap. It\'s known for listing technology giants like Apple, Microsoft, Amazon, and Google. The NASDAQ Composite index tracks all stocks listed on the NASDAQ exchange, while NASDAQ-100 tracks the 100 largest non-financial companies.',
    category: 'market',
    relatedTerms: ['sp500', 'index'],
  },

  // === Valuation Metrics ===
  {
    slug: 'per',
    term: 'P/E Ratio',
    termEn: 'Price to Earnings Ratio',
    definition: 'Stock Price ÷ Earnings Per Share = How many years of earnings equal the price',
    description: 'The P/E ratio shows how much investors are willing to pay for each dollar of earnings. A P/E of 20 means you\'re paying $20 for every $1 of annual profit. Lower P/E might indicate undervaluation, higher P/E could mean overvaluation—but different industries have different "normal" P/E ranges.',
    example: 'Stock price $100, EPS $5 → P/E = 20x',
    category: 'indicator',
    relatedTerms: ['eps', 'pbr', 'valuation'],
  },
  {
    slug: 'pbr',
    term: 'P/B Ratio',
    termEn: 'Price to Book Ratio',
    definition: 'Stock Price ÷ Book Value Per Share = How many times book value',
    description: 'The P/B ratio compares stock price to the company\'s net asset value (assets minus liabilities). A P/B below 1 means the stock trades below its book value—theoretically, you could liquidate the company and get more than you paid. Popular for valuing banks and asset-heavy industries.',
    example: 'P/B 0.8 = Stock trades at 20% discount to book value',
    category: 'indicator',
    relatedTerms: ['per', 'bps', 'valuation'],
  },
  {
    slug: 'eps',
    term: 'EPS',
    termEn: 'Earnings Per Share',
    definition: 'Net Income ÷ Shares Outstanding = Profit per share',
    description: 'EPS tells you how much profit a company made for each share of stock. Higher EPS generally means better profitability. Comparing EPS growth year-over-year shows whether the company\'s earnings are improving. It\'s the "E" in P/E ratio.',
    example: 'Net income $10 billion ÷ 1 billion shares = EPS $10',
    category: 'indicator',
    relatedTerms: ['per', 'net-income'],
  },
  {
    slug: 'roe',
    term: 'ROE',
    termEn: 'Return on Equity',
    definition: 'Net Income ÷ Shareholders\' Equity × 100 = Return on invested capital',
    description: 'ROE shows how efficiently a company generates profit from shareholders\' investment. An ROE of 15% means for every $100 of shareholders\' equity, the company earned $15 in profit. Warren Buffett famously looks for companies with ROE above 15%. Higher is generally better.',
    example: 'ROE 20% = $200 million profit on $1 billion equity',
    category: 'indicator',
    relatedTerms: ['eps', 'net-income', 'equity'],
  },
  {
    slug: 'bps',
    term: 'BPS',
    termEn: 'Book Value Per Share',
    definition: 'Net Assets ÷ Shares Outstanding = Asset value per share',
    description: 'BPS represents the per-share value of a company\'s net assets (total assets minus total liabilities). Theoretically, if the company liquidated, each share would be worth this amount. It\'s used to calculate P/B ratio.',
    example: 'Net assets $100 billion ÷ 1 billion shares = BPS $100',
    category: 'indicator',
    relatedTerms: ['pbr', 'equity'],
  },
  {
    slug: 'dividend-yield',
    term: 'Dividend Yield',
    termEn: 'Annual Dividend / Stock Price',
    definition: 'Annual Dividend Per Share ÷ Stock Price × 100 = Income return',
    description: 'Dividend yield shows the annual return from dividends as a percentage of the stock price. A 4% yield means $1,000 invested gives you $40 per year in dividends. Compare this to bank savings rates to evaluate the income potential of dividend stocks.',
    example: 'Stock price $50, annual dividend $2 → Dividend yield 4%',
    category: 'dividend',
    relatedTerms: ['dividend', 'dividend-payout-ratio'],
  },
  {
    slug: 'peg',
    term: 'PEG Ratio',
    termEn: 'Price/Earnings to Growth',
    definition: 'P/E Ratio ÷ EPS Growth Rate = Growth-adjusted valuation',
    description: 'The PEG ratio adjusts P/E for earnings growth. A high P/E might be justified if the company is growing fast. PEG below 1 suggests undervaluation relative to growth, above 1 suggests overvaluation. It helps compare stocks with different growth rates.',
    example: 'P/E 30, EPS growth 30% → PEG = 1.0 (fairly valued)',
    category: 'indicator',
    relatedTerms: ['per', 'eps'],
  },

  // === Trading ===
  {
    slug: 'buy',
    term: 'Buy',
    termEn: 'Long / Purchase',
    definition: 'Purchasing shares of a stock',
    description: 'Buying is the act of purchasing stock shares. You buy when you expect the price to rise. You can use a limit order (specify your price) or market order (buy at current price immediately).',
    category: 'trading',
    relatedTerms: ['sell', 'order', 'limit-order'],
  },
  {
    slug: 'sell',
    term: 'Sell',
    termEn: 'Exit Position',
    definition: 'Disposing of shares you own',
    description: 'Selling is the act of disposing your stock holdings. You might sell when you\'ve reached your profit target, to cut losses, or to reallocate funds to other investments.',
    category: 'trading',
    relatedTerms: ['buy', 'order', 'profit-taking'],
  },
  {
    slug: 'short-selling',
    term: 'Short Selling',
    termEn: 'Shorting',
    definition: 'Borrowing shares to sell now and buy back later at a lower price',
    description: 'Short selling is betting that a stock will decline. You borrow shares from your broker, sell them at the current price, then buy them back later (hopefully cheaper) to return. If the price drops, you profit from the difference. If it rises, you lose money. It\'s risky because losses are theoretically unlimited.',
    example: 'Short at $100 → Buy back at $80 → $20 profit per share',
    category: 'trading',
    relatedTerms: ['margin-trading'],
  },
  {
    slug: 'limit-order',
    term: 'Limit Order',
    termEn: 'Specified Price Order',
    definition: 'An order to buy/sell at a specific price or better',
    description: 'A limit order lets you set the exact price at which you want to trade. It only executes if the market reaches your price. This gives you price control but doesn\'t guarantee execution if the price never reaches your limit.',
    example: 'Buy limit $145 for Apple → Only fills at $145 or lower',
    category: 'trading',
    relatedTerms: ['market-order', 'buy', 'sell'],
  },
  {
    slug: 'market-order',
    term: 'Market Order',
    termEn: 'Immediate Execution',
    definition: 'An order to buy/sell immediately at the current market price',
    description: 'A market order executes immediately at the best available price. It guarantees execution but not price. During high volatility, you might get a worse price than expected (slippage). Use caution during market opens or during news events.',
    category: 'trading',
    relatedTerms: ['limit-order', 'slippage'],
  },
  {
    slug: 'capital-gain',
    term: 'Capital Gain',
    termEn: 'Price Appreciation',
    definition: 'Profit from selling an asset for more than you paid',
    description: 'A capital gain occurs when you sell a stock for more than your purchase price. Buy at $50, sell at $75 = $25 capital gain. Along with dividends, capital gains are the two main ways to make money from stocks. Note: capital gains may be taxed.',
    example: 'Buy at $100 → Sell at $150 = $50 capital gain',
    category: 'trading',
    relatedTerms: ['dividend', 'profit-taking'],
  },
  {
    slug: 'stop-loss',
    term: 'Stop-Loss',
    termEn: 'Loss Cut',
    definition: 'Selling to limit losses when price falls to a set level',
    description: 'A stop-loss is a predetermined exit point to prevent larger losses. For example, setting a 10% stop-loss means you\'ll sell if the stock drops 10%. Sticking to your stop-loss rules removes emotional decision-making. "Cut your losses short, let your winners run."',
    example: 'Buy at $100, set stop-loss at $90 → Auto-sell if price hits $90',
    category: 'trading',
    relatedTerms: ['profit-taking'],
  },
  {
    slug: 'profit-taking',
    term: 'Profit Taking',
    termEn: 'Take Profit',
    definition: 'Selling to lock in gains when price reaches target',
    description: 'Profit taking means selling your position when you\'ve reached your target return. This locks in gains before the price potentially reverses. Many traders set profit targets in advance and execute mechanically to avoid greed-driven decisions.',
    example: 'Target: 20% gain → Sell half position when target reached',
    category: 'trading',
    relatedTerms: ['stop-loss', 'capital-gain'],
  },

  // === Dividends ===
  {
    slug: 'dividend',
    term: 'Dividend',
    termEn: 'Cash Distribution',
    definition: 'A portion of company profits paid to shareholders',
    description: 'Dividends are cash payments companies make to shareholders from their profits. Most dividend-paying companies distribute quarterly. To receive a dividend, you must own the stock before the ex-dividend date. Companies with consistent dividends are called "dividend stocks."',
    example: 'Coca-Cola pays ~$1.84 per share annually (as of 2024)',
    category: 'dividend',
    relatedTerms: ['dividend-yield', 'ex-dividend-date', 'dividend-stock'],
  },
  {
    slug: 'ex-dividend-date',
    term: 'Ex-Dividend Date',
    termEn: 'Ex-Date',
    definition: 'The cutoff date—buy before this to receive the upcoming dividend',
    description: 'To receive a dividend, you must buy the stock before the ex-dividend date. On the ex-date, the stock typically drops by approximately the dividend amount since new buyers won\'t receive that payment.',
    example: 'Ex-date March 15 → Must buy by March 14 to get dividend',
    category: 'dividend',
    relatedTerms: ['dividend', 'record-date'],
  },
  {
    slug: 'dividend-payout-ratio',
    term: 'Payout Ratio',
    termEn: 'Dividend Payout Ratio',
    definition: 'Dividends ÷ Net Income × 100 = Percentage of earnings paid as dividends',
    description: 'The payout ratio shows what percentage of earnings goes to dividends. A 30% payout ratio means 30 cents of every dollar earned goes to shareholders. Too high (>80%) might be unsustainable; too low might mean poor shareholder returns.',
    example: 'Net income $1B, dividends $300M → Payout ratio 30%',
    category: 'dividend',
    relatedTerms: ['dividend', 'dividend-yield'],
  },
  {
    slug: 'dividend-stock',
    term: 'Dividend Stock',
    termEn: 'Income Stock',
    definition: 'Stocks that consistently pay dividends',
    description: 'Dividend stocks are shares of companies that regularly distribute profits to shareholders. Common in utilities, telecommunications, and financial sectors. Ideal for investors seeking steady income rather than growth. "Dividend Aristocrats" are S&P 500 companies that have increased dividends for 25+ consecutive years.',
    example: 'Johnson & Johnson, Procter & Gamble, AT&T',
    category: 'dividend',
    relatedTerms: ['dividend', 'dividend-yield'],
  },

  // === Analysis ===
  {
    slug: 'fundamental-analysis',
    term: 'Fundamental Analysis',
    termEn: 'Value Investing Analysis',
    definition: 'Evaluating a stock by analyzing financial statements and business model',
    description: 'Fundamental analysis examines a company\'s intrinsic value by studying revenue, earnings, debt, growth potential, and competitive position. If the current price is below intrinsic value, it\'s a buy; if above, it\'s a sell. This approach is favored by long-term investors like Warren Buffett.',
    category: 'analysis',
    relatedTerms: ['technical-analysis', 'per', 'roe'],
  },
  {
    slug: 'technical-analysis',
    term: 'Technical Analysis',
    termEn: 'Chart Analysis',
    definition: 'Using price charts and patterns to predict future movements',
    description: 'Technical analysis uses historical price and volume data to forecast future price movements. It employs indicators like moving averages, RSI, and MACD. Rather than company fundamentals, it focuses on market psychology and supply/demand. Popular among short-term traders.',
    category: 'analysis',
    relatedTerms: ['fundamental-analysis', 'moving-average', 'chart'],
  },
  {
    slug: 'moving-average',
    term: 'Moving Average',
    termEn: 'MA / SMA / EMA',
    definition: 'Average price over a specific period, plotted on a chart',
    description: 'Moving averages smooth out price fluctuations to show trends. Common periods: 50-day (short-term), 200-day (long-term). Price above the MA suggests uptrend; below suggests downtrend. When short-term MA crosses above long-term MA, it\'s called a "golden cross" (bullish signal).',
    example: '50-day MA crosses above 200-day MA = Golden Cross (buy signal)',
    category: 'analysis',
    relatedTerms: ['technical-analysis', 'golden-cross'],
  },
  {
    slug: 'golden-cross',
    term: 'Golden Cross',
    termEn: 'Bullish Crossover',
    definition: 'When short-term moving average crosses above long-term MA',
    description: 'A golden cross is a bullish technical signal where the 50-day moving average crosses above the 200-day moving average. It suggests the trend is turning upward. The opposite—when short-term crosses below long-term—is called a "death cross" (bearish signal).',
    example: '50-day MA crosses above 200-day MA = Golden Cross',
    category: 'analysis',
    relatedTerms: ['moving-average', 'dead-cross'],
  },
  {
    slug: 'support-resistance',
    term: 'Support & Resistance',
    termEn: 'Price Levels',
    definition: 'Price levels where stocks tend to stop and reverse',
    description: 'Support is a price level where demand is strong enough to prevent further decline—the price "bounces." Resistance is where selling pressure prevents further rise—the price "hits a ceiling." These levels are based on historical price action and are key to technical trading strategies.',
    example: '$150 tested 3 times without breaking = Strong resistance',
    category: 'analysis',
    relatedTerms: ['technical-analysis', 'breakout'],
  },

  // === Market & Structure ===
  {
    slug: 'bull-market',
    term: 'Bull Market',
    termEn: 'Rising Market',
    definition: 'A market condition where prices are rising or expected to rise',
    description: 'A bull market is typically defined as a 20%+ rise from recent lows. Investor sentiment is optimistic, and buying activity is strong. Named after how a bull attacks—thrusting its horns upward. Bull markets can last months to years.',
    category: 'market',
    relatedTerms: ['bear-market'],
  },
  {
    slug: 'bear-market',
    term: 'Bear Market',
    termEn: 'Declining Market',
    definition: 'A market condition where prices are falling or expected to fall',
    description: 'A bear market is typically defined as a 20%+ drop from recent highs. Investor sentiment is pessimistic, and selling pressure dominates. Named after how a bear attacks—swiping its paws downward. Bear markets can be opportunities to buy quality stocks at discounts.',
    category: 'market',
    relatedTerms: ['bull-market'],
  },
  {
    slug: 'circuit-breaker',
    term: 'Circuit Breaker',
    termEn: 'Trading Halt',
    definition: 'Automatic trading pause when markets fall sharply',
    description: 'Circuit breakers halt trading when major indices drop by set percentages (7%, 13%, 20% for S&P 500). They\'re designed to prevent panic selling and give investors time to assess the situation. They were famously triggered during the March 2020 COVID crash.',
    example: 'S&P 500 drops 7% → Trading halts for 15 minutes',
    category: 'market',
    relatedTerms: ['volatility'],
  },
  {
    slug: 'blue-chip',
    term: 'Blue Chip',
    termEn: 'Large-Cap Quality Stock',
    definition: 'Shares of large, well-established, financially sound companies',
    description: 'Blue chips are stocks of industry-leading companies with strong financials, stable earnings, and often consistent dividends. Examples include Apple, Microsoft, and Johnson & Johnson. The term comes from poker, where blue chips have the highest value. They\'re considered safer but may have slower growth.',
    example: 'Apple, Microsoft, Berkshire Hathaway, JPMorgan Chase',
    category: 'market',
    relatedTerms: ['large-cap', 'market-cap'],
  },
  {
    slug: 'penny-stock',
    term: 'Penny Stock',
    termEn: 'Micro-Cap Stock',
    definition: 'Very low-priced shares, typically under $5',
    description: 'Penny stocks trade at very low prices, usually under $5 per share. They\'re often from small, unproven companies with limited financial history. While they can offer explosive gains, they\'re highly speculative with risks of fraud, manipulation, and total loss. Not for beginners.',
    category: 'market',
    relatedTerms: ['blue-chip'],
  },
  {
    slug: 'delisting',
    term: 'Delisting',
    termEn: 'Removed from Exchange',
    definition: 'When a stock is removed from a stock exchange',
    description: 'Delisting occurs when a company no longer meets exchange requirements—due to financial troubles, fraud, or going private. Delisted stocks can become nearly worthless and very difficult to sell. Warning signs include very low stock price, missed SEC filings, and trading below $1 for extended periods.',
    example: 'Stock trades below $1 for 30 days → Warning of potential delisting',
    category: 'market',
    relatedTerms: ['penny-stock'],
  },
  {
    slug: 'margin-trading',
    term: 'Margin Trading',
    termEn: 'Trading with Borrowed Money',
    definition: 'Borrowing money from your broker to buy stocks',
    description: 'Margin trading lets you buy more stock than you could with just your cash by borrowing from your broker. This amplifies both gains AND losses. If your position drops too much, you\'ll face a "margin call"—forced to deposit more money or have your positions liquidated. Very risky for beginners.',
    example: '$10,000 cash + $10,000 margin = $20,000 buying power',
    category: 'trading',
    relatedTerms: ['short-selling'],
  },
  {
    slug: 'etf',
    term: 'ETF',
    termEn: 'Exchange Traded Fund',
    definition: 'A fund that trades like a stock and tracks an index or sector',
    description: 'ETFs hold a basket of stocks and trade on exchanges like regular stocks. SPY tracks the S&P 500, QQQ tracks NASDAQ-100. ETFs offer instant diversification with low fees. If you can\'t pick individual stocks, buying broad market ETFs is a popular strategy.',
    example: 'SPY (S&P 500), QQQ (NASDAQ-100), VTI (Total US Market)',
    category: 'market',
    relatedTerms: ['index', 'diversification'],
  },
  {
    slug: 'index',
    term: 'Index',
    termEn: 'Market Benchmark',
    definition: 'A measurement of a section of the stock market',
    description: 'An index tracks the performance of a group of stocks. The S&P 500 measures large US companies, NASDAQ focuses on tech, and Dow Jones tracks 30 major industrials. Indices serve as benchmarks—if your portfolio beats the S&P 500, you\'re outperforming the market.',
    category: 'market',
    relatedTerms: ['sp500', 'nasdaq', 'etf'],
  },
];

// Get term by slug
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(t => t.slug === slug);
}

// Get related terms
export function getRelatedTerms(slugs: string[] = []): GlossaryTerm[] {
  return slugs
    .map(s => glossaryTerms.find(t => t.slug === s))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

// Search terms
export function searchTerms(query: string): GlossaryTerm[] {
  const q = query.toLowerCase();
  return glossaryTerms.filter(t =>
    t.term.toLowerCase().includes(q) ||
    t.termEn.toLowerCase().includes(q) ||
    t.definition.toLowerCase().includes(q)
  );
}

// Get terms by category
export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter(t => t.category === category);
}
