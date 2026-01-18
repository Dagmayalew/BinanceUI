import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
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
      <View style={styles.titleRow}>
        <Text style={styles.title}>Fear & Greed</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </View>
      <View style={styles.gaugeWrap}>
        <Svg width={140} height={80} viewBox="0 0 140 80">
          <Path d="M10 64 A60 60 0 0 1 34 32" stroke="#DC2626" strokeWidth={8} strokeLinecap="round" fill="none" />
          <Path d="M34 32 A60 60 0 0 1 56 22" stroke="#F97316" strokeWidth={8} strokeLinecap="round" fill="none" />
          <Path d="M56 22 A60 60 0 0 1 84 22" stroke="#F59E0B" strokeWidth={8} strokeLinecap="round" fill="none" />
          <Path d="M84 22 A60 60 0 0 1 106 32" stroke="#84CC16" strokeWidth={8} strokeLinecap="round" fill="none" />
          <Path d="M106 32 A60 60 0 0 1 130 64" stroke="#10B981" strokeWidth={8} strokeLinecap="round" fill="none" />
          <Circle cx="24" cy="46" r="6" fill={colors.text} />
        </Svg>
        <View style={styles.gaugeLabel}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  arrow: {
    fontSize: typography.size.md,
    color: colors.muted,
  },
  gaugeWrap: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  gaugeLabel: {
    marginTop: -6,
    alignItems: 'center',
  },
  value: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
});
