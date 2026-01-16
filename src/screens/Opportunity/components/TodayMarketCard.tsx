import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function TodayMarketCard({ title, summary }: { title: string; summary: string }) {
  return (
    <Card style={styles.card}>
      <View style={styles.badgeRow}>
        <View style={styles.badge} />
        <Text style={styles.badgeText}>{title}</Text>
      </View>
      <Text style={styles.summary}>{summary}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF7E6',
    borderColor: '#FDE68A',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  badge: {
    width: 18,
    height: 18,
    borderRadius: 6,
    backgroundColor: colors.yellow,
    marginRight: spacing.sm,
  },
  badgeText: {
    fontSize: typography.size.sm,
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  summary: {
    fontSize: typography.size.sm,
    color: colors.muted,
    lineHeight: 18,
  },
});
