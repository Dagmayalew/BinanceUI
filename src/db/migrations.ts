import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        {
          type: 'create_table',
          schema: {
            name: 'messages',
            columns: [
              { name: 'text', type: 'string' },
              { name: 'sender', type: 'string' },
              { name: 'created_at', type: 'number' },
            ],
          },
        },
      ],
    },
    {
      toVersion: 3,
      steps: [
        {
          type: 'add_columns',
          table: 'messages',
          columns: [{ name: 'is_read', type: 'boolean', isOptional: true }],
        },
      ],
    },
  ],
});
