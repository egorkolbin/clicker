import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Auth from "../screens/Auth";
import Main from "../screens/Main";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Store from "../screens/Store";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main" screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarIcon: ({ focused, size }) => {
              return (
                <View>
                  <Icon
                    name="home"
                    size={size}
                    color={focused ? "#5272ff" : "#ccc"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size }) => {
              return (
                <View>
                  <Ionicons
                    name="person"
                    size={size}
                    color={focused ? "#5272ff" : "#ccc"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            tabBarIcon: ({ focused, size }) => {
              return (
                <View>
                  <Icon
                    name="dollar"
                    size={size}
                    color={focused ? "#5272ff" : "#ccc"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, size }) => {
              return (
                <View>
                  <Ionicons
                    name="settings-outline"
                    size={size}
                    color={focused ? "#5272ff" : "#ccc"}
                  />
                </View>
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
