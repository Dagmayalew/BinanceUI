import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function BtcValuationCard({ score, label }: { score: number; label: string }) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>BTC Valuation</Text>
      <View style={styles.scoreRow}>
        <Text style={styles.score}>{score.toFixed(2)}</Text>
        <View style={styles.divider} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  title: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  scoreRow: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  score: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.yellow,
  },
  divider: {
    height: 3,
    width: '70%',
    backgroundColor: colors.yellow,
    marginTop: spacing.sm,
    borderRadius: 999,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
