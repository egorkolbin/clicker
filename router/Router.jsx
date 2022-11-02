import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{}}>
        <Stack.Screen
        name="Auth"
        component={Auth}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
