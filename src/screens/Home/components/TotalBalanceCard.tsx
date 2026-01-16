import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';
import { formatCurrency } from '../../../utils/format';

export function TotalBalanceCard({
  totalBtc,
  totalUsd,
  todayPnl,
  todayPnlPct,
}: {
  totalBtc: string;
  totalUsd: number;
  todayPnl: number;
  todayPnlPct: number;
}) {
  const pnlPositive = todayPnl >= 0;
  const sign = pnlPositive ? '+' : '';
  return (
    <Card style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>Est. Total Value (BTC)</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
          <Text style={styles.actionText}>Add Funds</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.value}>{totalBtc}</Text>
      <Text style={styles.subtle}>{formatCurrency(totalUsd)}</Text>
      <View style={styles.pnlRow}>
        <Text style={styles.pnlLabel}>Today's PNL</Text>
        <Text style={[styles.pnlValue, pnlPositive ? styles.pnlPositive : styles.pnlNegative]}>
          {sign}{todayPnl.toFixed(8)} ({sign}{todayPnlPct.toFixed(2)}%)
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: spacing.xl,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
    fontFamily: typography.fontFamily.medium,
  },
  value: {
    fontSize: typography.size.xxl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginTop: spacing.sm,
  },
  subtle: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  pnlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  pnlLabel: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginRight: spacing.sm,
  },
  pnlValue: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
  },
  pnlPositive: {
    color: colors.green,
  },
  pnlNegative: {
    color: colors.red,
  },
  actionButton: {
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  actionText: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
});
