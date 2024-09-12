/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import TrackingScreen from '../screens/Main/TrackingScreen';
import PaymentsScreen from '../screens/Main/PaymentsScreen';
import DetailsScreen from '../screens/Main/DetailsScreen';
import DailyConsumptionModal from '../screens/Modal/DailyConsumptionModal';
import TrackConsumption from '../screens/Main/TrackConsumption';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

const HomeStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen 
      name="HomeStack" 
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen 
      name="Details" 
      component={DetailsScreen} 
    />
    <MainStack.Screen 
      name="Daily Consumption Modal" 
      component={DailyConsumptionModal} 
    />
    <MainStack.Screen 
      name="Track Consumption" 
      component={TrackConsumption}
      options={{
        headerShown: false,
      }}
      
    />
  </MainStack.Navigator>
);

const MainNavigator = () => {
  const [userName] = useState('Justine Rey');

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'Tracking') {
            iconName = focused ? 'analytics-outline' : 'analytics-outline';
          } else if (route.name === 'Payments') {
            iconName = focused ? 'card-outline' : 'card-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, 
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#8e8e93', 
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Tracking" 
        component={TrackingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Payments" 
        component={PaymentsScreen}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
