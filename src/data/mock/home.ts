export const homeData = {
  exchangeTabs: ['Exchange', 'Wallet'],
  searchHint: '#KlinkBinanceTGE',
  totalValueBtc: '0.0001084',
  totalValueUsd: 13.49,
  todayPnl: -0.00000073,
  todayPnlPct: -0.09,
  earnRate: '20.00%',
  earnCurrency: 'USDT',
  markets: [
    { id: 'bnb', symbol: 'BNB', price: 1219.61, changePct: 3.56, token: 'B', tokenColor: '#F0B90B' },
    { id: 'p2p', symbol: 'USDT/USD', price: 0.997, changePct: 0, token: 'T', tokenColor: '#16A34A' },
  ],
  features: [
    { id: 'fear', title: 'Fear & Greed', subtitle: 'Index', type: 'gauge' as const },
    { id: 'send', title: 'Send Cash', subtitle: 'Send Crypto and\nBuy Crypto', type: 'text' as const },
  ],
};
