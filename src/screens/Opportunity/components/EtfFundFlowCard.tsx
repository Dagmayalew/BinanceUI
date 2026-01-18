import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function EtfFundFlowCard() {
  return (
    <Card>
      <View style={styles.titleRow}>
        <Text style={styles.title}>ETF Net Flow</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </View>
      <View style={styles.tabRow}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabTextActive}>BTC ETF</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>ETH ETF</Text>
        </View>
      </View>
      <View style={styles.metricRow}>
        <View style={styles.btcRow}>
          <View style={styles.btcIcon}>
            <Text style={styles.btcIconText}>B</Text>
          </View>
          <Text style={styles.btcValue}>109,006.93</Text>
          <View style={styles.delta}>
            <Icon name="triangle" size={10} color={colors.green} />
            <Text style={styles.deltaText}>0.85%</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.dateColumn}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>2025/10/22</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>ETF Net Outflow</Text>
          <Text style={[styles.value, styles.negative]}>-$101.40M</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Total Net Assets</Text>
          <Text style={styles.value}>$154.11B</Text>
        </View>
      </View>
      <View style={styles.chartPlaceholder}>
        <View style={styles.chartLine} />
        <View style={[styles.chartBar, { left: '10%', height: 16 }]} />
        <View style={[styles.chartBar, { left: '18%', height: 8 }]} />
        <View style={[styles.chartBar, { left: '56%', height: 22 }]} />
        <View style={[styles.chartBar, { left: '62%', height: 36 }]} />
        <View style={[styles.chartBar, { left: '68%', height: 28 }]} />
        <View style={[styles.chartBar, { left: '74%', height: 20 }]} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  arrow: {
    fontSize: typography.size.md,
    color: colors.muted,
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
  dateColumn: {
    width: '33%',
    marginBottom: spacing.md,
  },
  metricRow: {
    marginBottom: spacing.md,
  },
  btcRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btcIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  btcIconText: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.bold,
    color: colors.surface,
  },
  btcValue: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  delta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
  deltaText: {
    fontSize: typography.size.sm,
    color: colors.green,
    marginLeft: 2,
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
    fontSize: typography.size.md,
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
    overflow: 'hidden',
    position: 'relative',
  },
  chartLine: {
    position: 'absolute',
    left: 8,
    right: 8,
    top: 40,
    height: 2,
    backgroundColor: '#9CA3AF',
  },
  chartBar: {
    position: 'absolute',
    bottom: 8,
    width: 6,
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
});
