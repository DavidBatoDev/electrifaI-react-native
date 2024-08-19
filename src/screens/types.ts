import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Root stack navigator (main entry point)
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined; // Main refers to your bottom tab navigator
};

// Main tab navigator (nested within RootStack)
export type MainTabParamList = {
  HomeStack: undefined; // HomeStack is the stack navigator within the tab
  Profile: undefined;
  Tracking: undefined;
  Payments: undefined;
};

// Home stack navigator (nested within HomeStack tab)
export type HomeStackParamList = {
  Home: undefined; // Home screen within HomeStack
  Details: undefined; // Details screen within HomeStack
};

// Navigation prop type for root stack navigator
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Navigation prop type for main tab navigator
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

// Navigation prop type for home stack navigator
export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
