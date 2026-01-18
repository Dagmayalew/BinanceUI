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
import { Spacer } from '../../components/layout/Spacer';

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
        <Spacer size={spacing.lg} />
        
        <View style={styles.dualRow}>
          <FearGreedCard
            value={opportunityData.fearGreed.value}
            label={opportunityData.fearGreed.label}
            style={styles.dualCard}
          />
          <View style={styles.dualSpacing} />
          <BtcValuationCard score={opportunityData.btcValuation.score} label={opportunityData.btcValuation.label} />
        </View>
     <Spacer size={spacing.lg} />
    
        <EtfFundFlowCard />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xxxl,
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  tabItem: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginRight: spacing.md,
    marginBottom: spacing.sm,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.yellow,
  },
  tabText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  tabTextActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  dualHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  dualHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  dualHeaderDivider: {
    width: spacing.md,
  },
  dualHeaderText: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  dualArrow: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  sectionArrow: {
    fontSize: typography.size.md,
    color: colors.muted,
  },
  dualRow: {
    flexDirection: 'row',
  },
  dualCard: {
    flex: 1,
  },
  dualSpacing: {
    width: spacing.md,
  },
});
