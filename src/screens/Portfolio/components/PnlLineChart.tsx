import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as GiftedCharts from 'react-native-gifted-charts';
import { colors, spacing, typography } from '../../../theme';

export function PnlLineChart({ data }: { data: { value: number }[] }) {
  const LineChart =
    (GiftedCharts as { LineChart?: React.ComponentType<any> }).LineChart ??
    (GiftedCharts as { default?: { LineChart?: React.ComponentType<any> } }).default?.LineChart;

  if (!LineChart) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PNL (7D)</Text>
        <Text style={styles.fallback}>Chart unavailable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PNL (7D)</Text>
      <LineChart
        data={data}
        thickness={3}
        color={colors.yellow}
        height={180}
        hideRules
        hideYAxisText
        xAxisColor={colors.border}
        yAxisColor={colors.border}
        yAxisThickness={0}
        xAxisThickness={1}
        isAnimated
        curved
        spacing={24}
        initialSpacing={10}
        endSpacing={10}
        backgroundColor={colors.surface}
        areaChart
        startFillColor={'#FDE68A'}
        endFillColor={'#FEF9C3'}
        startOpacity={0.4}
        endOpacity={0.05}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  fallback: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
});
