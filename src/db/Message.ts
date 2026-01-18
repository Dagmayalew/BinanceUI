import { Model } from '@nozbe/watermelondb';
import { field, date } from '@nozbe/watermelondb/decorators';

export default class Message extends Model {
  static table = 'messages';

  @field('text') text!: string;
  @field('sender') sender!: string;
  @field('is_read') isRead!: boolean;
  @date('created_at') createdAt!: Date;
}
