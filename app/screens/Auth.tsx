import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';



const Auth = () => {
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    paddingLeft: 15,
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
export default Auth