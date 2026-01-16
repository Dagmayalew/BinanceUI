import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from '../../../components/ui/Card';
import { Chip } from '../../../components/ui/Chip';
import { colors, spacing, typography } from '../../../theme';

export function FeatureGrid({
  items,
}: {
  items: { id: string; title: string; subtitle: string; tag: string; tone: 'neutral' | 'positive' | 'negative' | 'warning' }[];
}) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <Card key={item.id} style={styles.card}>
          <View style={styles.tagRow}>
            <Chip label={item.tag} tone={item.tone} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    paddingVertical: spacing.lg,
    marginBottom: spacing.md,
  },
  tagRow: {
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
});
