import { create } from 'zustand';
import { fetchBalance } from '../data/api/balance';
import { getBalanceRecord, upsertBalance } from '../db/balanceRepo';

type BalanceState = {
  totalBtc: number;
  totalUsd: number;
  todayPnl: number;
  todayPnlPct: number;
  btcRate: number;
  loading: boolean;
  init: () => Promise<void>;
  fetchBalance: () => Promise<void>;
  addFunds: (amountUsd?: number) => void;
};

export const useBalanceStore = create<BalanceState>((set, get) => ({
  totalBtc: 0,
  totalUsd: 0,
  todayPnl: 0,
  todayPnlPct: 0,
  btcRate: 0,
  loading: false,
  init: async () => {
    const record = await getBalanceRecord();
    if (!record) {
      return;
    }
    set({
      totalBtc: record.totalBtc,
      totalUsd: record.totalUsd,
      todayPnl: record.todayPnl,
      todayPnlPct: record.todayPnlPct,
      btcRate: record.btcRate,
    });
  },
  fetchBalance: async () => {
    set({ loading: true });
    const data = await fetchBalance();
    await upsertBalance(data);
    set({ ...data, loading: false });
  },
  addFunds: (amountUsd = 100) => {
    const { totalUsd, totalBtc, btcRate } = get();
    const rate = btcRate || 100000;
    const nextUsd = totalUsd + amountUsd;
    const nextBtc = totalBtc + amountUsd / rate;
    set({ totalUsd: nextUsd, totalBtc: nextBtc });
    void upsertBalance({
      totalUsd: nextUsd,
      totalBtc: nextBtc,
      todayPnl: get().todayPnl,
      todayPnlPct: get().todayPnlPct,
      btcRate: rate,
    });
  },
}));
