import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../types";

export default function Signup() {
  const navigate = useNavigation<RootStackNavigationProp>()
  
  const handleSignup = () => {
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
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#D4820C"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFB315",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#D4820C",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    backgroundColor: "#FFB315",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
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
    color: "#000",
  },
  loginLink: {
    color: "#FFB315",
    marginLeft: 5,
    fontWeight: "bold",
  },
});