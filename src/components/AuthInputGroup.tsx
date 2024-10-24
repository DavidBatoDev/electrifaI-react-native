import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";

type InputGroupProps = {
  name: string,
  error: string,
  onInputChange: (name: string) => void,
};

export const AuthInputGroup = ({
  name, 
  error, 
  onInputChange
}: InputGroupProps) => {
  return (
    <View style={styles.inputGroup}>
      <View style={styles.nameErrorGroup}>
        <Text style={styles.nameErrorText}>{name}</Text>
        <Text style={styles.nameErrorText}>{error}</Text>
      </View>
      <TextInput
        placeholder={name}
        style={styles.input}
        placeholderTextColor="#7B7B7B"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameErrorGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingHorizontal: 5,
  },
  nameErrorText: {
    fontSize: 12,
  },
  input: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    color: "#2D3142",
    backgroundColor: "#FFFFFF",
    elevation: 4,
    marginBottom: 10,
    marginTop: 5,
  },
});