import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { auth } from "../database/firebase";
import { showMessage } from "react-native-flash-message";
import arrow from "../assets/arrow.png";
import googleIcon from "../assets/google-icon.png";
import fbIcon from "../assets/fb-icon.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleLogin = async () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);

    // check if all fields are not empty
    if (email == "") {
      showMessage({
        message: `email can't be empty`,
        description: `Kindly make sure all fields are filled`,
        duration: "3000",
        position: "top",
        icon: "warning",
        type: "warning",
        animated: "true",
        titleStyle: { textAlign: "center", fontSize: 16, fontWeight: "900" },
        textStyle: {
          color: "white",
          textAlign: "center",
          fontSize: 16,
          fontWeight: "900",
        },
      });
    } else if (password == "") {
      showMessage({
        message: `password can't be empty`,
        duration: "3000",
        position: "top",
        icon: "warning",
        type: "warning",
        animated: "true",
        titleStyle: {
          textAlign: "center",
          fontSize: 16,
          fontWeight: "900",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        },
        // textStyle:{color:'white', textAlign:'center',fontSize:16,fontWeight:'900'}
      });
    } else {
      try {
        await auth.signInWithEmailAndPassword(email, password);

        showMessage({
          message: `Login successful.......`,
          duration: "3000",
          position: "bottom",
          icon: "success",
          type: "success",
          animated: "true",
          titleStyle: { textAlign: "center", fontSize: 16, fontWeight: "900" },
          textStyle: {
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "900",
          },
        });
        setTimeout(() => {
          navigation.navigate("HomeScreen");
        }, 2000);
      } catch (error) {
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
        } else if (error.code === "auth/invalid-email") {
          setAnimate(false);
          showMessage({
            message: `The email address is invalid`,
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
        } else if (error.code === "auth/user-disabled") {
          setAnimate(false);
          showMessage({
            message: `Account has been disabled`,
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
        } else if (error.code === "auth/wrong-password") {
          setAnimate(false);
          showMessage({
            message: `Incorrect Password `,
            description: "Password is Incorrect",
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
          setAnimate(false);
          showMessage({
            message: `${error.message}`,
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
      }
    }
  };

  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1`}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={tw`text-blue-600 sm:text-red-600 text-center`}>
          Go home
        </Text>
      </TouchableOpacity>
      <Text
        style={[
          tw`text-center text-neutral-100 text-3xl  font-bold`,
          styles.loginTxt,
        ]}
      >
        Login
      </Text>
      <TextInput
        placeholder="email"
        placeholderTextColor={"white"}
        style={tw`text-center border-4 border-solid rounded-2xl 
        border-slate-800 bg-slate-800 pl-5 ml-5 mr-5 h-12 mt-10 text-neutral-100 `}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor={"white"}
        style={tw`text-center border-4 border-solid rounded-2xl 
        border-slate-800 bg-slate-800 ml-5 mr-5 pl-5 h-12 mt-10 text-neutral-100  `}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={styles.forgotPasswordView}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={tw`text-white`}>forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Image source={arrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={tw`bg-red-500 border-red-500 mt-10 border-4 border-solid rounded-2xl ml-20 mr-20 p-2`}
        onPress={handleLogin}
      >
        <Text style={tw`text-center text-white`}>Login</Text>
      </TouchableOpacity>

      <Text style={tw`text-neutral-100 mt-2 text-center ml-3 mt-4 `}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={tw`text-rose-500 mt-3 `}>Sign Up</Text>
        </TouchableOpacity>
      </Text>

      <ActivityIndicator
        style={tw`mt-6`}
        animating={animate}
        size="large"
        color="#ef4444"
      />

      <Text style={tw`text-neutral-100 text-center mt-6`}>
        Or login with social account
      </Text>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={[tw`bg-white rounded-2xl  h-15 mt-5 `, styles.googleIconBtn]}
        >
          <Image
            source={googleIcon}
            style={[tw`mt-4 w-6h-9 `, styles.googleIcon]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`bg-white rounded-2xl  h-15  mt-5 `, styles.fbiconBtn]}
        >
          <Image
            source={fbIcon}
            style={[tw`mt-4 w-6h-9 mt-5 `, styles.fbIcon]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    resizeMode: "cover",
    flex: 1,
  },
  arrowIcon: {
    marginLeft: wp(1),
    marginTop: wp(1.5),
  },
  googleIconBtn: {
    padding: 15,
    marginRight: 10,
  },
  fbIcon: {
    marginTop: 5,
  },
  fbiconBtn: {
    padding: 15,
  },

  loginTxt: {
    marginTop: wp(20),
  },
  googleIcon: {
    marginTop: 5,
  },
  btnView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordView: {
    display: "flex",
    flexDirection: "row",
    marginLeft: wp(60),
    marginTop: hp(1),
  },
});
