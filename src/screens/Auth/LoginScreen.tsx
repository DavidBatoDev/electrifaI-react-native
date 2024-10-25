/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { RootStackNavigationProp } from "../types";
import LinearGradient from "react-native-linear-gradient";
import { logIn } from "./firebaseAuth";
import { Alert } from 'react-native';
import { AuthInputGroup } from '../../components/AuthInputGroup';

export default function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({email: '',password: '',});

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
  }

  const validatePassword = (password: string) => {
    let currError: string = '';
    if (!password) {currError = 'required';}
    setErrors((prev) => ({...prev, password: currError}));
    return currError;
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid || isPasswordValid) {return;}
    const error: string = await logIn(email, password);
    if (error === 'auth/invalid-credential') {
      setErrors({email: "", password: "Incorrect Credentials"});
      return;
    };
    if (error) {
      Alert.alert("Error Code", error); 
      return;
    };
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Main', 
            params: {screen: 'Home'
          } },
        ],
      })
    );
    // navigation.navigate('Main', {
    //   screen: 'HomeStack',
    //   params: {
    //     screen: 'Home',
    //   },
    // });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo-with-name.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <Text style={styles.title}>Project ElectriAI</Text> */}
      <AuthInputGroup
        name="Email"
        error={errors.email}
        value={email}
        onValueChange={setEmail}
        validate={validateEmail}
        fieldType="email"
      />
      <AuthInputGroup
        name="Password"
        error={errors.password}
        value={password}
        onValueChange={setPassword}
        validate={validatePassword}
        fieldType="password"
      />
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
  
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>No account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Auth", {
              screen: "Register",
              params: { name: "Register" },
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  logo: {
    height: 100,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    elevation: 4,
  },
  innerButton: {
    width: "100%",
    alignItems: 'center',
    paddingVertical: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#424968",
  },
  signupLink: {
    color: "#424968",
    marginLeft: 5,
    fontWeight: "bold",
  },
});