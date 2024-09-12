import { Button, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../types";
import LinearGradient from "react-native-linear-gradient";


export default function Login() {
  const navigation = useNavigation<RootStackNavigationProp>()

  const handleLogin = () => {
    navigation.navigate('Main', {
          screen: 'HomeStack',
          params: {
            screen: 'Home',
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
      {/* <Text style={styles.title}>Project ElectriAI</Text> */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#2D3142"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#2D3142"
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
        <Text style={styles.signupText}>Don't have an account yet?</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFB315",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    color: "#000",
    backgroundColor: "#FFFFFF",
    elevation: 4,
  },
  button: {
    width: "80%",
    borderRadius: 8,
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
    color: "#000",
  },
  signupLink: {
    color: "#2D3142",
    marginLeft: 5,
    fontWeight: "bold",
  },
});