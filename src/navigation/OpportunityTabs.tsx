import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OpportunityScreen from '../screens/Opportunity/OpportunityScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import PortfolioScreen from '../screens/Portfolio/PortfolioScreen';
import { colors, typography } from '../theme';
import type { OpportunityTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<OpportunityTabParamList>();

export default function OpportunityTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontSize: typography.size.xs, fontFamily: typography.fontFamily.medium },
        tabBarStyle: { borderTopColor: colors.border, backgroundColor: colors.surface, height: 56, paddingBottom: 8 },
        tabBarIcon: ({ color }) => {
          const name =
            route.name === 'Opportunity'
              ? 'home-outline'
              : route.name === 'Calendar'
              ? 'calendar-blank-outline'
              : 'briefcase-outline';
          return <Icon name={name} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Opportunity" component={OpportunityScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    </Tab.Navigator>
  );
}
