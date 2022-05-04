import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
// firebase authentication
import { auth } from "../database/firebase";
import { showMessage } from "react-native-flash-message";
import arrow from "../assets/arrow.png";
import googleIcon from "../assets/google-icon.png";
import fbIcon from "../assets/fb-icon.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [animate, setAnimate] = useState(false);

  const timeout = async () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const signUp = async () => {
    timeout();

    // check if all fields are not empty
    if (name == "") {
      showMessage({
        message: `name can't be empty`,
        type: "warning",
        duration: "3000",
        position: "top",
        icon: "warning",
        animated: "true",
      });
    } else if (email == "") {
      showMessage({
        message: `email can't be empty`,
        type: "warning",
        duration: "3000",
        position: "top",
        icon: "warning",
        animated: "true",
      });
    } else if (password == "") {
      setAnimate(false);
      showMessage({
        message: `password can't be empty`,
        type: "warning",
        duration: "3000",
        position: "top",
        icon: "warning",
        animated: "true",
      });
    }
    // if confirm password is not the same as password alert the user
    else if (confirmPassword == "") {
      showMessage({
        message: `Confirm password can't be empty`,
        type: "warning",
        duration: "3000",
        position: "top",
        icon: "warning",
        animated: "true",
      });
    } else if (confirmPassword != password) {
      showMessage({
        message: `Password ain't the same`,
        type: "warning",
        duration: "3000",
        position: "top",
        icon: "warning",
        animated: "true",
      });
    } else {
      // if everything is secured then sign the user up
      try {
        await timeout();

        await auth.createUserWithEmailAndPassword(email, password);

        showMessage({
          message: `Account Created Successfully........`,
          type: "success",
          duration: "3000",
          position: "bottom",
          icon: "success",
          animated: "true",
        });

        setTimeout(() => {
          navigation.navigate("Login");
        }, 5000);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setAnimate(false);
          showMessage({
            message: `Account exist already, try logging in`,
            type: "warning",
            duration: "3000",
            position: "top",
            icon: "warning",
            animated: "true",
          });
        } else if (error.code === "auth/invalid-email") {
          setAnimate(false);
          showMessage({
            message: `The email address is invalid`,
            type: "warning",
            duration: "3000",
            position: "top",
            icon: "warning",
            animated: "true",
          });
        } else if (error.code === "auth/weak-password") {
          setAnimate(false);
          showMessage({
            message: `password should be 6 or more cha`,
            type: "warning",
            duration: "3000",
            position: "top",
            icon: "warning",
            animated: "true",
          });
        } else if (error.code === "auth/network-request-failed") {
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
        }

        // showMessage({
        //   message:`${error.message}`,
        //   type:'warning',
        //   duration:'3000',
        //   position:'top',
        //   icon:'warning',
        //   animated:'true'
        // });
      }
    }
  };

  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1`}>
      <StatusBar barStyle="light-content" />
      <Text style={tw`text-center text-neutral-50 mt-0 text-3xl  font-bold`}>
        Sign Up
      </Text>
      <KeyboardAvoidingView enabled>
        <TextInput
          placeholder="Name"
          placeholderTextColor={"white"}
          style={tw`text-center border-4 border-solid rounded-2xl 
      border-slate-800 bg-slate-800 pl-5 ml-5 mr-5 h-14 mt-10 text-red-50 `}
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor={"white"}
          style={tw`text-center border-4 border-solid rounded-2xl 
      border-slate-800 bg-slate-800 pl-5 ml-5 mr-5 h-14 mt-8 text-red-50`}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={"white"}
          style={tw`text-center border-4 border-solid rounded-2xl 
      border-slate-800 bg-slate-800 ml-5 mr-5 pl-5 h-14 mt-8 text-red-50 `}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TextInput
          placeholder="Confirm password"
          placeholderTextColor={"white"}
          style={tw`text-center border-4 border-solid rounded-2xl 
      border-slate-800 bg-slate-800  ml-5 mr-5 pl-5 h-14 mt-8 text-red-50 `}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </KeyboardAvoidingView>
      <View style={styles.AlreadyHaveAnAccountView}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={tw`text-white`}>Already have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={arrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`bg-red-500 border-red-500 mt-10 border-4 border-solid rounded-2xl ml-20 mr-20 p-2`}
        onPress={signUp}
      >
        <Text style={tw`text-center text-white`}>Sign up</Text>
      </TouchableOpacity>
      <ActivityIndicator
        style={tw`mt-10`}
        animating={animate}
        size="large"
        color="red"
      />

      <Text style={tw`text-white text-center`}>
        Or sign up with social account
      </Text>

      <View
        style={[
          tw`flex flex-row justify-center items-center mt-5`,
          styles.signUpWithSocialView,
        ]}
      >
        <TouchableOpacity
          style={[tw`bg-red-50 rounded-2xl   h-15  `, styles.googleIconBtn]}
        >
          <Image
            source={googleIcon}
            style={[tw`mt-4 w-6h-9 `, styles.googleIcon]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw` bg-red-50 h-15 rounded-2xl  `, styles.fbIconBtn]}
        >
          <Image source={fbIcon} style={[tw`mt-4 w-6h-9 `, styles.fbIcon]} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    resizeMode: "cover",
    flex: 1,
  },
  AlreadyHaveAnAccountView: {
    display: "flex",
    flexDirection: "row",
    marginLeft: wp(50),
    marginTop: hp(1),
  },
  arrowIcon: {
    marginLeft: wp(1),
    marginTop: wp(1.5),
  },
  signUpWithSocialView: {
    marginLeft: wp(10),
  },
  googleIcon: {
    marginTop: 5,
  },
  fbIcon: {
    marginTop: 5,
  },
  fbIconBtn: {
    padding: 15,
  },
  googleIconBtn: {
    padding: 15,
    marginRight: 10,
  },
});
