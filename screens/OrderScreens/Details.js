import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import girl from "../../assets/home-image.png";

const Details = () => {
  return (
    <View style={tw`bg-gray-900 flex-1`}>
      <Text style={tw`text-white pt-6 font-semibold pl-3`}>
        Order No1947034
      </Text>
      <Text style={tw`text-white ml-77 mt--4`}>05-12-2019</Text>
      <Text style={tw`text-slate-400 pt-7 pl-3`}>
        Tracking number :{" "}
        <Text style={tw`text-white font-semibold`}>IW3475453455</Text>
      </Text>
      <Text style={tw`text-lime-400 ml-80 mt--4`}>Delivered</Text>
      <Text style={tw`text-white font-semibold mt-7 pl-3`}>3 items</Text>
      <View style={tw`h-60 mt-2`}>
        <ScrollView>
          <View style={tw`bg-gray-700 border-solid rounded-2xl mt-2 h-30 `}>
            <Image source={girl} style={tw`w-30 h-30 rounded-xl`} />
            <Text style={tw`text-white pl-35 font-semibold text-2xl  mt--30`}>
              pullover
            </Text>
            <Text style={tw`text-red-50 pl-35 pt-2`}>Mango</Text>
            <Text style={tw`text-gray-400 pl-35 pt-2`}>
              color:<Text style={tw`text-white font-bold`}>Gray</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-60 mt--4`}>
              Size <Text style={tw`text-white font-bold`}>L</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-35 pt-3 pb-3 `}>
              Units: <Text style={tw`text-white font-bold`}>1</Text>
            </Text>
            <Text style={tw`text-white pl-93 mt--8 `}>51$</Text>
          </View>
          <View style={tw`bg-gray-700 border-solid rounded-2xl mt-2 h-30 `}>
            <Image source={girl} style={tw`w-30 h-30 rounded-xl`} />
            <Text style={tw`text-white pl-35 font-semibold text-2xl  mt--30`}>
              pullover
            </Text>
            <Text style={tw`text-red-50 pl-35 pt-2`}>Mango</Text>
            <Text style={tw`text-gray-400 pl-35 pt-2`}>
              color:<Text style={tw`text-white font-bold`}>Gray</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-60 mt--4`}>
              Size <Text style={tw`text-white font-bold`}>L</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-35 pt-3 pb-3 `}>
              Units: <Text style={tw`text-white font-bold`}>1</Text>
            </Text>
            <Text style={tw`text-white pl-93 mt--8 `}>51$</Text>
          </View>
          <View style={tw`bg-gray-700 border-solid rounded-2xl mt-2 h-30 `}>
            <Image source={girl} style={tw`w-30 h-30 rounded-xl`} />
            <Text style={tw`text-white pl-35 font-semibold text-2xl  mt--30`}>
              pullover
            </Text>
            <Text style={tw`text-red-50 pl-35 pt-2`}>Mango</Text>
            <Text style={tw`text-gray-400 pl-35 pt-2`}>
              color:<Text style={tw`text-white font-bold`}>Gray</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-60 mt--4`}>
              Size <Text style={tw`text-white font-bold`}>L</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-35 pt-3 pb-3 `}>
              Units: <Text style={tw`text-white font-bold`}>1</Text>
            </Text>
            <Text style={tw`text-white pl-93 mt--8 `}>51$</Text>
          </View>
          <View style={tw`bg-gray-700 border-solid rounded-2xl mt-2 h-30 `}>
            <Image source={girl} style={tw`w-30 h-30 rounded-xl`} />
            <Text style={tw`text-white pl-35 font-semibold text-2xl  mt--30`}>
              pullover
            </Text>
            <Text style={tw`text-red-50 pl-35 pt-2`}>Mango</Text>
            <Text style={tw`text-gray-400 pl-35 pt-2`}>
              color:<Text style={tw`text-white font-bold`}>Gray</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-60 mt--4`}>
              Size <Text style={tw`text-white font-bold`}>L</Text>
            </Text>
            <Text style={tw`text-gray-400 pl-35 pt-3 pb-3 `}>
              Units: <Text style={tw`text-white font-bold`}>1</Text>
            </Text>
            <Text style={tw`text-white pl-93 mt--8 `}>51$</Text>
          </View>
        </ScrollView>
      </View>

      {/* details about the order */}
      <View>
        <Text style={tw`text-white mt-4`}>Order Information</Text>
      </View>
    </View>
  );
};

export default Details;
