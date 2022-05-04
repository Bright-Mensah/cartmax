import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
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

  const ResetPassword = async () => {
    setAnimate(true);

    /* check if the field isnt empty
    and if it is empty kindly prompt the user
    to enter the email address to proceed
    */

    if (email == "") {
      setAnimate(false);
      showMessage({
        message: "Error",
        icon: "warning",
        description: "Provide the Email Address to proceed",
        type: "warning",
        animated: "true",
      });
    } else {
      try {
        // go on with the password reset
        await auth.sendPasswordResetEmail(email);

        setAnimate(false);

        showMessage({
          message: `Email sent`,
          description: "Please check your inbox to reset your password",
          type: "success",
          duration: "3000",
          position: "bottom",
          icon: "success",
          animated: "true",
        });

        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      } catch (error) {
        // check if account exist
        if (error.code === "auth/user-not-found") {
          showMessage({
            message: `Account doesnt exist`,
            description: `try signing up for an account`,
            duration: "3000",
            position: "top",
            icon: "warning",
            type: "warning",
            animated: "true",
            titleStyle: {
              textAlign: "center",
              fontSize: 16,
              fontWeight: "900",
            },
            textStyle: {
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "900",
            },
          });
        }

        // check if the email address is valid
        if (error.code === "auth/invalid-email") {
          setAnimate(false);
          showMessage({
            message: `The email address is invalid`,
            type: "warning",
            duration: "3000",
            position: "top",
            icon: "warning",
            animated: "true",
          });
        }
        //  also check if theres internet connection
        else if (error.code === "auth/network-request-failed") {
          setAnimate(false);
          showMessage({
            message: `No Internet `,
            description: "check your internet connection",
            type: "warning",
            duration: "3000",
            position: "top",
            icon: "warning",
            animated: "true",
            titleStyle: {
              textAlign: "center",
              fontSize: 16,
              fontWeight: "900",
            },
            textStyle: {
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "900",
            },
          });
        } else {
          setTimeout(() => {
            setAnimate(false);
          }, 3000);
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
