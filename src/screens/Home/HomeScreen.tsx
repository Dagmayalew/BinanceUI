import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg';
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
        </View>
        <View style={styles.headerRow}>
          <View style={styles.leftIcons}>
            <IconButton name="menu" size={30} />
            <IconButton name="message-text-outline" size={30} style={styles.iconSpacing} badge="10" />
          </View>
          <View style={styles.segmented}>
            <Text style={[styles.segmentText, styles.segmentActive]}>Exchange</Text>
            <Text style={styles.segmentText}>Wallet</Text>
          </View>
          <View style={styles.headerIcons}>
            <IconButton name="headphones" size={30} />
            <IconButton name="qrcode-scan" size={30} style={styles.iconSpacing} />
          </View>
        </View>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>{homeData.searchHint}</Text>
          <Icon name="magnify" size={18} color={colors.muted} />
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
            <View style={styles.earnLeft}>
              <View style={styles.earnIcon}>
                <Icon name="wallet-outline" size={18} color={colors.text} />
              </View>
              <View>
                <Text style={styles.earnTitle}>Earn</Text>
                <Text style={styles.earnSubtitle}>Earn up to {homeData.earnRate} APR</Text>
                <Text style={styles.earnSubtitle}>with {homeData.earnCurrency}</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.subscribeButton}>
              <Text style={styles.subscribeText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Spacer size={spacing.lg} />
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Discover personalized home experiences!</Text>
          <View style={styles.bannerActions}>
            <View style={styles.bannerArrow}>
              <Icon name="arrow-right" size={14} color={colors.surface} />
            </View>
            <Icon name="close" size={16} color={colors.text} style={styles.bannerClose} />
          </View>
        </View>
        <Spacer size={spacing.lg} />
        <View style={styles.marketRow}>
          {homeData.markets.map((market, index) => (
            <Card key={market.id} style={[styles.marketCard, index === 0 ? styles.marketSpacing : null]}>
              {market.id === 'p2p' ? (
                <View>
                  <View style={styles.marketMeta}>
                    <Text style={styles.marketSymbol}>P2P</Text>
                    <Icon name="chevron-right" size={16} color={colors.muted} />
                  </View>
                  <View style={styles.marketPairRow}>
                    <View style={[styles.marketToken, { backgroundColor: market.tokenColor }]}>
                      <Text style={styles.marketTokenText}>{market.token}</Text>
                    </View>
                    <View>
                      <Text style={styles.marketPair}>{market.symbol}</Text>
                      <Text style={styles.marketBuy}>Buy</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.marketTop}>
                  <View style={[styles.marketToken, { backgroundColor: market.tokenColor }]}>
                    <Text style={styles.marketTokenText}>{market.token}</Text>
                  </View>
                  <View style={styles.marketMeta}>
                    <Text style={styles.marketSymbol}>{market.symbol}</Text>
                  </View>
                </View>
              )}
              {market.id === 'p2p' ? (
                <Text style={styles.marketPriceLarge}>${market.price.toFixed(3)}</Text>
              ) : (
                <Text style={styles.marketPrice}>{market.price.toFixed(2)}</Text>
              )}
              {market.changePct === 0 ? (
                <Text style={styles.marketChangeMuted}>-</Text>
              ) : (
                <Text style={[styles.marketChange, market.changePct >= 0 ? styles.positive : styles.negative]}>
                  {market.changePct >= 0 ? '+' : ''}{market.changePct.toFixed(2)}%
                </Text>
              )}
              {market.id === 'bnb' ? (
                <View style={styles.sparkline}>
                  <Svg width="100%" height="100%" viewBox="0 0 120 36">
                    <Path
                      d="M2 26 L12 24 L22 20 L32 22 L42 18 L52 20 L62 16 L72 18 L82 14 L92 16 L102 14 L118 18 L118 36 L2 36 Z"
                      fill="#CFEFE0"
                    />
                    <Path
                      d="M2 26 L12 24 L22 20 L32 22 L42 18 L52 20 L62 16 L72 18 L82 14 L92 16 L102 14 L118 18"
                      stroke="#7BC9A6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </Svg>
                </View>
              ) : null}
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
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
  },
  segmented: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  segmentText: {
    fontSize: typography.size.sm,
    color: colors.muted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 10,
  },
  segmentActive: {
    backgroundColor: colors.surfaceAlt,
    color: colors.text,
  },
  searchBar: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
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
    backgroundColor: 'transparent',
  },
  earnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
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
    fontFamily: typography.fontFamily.medium,
    flex: 1,
    marginRight: spacing.sm,
  },
  bannerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerArrow: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  bannerClose: {
    padding: spacing.xs,
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
  marketSymbolSecondary: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  marketPair: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginTop: spacing.sm,
  },
  marketBuy: {
    fontSize: typography.size.xs,
    color: colors.muted,
    marginTop: 2,
  },
  marketPrice: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginTop: spacing.sm,
  },
  marketPriceLarge: {
    fontSize: 24,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginTop: spacing.sm,
  },
  marketChange: {
    fontSize: typography.size.sm,
    marginTop: spacing.xs,
  },
  marketChangeMuted: {
    fontSize: typography.size.xxl,
    marginTop: spacing.xs,
    color: colors.muted,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
  sparkline: {
    height: 30,
    borderRadius: 8,
    marginTop: spacing.md,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  sparklineLine: {
    height: 2,
    backgroundColor: '#60A5FA',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  marketTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketPairRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  marketToken: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  marketTokenText: {
    fontSize: typography.size.sm,
    color: colors.surface,
    fontFamily: typography.fontFamily.bold,
  },
  marketMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
});
