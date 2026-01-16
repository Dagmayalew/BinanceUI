import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { Chip } from '../../../components/ui/Chip';
import { colors, spacing, typography } from '../../../theme';
import { formatCurrency } from '../../../utils/format';

export function MarketMiniCards({
  markets,
}: {
  markets: { id: string; symbol: string; price: number; change: number }[];
}) {
  return (
    <View style={styles.row}>
      {markets.map((market, index) => {
        const tone = market.change >= 0 ? 'positive' : 'negative';
        const sign = market.change >= 0 ? '+' : '';
        return (
          <Card key={market.id} style={[styles.card, index === markets.length - 1 ? null : styles.cardSpacing]}>
            <Text style={styles.symbol}>{market.symbol}</Text>
            <Text style={styles.price}>{formatCurrency(market.price)}</Text>
            <Chip label={`${sign}${market.change.toFixed(2)}%`} tone={tone} />
          </Card>
        );
      })}
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
  symbol: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  price: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginVertical: spacing.sm,
  },
});
