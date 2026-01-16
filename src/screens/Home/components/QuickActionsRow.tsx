import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { IconButton } from '../../../components/ui/IconButton';
import { colors, spacing, typography } from '../../../theme';

export function QuickActionsRow({
  actions,
}: {
  actions: { id: string; label: string; icon: string }[];
}) {
  return (
    <View style={styles.row}>
      {actions.map((action) => (
        <View key={action.id} style={styles.item}>
          <IconButton label={action.icon} />
          <Text style={styles.label}>{action.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.text,
  },
});
