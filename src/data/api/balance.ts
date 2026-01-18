export type BalanceResponse = {
  totalBtc: number;
  totalUsd: number;
  todayPnl: number;
  todayPnlPct: number;
  btcRate: number;
};

export async function fetchBalance(): Promise<BalanceResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalBtc: 0.0001084,
        totalUsd: 13.49,
        todayPnl: -0.00000073,
        todayPnlPct: -0.09,
        btcRate: 124500,
      });
    }, 400);
  });
}
