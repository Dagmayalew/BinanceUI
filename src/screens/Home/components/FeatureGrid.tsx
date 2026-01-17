import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '../../../components/ui/Card';
import { colors, spacing, typography } from '../../../theme';

export function FeatureGrid({
  items,
}: {
  items: { id: string; title: string; subtitle: string; type: 'gauge' | 'text' }[];
}) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <Card key={item.id} style={styles.card}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <Icon name="chevron-right" size={16} color={colors.muted} />
          </View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          {item.type === 'gauge' ? (
            <View style={styles.gauge}>
              <View style={[styles.gaugeBar, styles.gaugeRed]} />
              <View style={[styles.gaugeBar, styles.gaugeYellow]} />
              <View style={[styles.gaugeBar, styles.gaugeGreen]} />
              <View style={styles.gaugeDot} />
            </View>
          ) : (
            <View style={styles.textPlaceholder} />
          )}
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
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
  },
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
  subtitle: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  gauge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    position: 'relative',
  },
  gaugeBar: {
    height: 6,
    flex: 1,
    borderRadius: 999,
    marginRight: 4,
  },
  gaugeRed: {
    backgroundColor: '#FCA5A5',
  },
  gaugeYellow: {
    backgroundColor: '#FCD34D',
  },
  gaugeGreen: {
    backgroundColor: '#86EFAC',
    marginRight: 0,
  },
  gaugeDot: {
    position: 'absolute',
    right: '25%',
    top: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.text,
  },
  textPlaceholder: {
    height: 24,
  },
});
