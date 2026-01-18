import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema';
import { migrations } from './migrations';
import Balance from './Balance';
import Message from './Message';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
});

export const database = new Database({
  adapter,
  modelClasses: [Balance, Message],
});
