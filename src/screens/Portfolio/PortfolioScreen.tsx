import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen } from '../../components/layout/Screen';
import PortfolioTopTabs from '../../navigation/PortfolioTopTabs';
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { portfolioData } from '../../data/mock/portfolio';
import type { RootStackParamList } from '../../types/navigation';

export default function PortfolioScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const pnlPositive = portfolioData.todayPnl >= 0;
  const sign = pnlPositive ? '+' : '';
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.leftGroup}>
            <IconButton name="chevron-left" size={28} onPress={() => navigation.navigate('OpportunityTabs', { screen: 'Opportunity' })} />
            {/* <View style={styles.highlightPill}>
              <Text style={styles.highlightText}>Highlight</Text>
            </View> */}
          </View>
          <Text style={styles.title}>Portfolio</Text>
          <View style={styles.headerIcons}>
            <View style={styles.qrWrap}>
              <IconButton name="qrcode" size={28} />
              <View style={styles.qrDot} />
            </View>
            <IconButton name="message-text-outline" size={28} style={styles.iconSpacing} />
          </View>
        </View>
        <View style={styles.pnlRow}>
          <Text style={styles.pnlLabel}>Today's PNL</Text>
          <Text style={[styles.pnlValue, pnlPositive ? styles.pnlPositive : styles.pnlNegative]}>
            {sign}{portfolioData.todayPnl.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <PortfolioTopTabs />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightPill: {
    backgroundColor: '#BDBDBD',
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginLeft: spacing.sm,
  },
  highlightText: {
    color: colors.surface,
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
  },
  qrWrap: {
    position: 'relative',
  },
  qrDot: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.yellow,
  },
  title: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  pnlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  pnlLabel: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  pnlValue: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    marginLeft: spacing.sm,
  },
  pnlPositive: {
    color: colors.green,
  },
  pnlNegative: {
    color: colors.red,
  },
  tabs: {
    flex: 1,
  },
});
