import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../types";
import LinearGradient from "react-native-linear-gradient";


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
        resizeMode="contain"
      />
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        placeholderTextColor="#2D3142"
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        placeholderTextColor="#2D3142"
      />
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
    borderRadius: 4,
    color: "#000",
    backgroundColor: "#f9f9fb",
    elevation: 4,
  },
  button: {
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
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
    color: "#000",
  },
  loginLink: {
    color: "#2D3142",
    marginLeft: 5,
    fontWeight: "bold",
  },
});