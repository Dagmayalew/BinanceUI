import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { colors, spacing, typography } from '../../theme';

export default function TradeScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Trade</Text>
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
