import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';
import { formatCurrency } from '../../../utils/format';

export function EtfFundFlowCard({
  inflow,
  outflow,
  totalNetAssets,
}: {
  inflow: number;
  outflow: number;
  totalNetAssets: number;
}) {
  return (
    <Card>
      <Text style={styles.title}>ETF fund flow</Text>
      <View style={styles.tabRow}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabTextActive}>BTC ETF</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>ETH ETF</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Inflow</Text>
          <Text style={[styles.value, styles.positive]}>{formatCurrency(inflow)}M</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Outflow</Text>
          <Text style={[styles.value, styles.negative]}>{formatCurrency(outflow)}M</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Total Net Assets</Text>
          <Text style={styles.value}>{formatCurrency(totalNetAssets)}B</Text>
        </View>
      </View>
      <View style={styles.chartPlaceholder} />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  tab: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginRight: spacing.sm,
    backgroundColor: colors.surface,
  },
  tabActive: {
    borderColor: colors.yellow,
    backgroundColor: colors.yellowSoft,
  },
  tabText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  tabTextActive: {
    fontSize: typography.size.sm,
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    width: '33%',
    marginBottom: spacing.md,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  value: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    marginTop: spacing.sm,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
  chartPlaceholder: {
    height: 80,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 10,
  },
});
