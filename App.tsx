import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import navigators
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';

// Define the stack navigator
const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
