import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../types";
import LinearGradient from "react-native-linear-gradient";

import { signUp } from "./firebaseAuth";


export default function RegisterScreen() {
  const navigate = useNavigation<RootStackNavigationProp>()
  const [firstName, setFirstName] = useState("a");
  const [lastName, setLastName] = useState("a");
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");

  const handleSignup = () => {
    console.log("SIGNING IN");
    signUp(firstName, lastName, email, password);
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
      <TextInput
        placeholder="First Name"
        style={styles.input}
        placeholderTextColor="#7B7B7B"
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        placeholderTextColor="#7B7B7B"
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#7B7B7B"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#7B7B7B"
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
            navigate.navigate("Auth", {
              screen: "Login",
              params: { name: "Login" },
            })
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  logo: {
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3142",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "#2D3142",
    backgroundColor: "#FFFFFF",
    elevation: 4,
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
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "#424968",
  },
  loginLink: {
    color: "#424968",
    marginLeft: 5,
    fontWeight: "bold",
  },
});