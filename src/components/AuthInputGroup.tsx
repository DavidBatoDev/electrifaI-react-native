import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type InputGroupProps = {
  placeholder: string,
  error: string | null,
  onErrorChange: (error: string | null) => void,
  value: string,
  onValueChange: (text: string) => void,
  validate: (text: string) => string | null,
  fieldType?: string,
};

export const AuthInputGroup = ({
  placeholder,
  error,
  onErrorChange,
  value,
  onValueChange,
  validate,
  fieldType = 'text',
}: InputGroupProps) => {
  const isPasswordField: boolean = fieldType === 'password';
  const isEmailField: boolean = fieldType === 'email';
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  return (
    <View style={styles.inputGroup}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#7B7B7B"
          value={value}
          onChangeText={(text) => {
            onValueChange(text);
            const newError = validate(text);
            onErrorChange(newError);
          }}
          onBlur={() => {
            const newError = validate(value);
            onErrorChange(newError);
          }}
          secureTextEntry={isPasswordField && isPasswordHidden}
          keyboardType={isEmailField ? 'email-address' : 'default'}
          autoCapitalize={(isEmailField || isPasswordField) ? 'none' : 'words'}
        />
        {isPasswordField &&
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordHidden((prev) => !prev)}
          >
            <Ionicons
              name={isPasswordHidden ? 'eye-off-outline' : 'eye-outline'}
              size={16}
            />
          </TouchableOpacity>
        }
      </View>
      {error && <Text style={styles.ErrorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    borderRadius: 10,
    color: '#2D3142',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    marginBottom: 10,
    marginTop: 5,
  },
  input: {
    padding: 10,
    flex: 1,
  },
  eyeIcon: {
    alignSelf: 'center',
    padding: 10,
  },
  ErrorText: {
    fontSize: 12,
    backgroundColor: '#FF5661',
    color: '#FFFF',
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginLeft: '10%',
    marginRight: 'auto',
    marginBottom: 12,
    borderRadius: 10,
  },
});
