import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { colors, spacing, typography } from '../../theme';

export default function MarketsScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Markets</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  text: {
    fontSize: typography.size.lg,
    color: colors.text,
  },
});
