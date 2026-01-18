import { Q } from '@nozbe/watermelondb';
import { database } from './index';
import Message from './Message';

const collection = database.collections.get<Message>('messages');

export async function getMessages(): Promise<Message[]> {
  return collection.query(Q.sortBy('created_at', Q.asc)).fetch();
}

export async function addMessage(text: string, sender: 'me' | 'support') {
  await database.write(async () => {
    await collection.create((record) => {
      record.text = text;
      record.sender = sender;
      record.createdAt = new Date();
      record.isRead = sender === 'me';
    });
  });
}

export async function seedMockConversation() {
  const existing = await collection.query().fetchCount();
  if (existing > 0) {
    return;
  }
  await addMessage('welcome to binance', 'support');
}

export async function getSupportCount(): Promise<number> {
  return collection.query(Q.where('sender', 'support'), Q.where('is_read', false)).fetchCount();
}

export async function markSupportAsRead() {
  const unread = await collection.query(Q.where('sender', 'support'), Q.where('is_read', false)).fetch();
  if (unread.length === 0) {
    return;
  }
  await database.write(async () => {
    await Promise.all(
      unread.map((record) =>
        record.update((model) => {
          model.isRead = true;
        })
      )
    );
  });
}
