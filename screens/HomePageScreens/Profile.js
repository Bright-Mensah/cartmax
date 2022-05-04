import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import girl from "../../assets/home-image.png";
import rightArrow from "../../assets/right-arrow.png";
import { Divider } from "@rneui/base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1 `}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={tw`text-neutral-100 text-4xl pl-6 font-bold `}>
          My Profile
        </Text>
        <Image
          source={girl}
          style={[tw` w-19 h-19 rounded-full`, styles.headerImage]}
        />
      </View>
      <View style={styles.userDetails}>
        <Text style={tw`text-white  font-bold text-xl`}>Matilda Brown</Text>
        <Text style={tw`text-white font-bold text-xl`}>
          MatildaBrown@mail.com
        </Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("MyOrders")}>
          <Text style={[tw`text-white`, styles.headerTitle]}>My Orders</Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>
            Already have 12 orders
          </Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
      <Divider style={tw`mt-4 ml-1 mr-1 `} />
      <View>
        <TouchableOpacity>
          <Text style={[tw`text-white`, styles.headerTitle]}>
            Shipping addresses
          </Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>3 addresses</Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
      <Divider style={tw`mt-2 ml-1 mr-1 `} />
      <View>
        <TouchableOpacity>
          <Text style={[tw`text-white`, styles.headerTitle]}>
            Payment methods
          </Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>visa **34</Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
      <Divider style={tw`mt-2 ml-1 mr-1 `} />
      <View>
        <TouchableOpacity>
          <Text style={[tw`text-white`, styles.headerTitle]}>PromoCodes</Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>
            You have special promocodes
          </Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
      <Divider style={tw`mt-2 ml-1 mr-1 `} />
      <View>
        <TouchableOpacity>
          <Text style={[tw`text-white`, styles.headerTitle]}>My Reviews</Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>
            Reviews for 4 items
          </Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
      <Divider style={tw`mt-2 ml-1 mr-1 `} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={[tw`text-white`, styles.headerTitle]}>Settings</Text>
          <Text style={tw`text-white mt-2 ml-10 pl-2`}>
            Notifications, password
          </Text>
          <Image source={rightArrow} style={tw`w-7 h-8 mt--8 ml-85`} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerTitle: {
    paddingTop: hp(3),
    paddingLeft: wp(12),
  },
  headerImage: {
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  userDetails: {
    marginLeft: wp(28.5),
    marginTop: wp(-15),
  },
  menu: {
    marginTop: hp(4),
  },
  header: {
    marginTop: hp(2),
  },
});
