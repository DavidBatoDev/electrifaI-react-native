import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the navigators
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Auth">
      {/* Authentication Flow */}
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }} // Hide header for auth screens
      />
      {/* Main App Flow */}
      <RootStack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }} // Hide header for main screens
      />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
