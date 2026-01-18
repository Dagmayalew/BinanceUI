import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/Home/HomeScreen';
import MarketsScreen from '../screens/Markets/MarketsScreen';
import TradeScreen from '../screens/Trade/TradeScreen';
import FuturesScreen from '../screens/Futures/FuturesScreen';
import AssetsScreen from '../screens/Assets/AssetsScreen';
import { colors, typography } from '../theme';
import type { BottomTabParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          height: 56 + insets.bottom,
          paddingBottom: Math.max(insets.bottom, 8),
          paddingTop: 6,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontSize: 11, fontFamily: typography.fontFamily.medium },
        tabBarIcon: ({ color, focused }) => {
          const name =
            route.name === 'Home'
              ? focused ? 'home-variant' : 'home-variant-outline'
              : route.name === 'Markets'
              ? focused ? 'chart-line' : 'chart-line'
              : route.name === 'Trade'
              ? focused ? 'swap-horizontal' : 'swap-horizontal'
              : route.name === 'Futures'
              ? focused ? 'file-document-outline' : 'file-document-outline'
              : focused ? 'wallet-outline' : 'wallet-outline';
          return <Icon name={name} color={color} size={22} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Markets" component={MarketsScreen} />
      <Tab.Screen name="Trade" component={TradeScreen} />
      <Tab.Screen name="Futures" component={FuturesScreen} />
      <Tab.Screen name="Assets" component={AssetsScreen} />
    </Tab.Navigator>
  );
}
