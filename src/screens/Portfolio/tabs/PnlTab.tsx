import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Spacer } from '../../../components/layout/Spacer';
import { Card } from '../../../components/ui/Card';
import { PnlLineChart } from '../components/PnlLineChart';
import { PnlDistributionCard } from '../components/PnlDistributionCard';
import { colors, spacing, typography } from '../../../theme';
import { portfolioData } from '../../../data/mock/portfolio';

export default function PnlTab() {
  const dailyPositive = portfolioData.dailyPnl >= 0;
  const cumulativePositive = portfolioData.cumulativePnl >= 0;

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>PNL Trends</Text>
      <Text style={styles.sectionDate}>{portfolioData.pnlTrendsDate}</Text>
      <View style={styles.statsRow}>
        <View style={styles.statBlock}>
          <Text style={styles.statLabel}>Daily PNL - USDT</Text>
          <Text style={[styles.statValue, dailyPositive ? styles.positive : styles.negative]}>
            {dailyPositive ? '+' : ''}{portfolioData.dailyPnl.toFixed(8)} USDT
          </Text>
          <Text style={[styles.statDelta, dailyPositive ? styles.positive : styles.negative]}>
            {dailyPositive ? '+' : ''}{portfolioData.dailyPnlPct.toFixed(2)}%
          </Text>
        </View>
        <View style={styles.statBlock}>
          <Text style={styles.statLabel}>7D Cumulative PNL</Text>
          <Text style={[styles.statValue, cumulativePositive ? styles.positive : styles.negative]}>
            {cumulativePositive ? '+' : ''}{portfolioData.cumulativePnl.toFixed(8)} USDT
          </Text>
          <Text style={[styles.statDelta, cumulativePositive ? styles.positive : styles.negative]}>
            {cumulativePositive ? '+' : ''}{portfolioData.cumulativePnlPct.toFixed(2)}%
          </Text>
        </View>
      </View>
      <Spacer size={spacing.lg} />
      <PnlLineChart data={portfolioData.pnlChart} />
      <Spacer size={spacing.lg} />
      <View style={styles.rangeRow}>
        {['7D', '1M', '3M', '6M', '1Y', 'Customize'].map((label, index) => (
          <View key={label} style={[styles.rangePill, index === 0 ? styles.rangeActive : null]}>
            <Text style={[styles.rangeText, index === 0 ? styles.rangeTextActive : null]}>{label}</Text>
          </View>
        ))}
      </View>
      <Spacer size={spacing.lg} />
      <Card>
        <Text style={styles.scoreLabel}>Portfolio Score</Text>
        <Text style={styles.scoreTitle}>You beat {portfolioData.portfolioRank} of users in 7D return</Text>
        <Text style={styles.scoreHint}>Try more portfolio possibility by yourself</Text>
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreValue}>{portfolioData.portfolioScore}</Text>
          <Text style={styles.scoreCaption}>Medium</Text>
        </View>
      </Card>
      <Spacer size={spacing.lg} />
      <PnlDistributionCard items={portfolioData.pnlDistribution} month={portfolioData.distributionMonth} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  sectionTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  sectionDate: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  statBlock: {
    flex: 1,
  },
  statLabel: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
  statValue: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.bold,
    marginTop: spacing.xs,
  },
  statDelta: {
    fontSize: typography.size.xs,
    marginTop: spacing.xs,
  },
  rangeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rangePill: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  rangeActive: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rangeText: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
  rangeTextActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  scoreLabel: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  scoreTitle: {
    fontSize: typography.size.md,
    color: colors.text,
    marginTop: spacing.sm,
  },
  scoreHint: {
    fontSize: typography.size.sm,
    color: colors.yellow,
    marginTop: spacing.xs,
  },
  scoreBadge: {
    position: 'absolute',
    right: spacing.lg,
    top: spacing.lg,
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreValue: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  scoreCaption: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
});
