import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootStackNavigationProp } from '../types';
import LinearGradient from 'react-native-linear-gradient';
import { signUp } from './firebaseAuth';
import { AuthInputGroup } from '../../components/AuthInputGroup';
import { Alert } from 'react-native';


export default function RegisterScreen() {
  const navigate = useNavigation<RootStackNavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const validateFirstName = (newFirstName: string) => {
    let currError: string = '';
    if (!newFirstName) {currError = 'required';}
    setErrors((prev) => ({...prev, firstName: currError}));
  };
  const validateLastName = (newLastName: string) => {
    let currError: string = '';
    if (!newLastName) {currError = 'required';}
    setErrors((prev) => ({...prev, lastName: currError}));
    return currError;
  };
  const validateEmail = (newEmail: string) => {
    // Email regex
    // 1+ character that is not whitespace or @
    const localPart = '[^\\s@]+';
    // 1 at symbol (@), separates local and domain name
    const atSymbol = '@';
    // 1+ character that is not whitespace or @
    const domainName = '[^\\s@]+';
    // 1 dot (.), separates domain and top-level domain
    const dot = '\\.';
    // 1+ character that is not whitespace or @
    const topLevelDomain = '[^\\s@]+';
    const emailRegex = new RegExp(
      `^${localPart}${atSymbol}${domainName}${dot}${topLevelDomain}$`
    );
    let currError: string = '';
    if (!newEmail) {currError = 'required';}
    else if (!emailRegex.test(newEmail)) {currError = 'invalid email format';}
    setErrors((prev) => ({...prev, email: currError}));
    return currError;
  };
  const validatePassword = (newPassword: string) => {
    // Regex
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /\d/;
    const specialChar = /[`!@#$%^&*(),.?":{}|<>]/;
    let currError: string = '';
    if (!newPassword) {currError = 'required';}
    else if (newPassword.length < 8) {currError = 'minimum 8 characters';}
    else if (!upperCase.test(newPassword)) {currError = 'at least 1 uppercase';}
    else if (!lowerCase.test(newPassword)) {currError = 'at least 1 lowercase';}
    else if (!number.test(newPassword)) {currError = 'at least 1 number';}
    else if (!specialChar.test(newPassword)) {
      currError = 'at least 1 special character';
    }
    setErrors((prev) => ({...prev, password: currError}));
    return currError;
  };

  const handleSignup = async () => {
    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const fieldsValidity = [
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      isPasswordValid,
    ];
    const hasErrors = fieldsValidity.some(error => error);
    if (hasErrors) {return;}
    const error: string = await signUp(firstName, lastName, email, password);
    if (error === 'auth/email-already-in-use') {
      setErrors((prev) => ({...prev, email: "email already used"}));
      return;
    }
    if (error) {
      Alert.alert("Error Code", error); 
      return;
    }
    navigate.navigate('Auth', {
      screen: 'Login',
      params: {
        screen: 'Login',
      },
    });
    
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create an Account</Text>

      <AuthInputGroup
        name="First Name"
        error={errors.firstName}
        value={firstName}
        onValueChange={setFirstName}
        validate={validateFirstName}
        />
      <AuthInputGroup
        name="Last Name"
        error={errors.lastName}
        value={lastName}
        onValueChange={setLastName}
        validate={validateLastName}
        />
      <AuthInputGroup
        name="Email"
        error={errors.email}
        value={email}
        onValueChange={setEmail}
        validate={validateEmail}
        />
      <AuthInputGroup
        name="Password"
        error={errors.password}
        value={password}
        onValueChange={setPassword}
        validate={validatePassword}
        isSensitive={true}
      />

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
