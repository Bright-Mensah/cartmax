import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import girl from "../../assets/home-image.png";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScreenContainer } from "react-native-screens";

const Home = () => {
  return (
    <View style={tw`bg-gray-900 flex-1`}>
      <StatusBar barStyle="dark-content" />
      {/* h-120 w-100 */}
      <Image source={girl} style={styles.image} />
      <Text style={tw`mt--48 ml-5 text-neutral-100 font-bold text-5xl`}>
        Fashion {"\nsale"}
      </Text>
      <TouchableOpacity
        style={[
          tw`bg-red-500 border-red-500 mt-2 border-4 border-solid rounded-2xl  `,
          styles.checkBtn,
        ]}
      >
        <Text
          style={[tw` text-white  text-center text-neutral-100 font-bold `]}
        >
          Check
        </Text>
      </TouchableOpacity>
      <View style={tw`bg-gray-900 mt-10 `}>
        <Text style={tw`text-neutral-100 mt-6 font-bold text-4xl ml-5`}>
          New
        </Text>
        <Text style={tw`text-neutral-100 pl-5`}>
          You've never seen it before!
        </Text>
        <TouchableOpacity onPress={() => Alert.alert("dkd")}>
          <Text style={tw`text-neutral-100 ml-75 mt--13`}>View all</Text>
        </TouchableOpacity>

        <ScrollView
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          automaticallyAdjustContentInsets
          horizontal={true}
        >
          <View style={styles.imageCarousel}>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
            <View>
              <Image
                source={girl}
                style={[tw`rounded-xl`, styles.carouselImage]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: wp("100%"),
    height: hp(62),
  },
  checkBtn: {
    width: wp(30),
    marginLeft: wp(5),
  },
  imageCarousel: {
    display: "flex",
    flexDirection: "row",
    paddingTop: hp(1),
  },

  carouselImage: {
    width: wp(20),
    height: hp(20),
    marginRight: wp(5),
  },
});
