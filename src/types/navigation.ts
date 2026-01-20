export type BottomTabParamList = {
  Home: undefined;
  Markets: undefined;
  Trade: undefined;
  Futures: undefined;
  Assets: undefined;
};

import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: undefined;
  Bnb: undefined;
  OpportunityTabs: NavigatorScreenParams<OpportunityTabParamList> | undefined;
  AddFunds: undefined;
  ChatList: undefined;
  Chat: undefined;
};

export type OpportunityTabParamList = {
  Opportunity: undefined;
  Calendar: undefined;
  Portfolio: undefined;
};

export type PortfolioTopTabParamList = {
  HoldingInsights: undefined;
  Pnl: undefined;
};
