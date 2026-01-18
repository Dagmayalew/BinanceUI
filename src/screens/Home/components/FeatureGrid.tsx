import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path, Circle } from 'react-native-svg';
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
            <View style={styles.gaugeWrap}>
              <Svg width={120} height={70} viewBox="0 0 120 70">
                <Path d="M12 60 A48 48 0 0 1 42 20" stroke="#EF4444" strokeWidth={8} strokeLinecap="round" fill="none" />
                <Path d="M42 20 A48 48 0 0 1 78 20" stroke="#F59E0B" strokeWidth={8} strokeLinecap="round" fill="none" />
                <Path d="M78 20 A48 48 0 0 1 108 60" stroke="#10B981" strokeWidth={8} strokeLinecap="round" fill="none" />
                <Circle cx="96" cy="36" r="6" fill={colors.text} />
              </Svg>
              <View style={styles.gaugeLabel}>
                <Text style={styles.gaugeValue}>28</Text>
                <Text style={styles.gaugeCaption}>Fear</Text>
              </View>
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
  gaugeWrap: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  gaugeLabel: {
    marginTop: -10,
    alignItems: 'center',
  },
  gaugeValue: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  gaugeCaption: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  textPlaceholder: {
    height: 24,
  },
});
