import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, View } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { OpportunityHeader } from './components/OpportunityHeader';
import { FearGreedCard } from './components/FearGreedCard';
import { EtfFundFlowCard } from './components/EtfFundFlowCard';
import { TodayMarketCard } from './components/TodayMarketCard';
import { BtcValuationCard } from './components/BtcValuationCard';
import { colors, spacing, typography } from '../../theme';
import { opportunityData } from '../../data/mock/opportunity';

export default function OpportunityScreen() {
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <OpportunityHeader />
        <View style={styles.tabRow}>
          {opportunityData.tabs.map((tab, index) => (
            <View key={tab} style={[styles.tabItem, index === 0 ? styles.tabActive : null]}>
              <Text style={[styles.tabText, index === 0 ? styles.tabTextActive : null]}>{tab}</Text>
            </View>
          ))}
        </View>
        <TodayMarketCard title={opportunityData.todayMarket.title} summary={opportunityData.todayMarket.summary} />
        <View style={styles.dualRow}>
          <FearGreedCard
            value={opportunityData.fearGreed.value}
            label={opportunityData.fearGreed.label}
            style={styles.dualCard}
          />
          <View style={styles.dualSpacing} />
          <BtcValuationCard score={opportunityData.btcValuation.score} label={opportunityData.btcValuation.label} />
        </View>
        <Text style={styles.sectionTitle}>ETF Net Flow</Text>
        <EtfFundFlowCard
          inflow={opportunityData.etfFundFlow.inflow}
          outflow={opportunityData.etfFundFlow.outflow}
          totalNetAssets={opportunityData.etfFundFlow.totalNetAssets}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    flexWrap: 'wrap',
  },
  tabItem: {
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.surfaceAlt,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  tabActive: {
    backgroundColor: colors.yellowSoft,
  },
  tabText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  tabTextActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  sectionTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  dualRow: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  dualCard: {
    flex: 1,
  },
  dualSpacing: {
    width: spacing.md,
  },
});
