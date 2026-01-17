import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { IconButton } from '../../../components/ui/IconButton';
import { colors, spacing, typography } from '../../../theme';

export function OpportunityHeader() {
  return (
    <View style={styles.row}>
      <IconButton name="chevron-left" size={32} />
      <Text style={styles.title}>Opportunity</Text>
      <View style={styles.icons}>
        <IconButton name="qrcode-scan" size={32} />
        <IconButton name="bell-outline" size={32} style={styles.iconSpacing} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  icons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
  },
});
