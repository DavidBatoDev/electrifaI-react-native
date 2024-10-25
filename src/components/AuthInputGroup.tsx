import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from 'react-native';

type InputGroupProps = {
  name: string,
  error: string,
  value: string,
  onValueChange: (text: string) => void,
  validate: (text: string) => void,
};

export const AuthInputGroup = ({
  name,
  error,
  value,
  onValueChange,
  validate,
}: InputGroupProps) => {

  return (
    <View style={styles.inputGroup}>
      <TextInput
        placeholder={name}
        style={styles.input}
        placeholderTextColor="#7B7B7B"
        value={value}
        onChangeText={(text) => {onValueChange(text); validate(text);}}
        onBlur={() => {validate(value);}}
      />
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
  input: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    color: '#2D3142',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    marginBottom: 10,
    marginTop: 5,
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
