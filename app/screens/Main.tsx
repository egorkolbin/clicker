import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  let nunber = 0;
  const [count, setCount] = useState(nunber);
  const storeData = async (value = count) => {
    try {
      const JsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('count', JsonValue)
    } catch (e) {
      // saving error
    }
    console.log('Done');
    console.log(count);
  }

  return (
    <View style={Styles.wrapper}>
      <Text>You clicked {count.toFixed(3)} times</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 0.001)}
        style={Styles.clicker}
      >
        <Text style={Styles.clickerText}>Click!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clicker: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    padding: 50,
    borderRadius: 100,
    backgroundColor: "red",
  },
  clickerText: {
    fontSize: 20,
    color: "white",
  },
});

export default Main;
