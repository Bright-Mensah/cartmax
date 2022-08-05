import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { showMessage } from "react-native-flash-message";
import { auth } from "../database/firebase";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ForgotPassword = ({ navigation }) => {
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    setAnimate(true);
    if (email == "") {
      setAnimate(false);
      showMessage({
        type: "warning",
        description: "Provide Associate Email Address",
        icon: "warning",
        animated: "true",
        position: "top",
        message: "Error",
      });
    } else {
      try {
        await auth.sendPasswordResetEmail(email);
        setAnimate(false);
        showMessage({
          type: "success",
          message: "Email sent",
          description: "Please check your inbox to reset  password",
          position: "center",
          icon: "success",
          animated: "true",
          duration: "3000",
        });
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setAnimate(false);
          showMessage({
            type: "warning",
            icon: "warning",
            description: "Email does not exist",
            position: "top",
            animated: "true",
            message: "warning",
          });
        } else if (error.code === "auth/invalid-email") {
          setAnimate(false);
          showMessage({
            type: "warning",
            icon: "warning",
            description: "Email is invalid",
            position: "top",
            animated: "true",
            message: "warning",
            duration: "4000",
          });
        }
        else if (error.code === "auth/network-request-failed") {
          setAnimate(false);
          showMessage({
            type: "warning",
            icon: "warning",
            description: "check your internet connection",
            position: "top",
            animated: "true",
            message: "No Internet",
            duration: "4000",
          });
        }
      
        
      }

    }
  };

  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1`}>
      <Text style={tw`text-center mt-30 text-2xl text-neutral-100 font-bold`}>
        Forgot your password?
      </Text>
      <Text style={tw`text-center mt-5 pl-5 pr-5 text-neutral-100`}>
        Please, enter your email address. You will receive {"\n"} a link to
        create a new password via email.
      </Text>
      <Text style={tw`mt-15 pl-2 text-neutral-100`}>EMAIL ADDRESS</Text>

      <TextInput
        style={tw`mt-2 rounded-md  h-12 border-2
      border-slate-800 mr-1 ml-1 bg-slate-800 text-neutral-100`}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View style={styles.resetBtnView}>
        <TouchableOpacity
          onPress={handleReset}
          style={[
            tw`bg-red-500 border-4 border-red-500 border-solid rounded-full w-50   `,
            styles.resetBtn,
          ]}
        >
          <Text style={[tw`text-white text-center font-semibold p-2.5`]}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicator
        style={tw`mt-15`}
        animating={animate}
        size="large"
        color="red"
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  resetBtnView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(10),
  },
  resetBtn: {
    height: hp(5.5),
  },
});
