import {
  View, 
  Text,
  StyleSheet
} from "react-native";
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import TrackingScreen from '../screens/Main/TrackingScreen';
import PaymentsScreen from '../screens/Main/PaymentsScreen';
import DetailsScreen from '../screens/Main/DetailsScreen';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

// Hooks



const HomeStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen}
    options={{
      headerShown: false  
    }}


    />
    <MainStack.Screen name="Details" component={DetailsScreen} />
  </MainStack.Navigator>
);

const MainNavigator = () => {

  const [userName, setUserName] = useState('Justine Rey')

  return (
    <Tab.Navigator  >
      <Tab.Screen name="HomeStack" component={HomeStack} 
        options={{
          headerShown: false  
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        
      }}
      />
      <Tab.Screen name="Tracking" component={TrackingScreen} 
      options={{
        
      }}
      />
      <Tab.Screen name="Payments" component={PaymentsScreen} 
      options={{
        
      }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({

  headerRightWrapper: {
    paddingHorizontal: 12,

  }

})
export default MainNavigator;




