import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export function Chip({
  label,
  tone = 'neutral',
  style,
}: {
  label: string;
  tone?: 'neutral' | 'positive' | 'negative' | 'warning';
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.base, stylesByTone[tone], style]}>
      <Text style={[styles.text, tone === 'warning' && styles.warningText]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: {
    fontSize: typography.size.xs,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  warningText: {
    color: '#7A5C00',
  },
});

const stylesByTone = StyleSheet.create({
  neutral: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
  },
  positive: {
    backgroundColor: '#ECFDF3',
    borderColor: '#BBF7D0',
  },
  negative: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },
  warning: {
    backgroundColor: '#FFF7D1',
    borderColor: '#FDE68A',
  },
});
