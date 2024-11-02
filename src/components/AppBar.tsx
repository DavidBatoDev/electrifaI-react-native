// AppBar.tsx
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Profile: undefined;
  Notifications: undefined;
}

export default function AppBar() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Appbar.Header style={styles.appBar}>
      {/* Profile Icon on the Left */}
      <Appbar.Action
        icon="account-circle-outline"
        size={32}
        onPress={() => navigation.navigate('Profile')}
        style={styles.action}
      />

      {/* Logo in the Center */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Notifications Icon on the Right */}
      <Appbar.Action
        icon="bell-outline"
        size={28}
        onPress={() => navigation.navigate('Notifications')}
        style={styles.action}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#fff',
    elevation: 4, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  action: {
    marginHorizontal: 8,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,  // Adjust size according to your needs
    height: 40,
  },
});