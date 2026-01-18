import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import * as GiftedCharts from 'react-native-gifted-charts';
import { colors, spacing, typography } from '../../../theme';

type Point = { value: number; label?: string };

type Props = {
  dateText?: string; // e.g. "2025-10-23"
  currencyText?: string; // e.g. "USDT"
  dailyValueText?: string; // e.g. "0.01197969 USDT"
  dailyPctText?: string; // e.g. "+0.07%"
  weeklyValueText?: string; // e.g. "0.00669769 USDT"
  weeklyPctText?: string; // e.g. "+0.04%"
  data: Point[];
  startLabel?: string; // e.g. "10-17"
  endLabel?: string;   // e.g. "10-23"
};

export function PnlLineChart({ data }: { data: Point[] }) {
  return <PnlTrendsCard data={data} />;
}

export function PnlTrendsCard({
  dateText = '2025-10-23',
  currencyText = 'USDT',
  dailyValueText = '0.01197969 USDT',
  dailyPctText = '+0.07%',
  weeklyValueText = '0.00669769 USDT',
  weeklyPctText = '+0.04%',
  data,
  startLabel = '10-17',
  endLabel = '10-23',
}: Props) {
  const LineChart =
    (GiftedCharts as { LineChart?: React.ComponentType<any> }).LineChart ??
    (GiftedCharts as { default?: { LineChart?: React.ComponentType<any> } }).default?.LineChart;

  

  const { maxValue, minValue, stepValue, yAxisLabelTexts, xAxisLabelTexts } = useMemo(() => {
    // You can tune these to your PNL scale.
    const maxValue = 0.02;
    const minValue = -0.02;
    const stepValue = 0.01;

    return {
      maxValue,
      minValue,
      stepValue,
      yAxisLabelTexts: ['0.02', '0.01', '0', '-0.01', '-0.02'],
      xAxisLabelTexts: [startLabel, '', '', '', '', '', '', '', '', '', '', endLabel],
    };
  }, [startLabel, endLabel]);

  if (!LineChart) {
    return (
      <View style={styles.card}>
        <Text style={styles.h1}>PNL Trends</Text>
        <Text style={styles.muted}>Chart unavailable</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.h1}>PNL Trends</Text>
        <Text style={styles.eye}>👁️</Text>
      </View>

      <Text style={styles.date}>{dateText}</Text>

      {/* KPIs */}
      <View style={styles.kpiRow}>
        <View style={styles.kpiCol}>
          <Text style={styles.kpiLabel}>
            Daily PNL · {currencyText} <Text style={styles.chev}>▾</Text>
          </Text>
          <Text style={styles.kpiValueGreen}>{dailyValueText}</Text>
          <Text style={styles.kpiPctGreen}>{dailyPctText}</Text>
        </View>

        <View style={styles.kpiCol}>
          <Text style={styles.kpiLabel}>7D Cumulative PNL</Text>
          <Text style={styles.kpiValueGreen}>{weeklyValueText}</Text>
          <Text style={styles.kpiPctGreen}>{weeklyPctText}</Text>
        </View>
      </View>

      {/* Chart */}
      <View style={styles.chartWrap}>
        <LineChart
          data={data}
          curved
          isAnimated

          height={190}
          thickness={3}
          hideDataPoints

          // main line color like screenshot
          color="#10B981"

          // soft grid lines
          rulesColor={colors.border}
          rulesThickness={1}
          showVerticalLines={false}

          // axes
          noOfSections={4}
          noOfSectionsBelowXAxis={2}
          stepValue={stepValue}
          maxValue={maxValue}
          minValue={minValue}

          yAxisLabelTexts={yAxisLabelTexts}
          yAxisTextStyle={styles.axisText}
          xAxisLabelTexts={xAxisLabelTexts}
          xAxisLabelTextStyle={styles.axisText}

          yAxisColor="transparent"
          yAxisThickness={0}
          xAxisColor={colors.border}
          xAxisThickness={1}

          // spacing similar to Binance-like screen
          spacing={24}
          initialSpacing={10}
          endSpacing={10}

          // IMPORTANT:
          // This gives a similar "green to red" feel (not perfect segment switching,
          // but very close visually like your screenshot).
          lineGradient
          lineGradientStartColor="#10B981"
          lineGradientEndColor="#EF4444"
          lineGradientDirection="vertical"

          backgroundColor="transparent"
        />
      </View>

      
    
    </View>
  );
}

function RangeTab({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.tab, active && styles.tabActive]}
      hitSlop={8}
    >
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  h1: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  eye: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 2,
  },
  date: {
    marginTop: 6,
    fontSize: typography.size.xs,
    color: colors.muted,
  },

  kpiRow: {
    marginTop: spacing.md,
    flexDirection: 'row',
    gap: spacing.lg,
  },
  kpiCol: {
    flex: 1,
  },
  kpiLabel: {
    fontSize: typography.size.sm,
    color: colors.muted,
  },
  chev: {
    color: colors.muted,
    fontSize: typography.size.xs,
  },
  kpiValueGreen: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: '700',
    color: '#10B981',
    letterSpacing: 0.2,
  },
  kpiPctGreen: {
    marginTop: 4,
    fontSize: typography.size.xs,
    color: '#10B981',
  },

  chartWrap: {
    marginTop: spacing.md,
    paddingTop: spacing.sm,
  },

  axisText: {
    color: colors.muted,
    fontSize: typography.size.xs,
  },

  tabsRow: {
    marginTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  tabActive: {
    backgroundColor: colors.surfaceAlt ?? '#F6F7F9',
  },
  tabText: {
    fontSize: typography.size.sm,
    color: colors.muted,
    fontWeight: '600',
  },
  tabTextActive: {
    color: colors.text,
  },

  customizeBtn: {
    marginLeft: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  customizeText: {
    fontSize: typography.size.sm,
    color: colors.muted,
    fontWeight: '600',
  },

  muted: {
    marginTop: 8,
    fontSize: typography.size.sm,
    color: colors.muted,
  },
});
