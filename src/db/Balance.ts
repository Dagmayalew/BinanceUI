import { Model } from '@nozbe/watermelondb';
import { field, date } from '@nozbe/watermelondb/decorators';

export default class Balance extends Model {
  static table = 'balances';

  @field('total_btc') totalBtc!: number;
  @field('total_usd') totalUsd!: number;
  @field('today_pnl') todayPnl!: number;
  @field('today_pnl_pct') todayPnlPct!: number;
  @field('btc_rate') btcRate!: number;
  @date('updated_at') updatedAt!: Date;
}
