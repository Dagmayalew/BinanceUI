import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function BtcValuationCard({ score, label }: { score: number; label: string }) {
  return (
    <Card style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>BTC Valuation</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </View>
      <Text style={styles.score}>{score.toFixed(2)}</Text>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.track}>
        <View style={styles.trackFill} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.size.sm,
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  arrow: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  score: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.yellow,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  track: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 999,
    marginTop: spacing.md,
    overflow: 'hidden',
  },
  trackFill: {
    width: '45%',
    height: '100%',
    backgroundColor: colors.yellow,
  },
});
