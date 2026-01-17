import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import PortfolioTopTabs from '../../navigation/PortfolioTopTabs';
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { portfolioData } from '../../data/mock/portfolio';

export default function PortfolioScreen() {
  const pnlPositive = portfolioData.todayPnl >= 0;
  const sign = pnlPositive ? '+' : '';
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <IconButton name="chevron-left" size={32} />
          <Text style={styles.title}>Portfolio</Text>
          <View style={styles.headerIcons}>
            <IconButton name="qrcode-scan" size={32} />
            <IconButton name="bell-outline" size={32} style={styles.iconSpacing} />
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
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
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
