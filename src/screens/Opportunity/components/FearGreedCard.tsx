import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function FearGreedCard({
  value,
  label,
  style,
}: {
  value: number;
  label: string;
  style?: import('react-native').ViewStyle;
}) {
  return (
    <Card style={style}>
      <Text style={styles.title}>Fear & Greed</Text>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${value}%` }]} />
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  barTrack: {
    height: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: colors.yellow,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    alignItems: 'center',
  },
  value: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
});
