import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      
      
      <Spacer size={spacing.lg} />
      <PnlLineChart data={portfolioData.pnlChart} />
      <Spacer size={spacing.lg} />
      <View style={styles.rangeRow}>
        {['7D', '1M', '3M', '6M', '1Y', 'Customize'].map((label, index) => (
          <View key={label} style={styles.rangeItem}>
            <Text style={[styles.rangeText, index === 0 ? styles.rangeTextActive : null]}>{label}</Text>
            {index === 0 && <View style={styles.rangeUnderline} />}
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
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  rangeItem: {
    marginRight: spacing.lg,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  rangeText: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
  rangeTextActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  rangeUnderline: {
    width: 16,
    height: 2,
    backgroundColor: colors.yellow,
    borderRadius: 999,
    marginTop: spacing.xs,
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
    color: '#14B8A6',
  },
  negative: {
    color: colors.red,
  },
});
