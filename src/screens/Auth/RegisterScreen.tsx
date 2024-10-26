import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Alert,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { RootStackNavigationProp } from '../types';
import LinearGradient from 'react-native-linear-gradient';
import { signUp } from './firebaseAuth';
import { AuthInputGroup } from '../../components/AuthInputGroup';

// Import validation utils
import {
  validateRequired,
  validateEmail,
  validatePassword,
} from '../../utils/validationUtils';

export default function RegisterScreen() {
  const navigate = useNavigation<RootStackNavigationProp>();
  // Input Fields
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // Input Field Errors
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Validates all input fields, returns true if all valid
  const validateAll = (): boolean => {
    const newFirstNameError: string | null = validateRequired(email);
    const newLastNameError: string | null = validateRequired(password);
    const newEmailError: string | null = validateEmail(email);
    const newPasswordError: string | null = validatePassword(password);
    // Displays errors in UI
    setFirstNameError(newFirstNameError);
    setLastNameError(newLastNameError);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    if (newFirstNameError || newLastNameError ||
      newEmailError || newPasswordError) {
      return true;
    }
    return false;
  };

  const handleSignup = async () => {
    // Validate all inputs, do not proceed if there are errors
    const hasError: boolean = validateAll();
    if (hasError) {
      return;
    }
    // Create a new account
    const error: string = await signUp(firstName, lastName, email, password);
    // Catch errors
    if (error === 'auth/email-already-in-use') {
      setEmailError('email already used');
      return;
    }
    if (error) {
      Alert.alert('Error Code', error);
      return;
    }
    // Redirect to LoginScreen
    navigate.navigate('Auth', {
      screen: 'Login',
      params: {
        screen: 'Login',
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
      <Text style={styles.title}>Create an Account</Text>

      {/* Input Fields */}
      <AuthInputGroup
        placeholder="First Name"
        error={firstNameError}
        onErrorChange={setFirstNameError}
        value={firstName}
        onValueChange={setFirstName}
        validate={validateRequired}
        />
      <AuthInputGroup
        placeholder="Last Name"
        error={lastNameError}
        onErrorChange={setLastNameError}
        value={lastName}
        onValueChange={setLastName}
        validate={validateRequired}
        />
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
        validate={validatePassword}
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
        <TouchableOpacity style={styles.innerButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('Auth', {
              screen: 'Login',
              params: { name: 'Login' },
            });
          }}
        >
          <Text style={styles.loginLink}> Login</Text>
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
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3142',
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
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#424968',
  },
  loginLink: {
    color: '#424968',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
