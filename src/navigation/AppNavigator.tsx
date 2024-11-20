import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isUserLoggedIn } from '../services/authService';

// Import the navigators
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={isUserLoggedIn() ? 'Main' : 'Auth'}>
      {/* Authentication Flow */}
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      {/* Main App Flow */}
      <RootStack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
