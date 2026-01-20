import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: 'balances',
      columns: [
        { name: 'total_btc', type: 'number' },
        { name: 'total_usd', type: 'number' },
        { name: 'today_pnl', type: 'number' },
        { name: 'today_pnl_pct', type: 'number' },
        { name: 'btc_rate', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'messages',
      columns: [
        { name: 'text', type: 'string' },
        { name: 'sender', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'is_read', type: 'boolean' },
      ],
    }),
  ],
});
