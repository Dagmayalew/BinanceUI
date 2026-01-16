import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, View, TouchableOpacity } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { Spacer } from '../../components/layout/Spacer';
import { TotalBalanceCard } from './components/TotalBalanceCard';
import { FeatureGrid } from './components/FeatureGrid';
import { Card } from '../../components/ui/Card';
import { Chip } from '../../components/ui/Chip';
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { homeData } from '../../data/mock/home';

export default function HomeScreen() {
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <Chip label="Highlight" tone="neutral" />
          <View style={styles.topIcons}>
            <IconButton label="B" size={32} />
            <IconButton label="N" size={32} style={styles.iconSpacing} />
          </View>
        </View>
        <View style={styles.headerRow}>
          <IconButton label="M" size={34} />
          <View style={styles.segmented}>
            <Text style={[styles.segmentText, styles.segmentActive]}>Exchange</Text>
            <Text style={styles.segmentText}>Wallet</Text>
          </View>
          <View style={styles.headerIcons}>
            <IconButton label="H" size={32} />
            <IconButton label="S" size={32} style={styles.iconSpacing} />
          </View>
        </View>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>{homeData.searchHint}</Text>
          <Text style={styles.searchIcon}>Search</Text>
        </View>
        <TotalBalanceCard
          totalBtc={homeData.totalValueBtc}
          totalUsd={homeData.totalValueUsd}
          todayPnl={homeData.todayPnl}
          todayPnlPct={homeData.todayPnlPct}
        />
        <Spacer size={spacing.lg} />
        <Card>
          <View style={styles.earnRow}>
            <View>
              <Text style={styles.earnTitle}>Earn</Text>
              <Text style={styles.earnSubtitle}>Earn up to {homeData.earnRate} APR</Text>
              <Text style={styles.earnSubtitle}>with {homeData.earnCurrency}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.subscribeButton}>
              <Text style={styles.subscribeText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Spacer size={spacing.lg} />
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Discover personalized home experiences!</Text>
          <IconButton label="X" size={28} />
        </View>
        <Spacer size={spacing.lg} />
        <View style={styles.marketRow}>
          {homeData.markets.map((market, index) => (
            <Card key={market.id} style={[styles.marketCard, index === 0 ? styles.marketSpacing : null]}>
              <Text style={styles.marketSymbol}>{market.symbol}</Text>
              <Text style={styles.marketPrice}>{market.price.toFixed(2)}</Text>
              <Text style={[styles.marketChange, market.changePct >= 0 ? styles.positive : styles.negative]}>
                {market.changePct >= 0 ? '+' : ''}{market.changePct.toFixed(2)}%
              </Text>
              <View style={styles.sparkline} />
            </Card>
          ))}
        </View>
        <Spacer size={spacing.lg} />
        <FeatureGrid items={homeData.features} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  topIcons: {
    flexDirection: 'row',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
  },
  segmented: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    padding: 4,
  },
  segmentText: {
    fontSize: typography.size.sm,
    color: colors.muted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 10,
  },
  segmentActive: {
    backgroundColor: colors.surface,
    color: colors.text,
  },
  searchBar: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  searchText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  searchIcon: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  earnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earnTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  earnSubtitle: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  subscribeButton: {
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  subscribeText: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  banner: {
    backgroundColor: colors.yellowSoft,
    padding: spacing.md,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    fontSize: typography.size.sm,
    color: colors.text,
    flex: 1,
    marginRight: spacing.sm,
  },
  marketRow: {
    flexDirection: 'row',
  },
  marketCard: {
    flex: 1,
  },
  marketSpacing: {
    marginRight: spacing.md,
  },
  marketSymbol: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  marketPrice: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginTop: spacing.sm,
  },
  marketChange: {
    fontSize: typography.size.sm,
    marginTop: spacing.xs,
  },
  sparkline: {
    height: 30,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 8,
    marginTop: spacing.md,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
});
