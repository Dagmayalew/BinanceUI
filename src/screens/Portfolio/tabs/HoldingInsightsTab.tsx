import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { Divider } from '../../../components/ui/Divider';
import { colors, spacing, typography } from '../../../theme';
import { portfolioData } from '../../../data/mock/portfolio';
import { formatCurrency } from '../../../utils/format';

export default function HoldingInsightsTab() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.summaryRow}>
        {portfolioData.holdingSummary.map((item, index) => (
          <Card
            key={item.id}
            style={[styles.summaryCard, index === portfolioData.holdingSummary.length - 1 ? null : styles.summaryCardSpacing]}
          >
            <Text style={styles.summaryLabel}>{item.label}</Text>
            <Text style={styles.summaryValue}>{item.value}</Text>
            <Text style={styles.summaryCaption}>{item.caption}</Text>
          </Card>
        ))}
      </View>
      <Card>
        <Text style={styles.listTitle}>Holdings</Text>
        {portfolioData.holdings.map((holding, index) => {
          const tone = holding.change >= 0 ? styles.positive : styles.negative;
          const sign = holding.change >= 0 ? '+' : '';
          return (
            <View key={holding.id}>
              <View style={styles.holdingRow}>
                <View>
                  <Text style={styles.holdingName}>{holding.name}</Text>
                  <Text style={styles.holdingAmount}>{holding.amount} {holding.id.toUpperCase()}</Text>
                </View>
                <View style={styles.holdingRight}>
                  <Text style={styles.holdingValue}>{formatCurrency(holding.value)}</Text>
                  <Text style={[styles.holdingChange, tone]}>{sign}{holding.change.toFixed(2)}%</Text>
                </View>
              </View>
              {index < portfolioData.holdings.length - 1 && <Divider style={styles.divider} />}
            </View>
          );
        })}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  summaryRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  summaryCard: {
    flex: 1,
    paddingVertical: spacing.lg,
  },
  summaryCardSpacing: {
    marginRight: spacing.md,
  },
  summaryLabel: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  summaryValue: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginTop: spacing.xs,
  },
  summaryCaption: {
    fontSize: typography.size.xs,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  listTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  holdingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  holdingName: {
    fontSize: typography.size.md,
    color: colors.text,
  },
  holdingAmount: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  holdingRight: {
    alignItems: 'flex-end',
  },
  holdingValue: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  holdingChange: {
    fontSize: typography.size.sm,
    marginTop: spacing.xs,
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
  divider: {
    marginVertical: spacing.xs,
  },
});
