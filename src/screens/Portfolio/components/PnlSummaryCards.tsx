import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function PnlSummaryCards({
  items,
}: {
  items: { id: string; label: string; value: string; tone?: 'positive' | 'negative' | 'neutral' }[];
}) {
  return (
    <View style={styles.row}>
      {items.map((item, index) => (
        <Card key={item.id} style={[styles.card, index === items.length - 1 ? null : styles.cardSpacing]}>
          <Text style={styles.label}>{item.label}</Text>
          <Text
            style={[
              styles.value,
              item.tone === 'positive' && styles.positive,
              item.tone === 'negative' && styles.negative,
            ]}
          >
            {item.value}
          </Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    paddingVertical: spacing.lg,
  },
  cardSpacing: {
    marginRight: spacing.md,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  value: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginTop: spacing.sm,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
});
