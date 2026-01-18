import { database } from './index';
import Balance from './Balance';

const collection = database.collections.get<Balance>('balances');

export async function getBalanceRecord(): Promise<Balance | null> {
  try {
    const record = await collection.find('balance');
    return record;
  } catch {
    return null;
  }
}

export async function upsertBalance(data: {
  totalBtc: number;
  totalUsd: number;
  todayPnl: number;
  todayPnlPct: number;
  btcRate: number;
}) {
  await database.write(async () => {
    const existing = await getBalanceRecord();
    if (existing) {
      await existing.update((record) => {
        record.totalBtc = data.totalBtc;
        record.totalUsd = data.totalUsd;
        record.todayPnl = data.todayPnl;
        record.todayPnlPct = data.todayPnlPct;
        record.btcRate = data.btcRate;
        record.updatedAt = new Date();
      });
      return;
    }

    await collection.create((record) => {
      record._raw.id = 'balance';
      record.totalBtc = data.totalBtc;
      record.totalUsd = data.totalUsd;
      record.todayPnl = data.todayPnl;
      record.todayPnlPct = data.todayPnlPct;
      record.btcRate = data.btcRate;
      record.updatedAt = new Date();
    });
  });
}
