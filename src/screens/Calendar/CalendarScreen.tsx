import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { colors, spacing, typography } from '../../theme';

export default function CalendarScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
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
