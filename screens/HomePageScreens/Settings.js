import { StyleSheet, Text, View, Image, TextInput, Switch } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [NewArrivalsIsEnabled, setNewArrivalsIsEnabled] = useState(false);
  const [DeliveryStatus, setDeliveryStatus] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const NewArrivalsToggleSwitch = () =>
    setNewArrivalsIsEnabled((previousState) => !previousState);
  const DeliveryToggleSwitch = () =>
    setDeliveryStatus((previousState) => !previousState);
  return (
    <View style={tw`bg-gray-900 flex-1 `}>
      <Text style={tw`text-neutral-100 text-2xl font-bold pt-5 pl-5`}>
        Settings
      </Text>
      <Text style={tw`text-neutral-100 pt-5 text-xl font-bold pl-5`}>
        Personal Information
      </Text>
      <View>
        <Text style={tw`text-red-50 pt-10 font-bold pl-5`}>Full Name</Text>

        <TextInput
          placeholder="Full name"
          placeholderTextColor={"white"}
          style={tw`border-4 border-solid rounded-xl  text-xl
       border-slate-800 bg-slate-800 ml-1 mr-1 pl-5 h-12 mt-2 text-neutral-100  `}
        />
        <Text style={tw`text-red-50 pt-10 font-bold pl-5`}>Date Of Birth</Text>

        <TextInput
          placeholder="Date Of Birth"
          placeholderTextColor={"white"}
          style={tw`border-4 border-solid rounded-xl  text-xl
       border-slate-800 bg-slate-800 ml-1 mr-1 pl-5 h-12 mt-2 text-neutral-100  `}
        />
        <Text style={tw`text-red-50 pt-10 font-bold pl-5 `}>Password</Text>
        <Text style={tw`text-red-50 pt-10 font-bold ml-80 mt--14`}>Change</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"white"}
          style={tw`border-4 border-solid rounded-xl  text-xl
       border-slate-800 bg-slate-800 ml-1 mr-1 pl-5 h-12 mt-4 text-neutral-100  `}
        />

        <Text style={tw`text-red-50 pt-10 font-bold text-xl pl-5`}>
          Notifications
        </Text>
        <View>
          <Text style={tw`text-red-50 pt-4 font-bold pl-5`}>Sales</Text>
          <Switch
            style={tw`ml-80 mt--5`}
            trackColor={{ false: "#27272a", true: "#27272a" }}
            thumbColor={isEnabled ? "#84cc16" : "#71717a"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View>
          <Text style={tw`text-red-50 pt-4 font-bold pl-5`}>New Arrivals</Text>
          <Switch
            style={tw`ml-80 mt--5`}
            trackColor={{ false: "#27272a", true: "#27272a" }}
            thumbColor={NewArrivalsIsEnabled ? "#84cc16" : "#71717a"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={NewArrivalsToggleSwitch}
            value={NewArrivalsIsEnabled}
          />
        </View>
        <View>
          <Text style={tw`text-red-50 pt-4 font-bold pl-5`}>
            Delivery status changes
          </Text>
          <Switch
            style={tw`ml-80 mt--5`}
            trackColor={{ false: "#27272a", true: "#27272a" }}
            thumbColor={DeliveryStatus ? "#84cc16" : "#71717a"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={DeliveryToggleSwitch}
            value={DeliveryStatus}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
