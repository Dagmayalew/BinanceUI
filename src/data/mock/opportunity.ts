export const opportunityData = {
  tabs: ['Market', 'Social Echo', 'Coin Radar', 'Top Mover', 'EX'],
  todayMarket: {
    title: "Today's Market",
    summary: 'Market sentiment is in Fear territory, indicating caution. ETF flows show volatility.',
  },
  markets: [
    { id: 'btc', symbol: 'BTC', price: 63021.22, change: 2.4 },
    { id: 'eth', symbol: 'ETH', price: 3412.67, change: -1.2 },
  ],
  fearGreed: {
    value: 68,
    label: 'Greed',
  },
  btcValuation: {
    score: 0.83,
    label: 'Regular Investing',
  },
  etfFundFlow: {
    inflow: 109.01,
    outflow: 101.4,
    totalNetAssets: 154.11,
  },
};
