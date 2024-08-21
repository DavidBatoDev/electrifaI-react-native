import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define the Root Stack Navigator parameter list
export type RootStackParamList = {
  Auth: any;
  Main: any;
};

// Define the Main Tab Navigator parameter list
export type MainTabParamList = {
  HomeStack: undefined;
  Profile: undefined;
  Tracking: undefined;
  Payments: undefined;
};

// Define the Home Stack Navigator parameter list
export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Navigation prop type for the Root Stack Navigator
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Navigation prop type for the Main Tab Navigator
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

// Navigation prop type for the Home Stack Navigator
export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
