import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function PnlDistributionCard({
  items,
  month,
}: {
  items: { label: string; value: number; color: string }[];
  month: string;
}) {
  return (
    <Card>
      <Text style={styles.title}>PNL Distribution</Text>
      <View style={styles.monthRow}>
        <Text style={styles.monthArrow}>{'<'}</Text>
        <Text style={styles.monthText}>{month}</Text>
        <Text style={styles.monthArrow}>{'>'}</Text>
      </View>
      <View style={styles.weekRow}>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
          <Text key={day} style={styles.weekText}>{day}</Text>
        ))}
      </View>
      <View style={styles.segmentRow}>
        {items.map((item) => (
          <View
            key={item.label}
            style={[styles.segment, { flex: item.value, backgroundColor: item.color }]}
          />
        ))}
      </View>
      <View style={styles.legend}>
        {items.map((item) => (
          <View key={item.label} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.label} {item.value}%</Text>
          </View>
        ))}
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
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  weekText: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
  monthText: {
    fontSize: typography.size.sm,
    color: colors.text,
    marginHorizontal: spacing.md,
  },
  monthArrow: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  segmentRow: {
    flexDirection: 'row',
    height: 12,
    borderRadius: 999,
    overflow: 'hidden',
  },
  segment: {
    height: '100%',
  },
  legend: {
    marginTop: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.md,
    marginBottom: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  legendText: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
});
