import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { auth } from "../database/firebase";
import Home from "./HomePageScreens/Home";

import Cart from "./HomePageScreens/Cart";
import Bag from "./HomePageScreens/Bag";
import Profile from "./HomePageScreens/Profile";

import Favorite from "./HomePageScreens/Favorite";

const Tab = createBottomTabNavigator();

const HomePage = ({ navigator }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: hp(9),
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-person-circle"
              : "ios-person-circle-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Bag") {
            iconName = focused ? "ios-briefcase" : "ios-briefcase-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "white",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
