import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import SplashScreen from '../screens/Splash/SplashScreen';
import type { RootStackParamList } from '../types/navigation';
import BnbScreen from '../screens/Bnb/BnbScreen';
import OpportunityTabs from './OpportunityTabs';
import AddFundsScreen from '../screens/AddFunds/AddFundsScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Bnb" component={BnbScreen} />
        <Stack.Screen name="OpportunityTabs" component={OpportunityTabs} />
        <Stack.Screen name="AddFunds" component={AddFundsScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
