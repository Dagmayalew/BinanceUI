import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function TodayMarketCard({ title, summary }: { title: string; summary: string }) {
  return (
    <Card style={styles.card}>
      <View style={styles.badgeRow}>
        <Icon name="zodiac-gemini" size={16} color={colors.text} style={styles.badgeIcon} />
        <Text style={styles.badgeText}>{title}</Text>
      </View>
      <Text style={styles.summary}>{summary}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4FF',
    borderColor: '#E5E7FF',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  badgeIcon: {
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
