import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HoldingInsightsTab from '../screens/Portfolio/tabs/HoldingInsightsTab';
import PnlTab from '../screens/Portfolio/tabs/PnlTab';
import { colors, spacing, typography } from '../theme';
import type { PortfolioTopTabParamList } from '../types/navigation';

const Tab = createMaterialTopTabNavigator<PortfolioTopTabParamList>();

export default function PortfolioTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: colors.text, height: 2, borderRadius: 2 },
        tabBarLabelStyle: { fontSize: typography.size.md, fontFamily: typography.fontFamily.medium, textTransform: 'none' },
        tabBarStyle: { backgroundColor: colors.bg, elevation: 0, shadowOpacity: 0 },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
        tabBarItemStyle: { width: 'auto' },
        tabBarContentContainerStyle: { paddingHorizontal: spacing.lg },
      }}
    >
      <Tab.Screen name="HoldingInsights" component={HoldingInsightsTab} options={{ title: 'Holding Insights' }} />
      <Tab.Screen name="Pnl" component={PnlTab} options={{ title: 'PNL' }} />
    </Tab.Navigator>
  );
}
