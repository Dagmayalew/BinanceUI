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
    tabBarInactiveTintColor: '#9CA3AF',
    tabBarStyle: { height: 64, paddingBottom: 10, paddingTop: 8 },
    tabBarLabelStyle: { fontSize: 11 },
    tabBarIcon: ({ color, size }) => {
      const name =
        route.name === 'Home' ? 'home-variant-outline' :
        route.name === 'Opportunity' ? 'chart-line' :
        'briefcase-outline';
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
