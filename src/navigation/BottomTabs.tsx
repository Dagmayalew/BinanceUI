import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import OpportunityScreen from '../screens/Opportunity/OpportunityScreen';
import PortfolioScreen from '../screens/Portfolio/PortfolioScreen';
import { colors, typography } from '../theme';
import type { BottomTabParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { height: 64, paddingBottom: 10, paddingTop: 8, backgroundColor: colors.surface },
        tabBarLabelStyle: { fontSize: 11, fontFamily: typography.fontFamily.medium },
        tabBarIcon: ({ color, focused }) => {
          const name =
            route.name === 'Home'
              ? focused ? 'home-variant' : 'home-variant-outline'
              : route.name === 'Opportunity'
              ? focused ? 'chart-line' : 'chart-line'
              : focused ? 'briefcase' : 'briefcase-outline';
          return <Icon name={name} color={color} size={22} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Opportunity" component={OpportunityScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    </Tab.Navigator>
  );
}
