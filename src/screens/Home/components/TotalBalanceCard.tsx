import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';
import { formatCurrency } from '../../../utils/format';

export function TotalBalanceCard({
  totalBtc,
  totalUsd,
  todayPnl,
  todayPnlPct,
  onAddFunds,
}: {
  totalBtc: number;
  totalUsd: number;
  todayPnl: number;
  todayPnlPct: number;
  onAddFunds?: () => void;
}) {
  const pnlPositive = todayPnl >= 0;
  const sign = pnlPositive ? '+' : '';
  return (
    <Card style={styles.card}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Est. Total Value (BTC)</Text>
        <Icon name="chevron-down" size={16} color={colors.muted} />
      </View>
      <View style={styles.valueRow}>
        <View>
          <Text style={styles.value}>{totalBtc.toFixed(7)}</Text>
          <Text style={styles.subtle}>{formatCurrency(totalUsd)}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionButton} onPress={onAddFunds}>
          <Text style={styles.actionText}>Add Funds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pnlRow}>
        <Text style={styles.pnlLabel}>Today's PNL</Text>
        <Text style={[styles.pnlValue, pnlPositive ? styles.pnlPositive : styles.pnlNegative]}>
          {sign}{todayPnl.toFixed(8)} ({sign}{todayPnlPct.toFixed(2)}%)
        </Text>
        <Icon name="chevron-down" size={16} color={colors.muted} style={styles.pnlIcon} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: spacing.xl,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
    fontFamily: typography.fontFamily.medium,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 30,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
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
  pnlIcon: {
    marginLeft: spacing.xs,
  },
  pnlPositive: {
    color: colors.green,
  },
  pnlNegative: {
    color: colors.red,
  },
  actionButton: {
    backgroundColor: colors.yellowSoft,
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
