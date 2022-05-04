import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/SignUp";
import tw from "twrnc";
import image from "./assets/splash.png";
import FlashMessage from "react-native-flash-message";
import HomePage from "./screens/Homepage";
import ForgotPassword from "./screens/ForgotPassword";
import homeIcon from "./assets/home-image.png";
import Settings from "./screens/HomePageScreens/Settings";
import MyOrders from "./screens/HomePageScreens/MyOrders";
import Details from "./screens/OrderScreens/Details";
import AsyncStorage from "@react-native-async-storage/async-storage/";
import { YellowBox } from "react-native-web";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",

            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{
            title: "",

            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
            headerBackTitle: "",
          }}
        />
        <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
            headerBackTitle: "",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: "Order Details",
            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTintColor: "white",
            headerBackTitle: "",
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

YellowBox.ignoreWarnings([
  "warning: Async storage has been extracted from react-native core",
]);
const styles = StyleSheet.create({
  container: {},
});
