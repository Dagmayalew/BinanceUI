import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, View, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
import { useBalanceStore } from '../../store/balanceStore';
import type { RootStackParamList } from '../../types/navigation';
import { getSupportCount, seedMockConversation } from '../../db/messageRepo';

export default function HomeScreen() {
  const { totalBtc, totalUsd, todayPnl, todayPnlPct, fetchBalance, addFunds, init } = useBalanceStore();
  const [supportCount, setSupportCount] = useState(0);

  useEffect(() => {
    init();
    fetchBalance();
  }, [fetchBalance, init]);

  useFocusEffect(
    React.useCallback(() => {
      let active = true;
      const loadCount = async () => {
        await seedMockConversation();
        const count = await getSupportCount();
        if (active) {
          setSupportCount(count);
        }
      };
      loadCount();
      return () => {
        active = false;
      };
    }, [])
  );
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* <View style={styles.highlightPill}>
                  <Text style={styles.highlightText}>Highlight</Text>
                </View> */}
        <View style={styles.headerRow}>
          <View style={styles.leftIcons}>
            <IconButton name="menu" size={30} />
            <IconButton
              name="message-text-outline"
              size={30}
              style={styles.iconSpacing}
              badge={supportCount > 0 ? String(supportCount) : undefined}
              onPress={() => navigation.navigate('ChatList')}
            />
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
          totalBtc={totalBtc}
          totalUsd={totalUsd}
          todayPnl={todayPnl}
          todayPnlPct={todayPnlPct}
          onAddFunds={() => navigation.navigate('AddFunds')}
        />
        <Spacer size={spacing.lg} />
        <Card>
          <View style={styles.earnRow}>
            <View style={styles.earnLeft}>
                <View>
                    <Text style={styles.earnTitle}>Earn</Text>
                    <View style={styles.earnIcon}>
                <Icon name="wallet-outline" size={18} color={colors.text} />
              </View>
                </View>
              
              <View>
                
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
              <Icon name="arrow-right" size={14} color={colors.yellowSoft} />
            </View>
            <Icon name="close" size={16} color={colors.text} style={styles.bannerClose} />
          </View>
        </View>
        <Spacer size={spacing.lg} />
        <View style={styles.marketRow}>
          {homeData.markets.map((market, index) => (
            <Card
              key={market.id}
              style={[styles.marketCard, index === 0 ? styles.marketSpacing : null]}
              onPress={market.id === 'bnb' ? () => navigation.navigate('OpportunityTabs') : undefined}
            >
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
      <View style={styles.discoverBar}>
        <View style={styles.discoverRow}>
          {['Discover', 'Following', 'Campaign', 'News', 'Ann'].map((label, index) => (
            <View key={label} style={styles.discoverItem}>
              <Text style={[styles.discoverText, index === 0 ? styles.discoverTextActive : null]}>{label}</Text>
                
            </View>
          ))}
        </View>
      </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 120,
    paddingTop: spacing.xxxl,
  },
   highlightPill: {
    maxWidth: 100,  
    backgroundColor: '#BDBDBD',
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginLeft: spacing.sm,
  },
  highlightText: {
    color: colors.surface,
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
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
    backgroundColor: colors.surface,
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
    color: colors.gray,
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
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  earnTitle: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.regular,
    color: colors.muted,
    paddingBottom: spacing.xs,
  },
  earnSubtitle: {
    fontSize: typography.size.sm,
    color: colors.text,
    marginTop: spacing.xs,
    fontFamily: typography.fontFamily.medium,
  },
  subscribeButton: {
    backgroundColor: colors.yellowSoft,
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
  discoverBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -4,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  discoverRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discoverItem: {
    alignItems: 'center',
  },
  discoverText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  discoverTextActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  discoverUnderline: {
    width: 16,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.yellow,
    marginTop: spacing.xs,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
});
