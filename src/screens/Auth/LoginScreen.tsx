import React, { useState } from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { RootStackNavigationProp } from '../types';
import LinearGradient from 'react-native-linear-gradient';
import { logIn } from '../../services/authService';
import { AuthInputGroup } from '../../components/AuthInputGroup';

// Import validation utils
import {
  validateRequired,
  validateEmail,
} from '../../utils/validationUtils';

export default function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  // Input Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Input Field Errors
  const [emailError, setEmailError] = useState<string | null>('');
  const [passwordError, setPasswordError] = useState<string | null>('');

  // Validates all input fields, returns true if all valid
  const validateAll = (): boolean => {
    const newEmailError: string | null = validateEmail(email);
    const newPasswordError: string | null = validateRequired(password);
    // Display errors in UI
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    if (newEmailError || newPasswordError) {
      return true;
    }
    return false;
  };

  const handleLogin = async () => {
    // Validate all inputs, do not proceed if there are errors
    const hasError: boolean = validateAll();
    if (hasError) {
      return;
    }
    // Log in
    const error: string = await logIn(email, password);
    // Catch errors
    if (error === 'auth/invalid-credential') {
      setPasswordError('Incorrect Credentials');
      return;
    }
    if (error) {
      Alert.alert('Error Code', error);
      return;
    }
    // Redirect to HomeScreen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Main',
            params: {screen: 'Home',
          } },
        ],
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Input Fields */}
      <AuthInputGroup
        placeholder="Email"
        error={emailError}
        onErrorChange={setEmailError}
        value={email}
        onValueChange={setEmail}
        validate={validateEmail}
        fieldType="email"
        />
      <AuthInputGroup
        placeholder="Password"
        error={passwordError}
        onErrorChange={setPasswordError}
        value={password}
        onValueChange={setPassword}
        validate={validateRequired}
        fieldType="password"
      />

      {/* Submit Button */}
      <LinearGradient
        colors={['#24252C', '#454D6D']}
        locations={[0, 1]}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.innerButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Register link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>No account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Auth', {
              screen: 'Register',
              params: { name: 'Register' },
            });
          }}
        >
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  logo: {
    height: 100,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 4,
  },
  innerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#424968',
  },
  signupLink: {
    color: '#424968',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
