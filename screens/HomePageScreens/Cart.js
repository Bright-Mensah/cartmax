import { Text, StatusBar, SafeAreaView, TouchableOpacity ,View, ScrollView} from "react-native";
import React from "react";
import tw from "twrnc";
import { Divider } from "@rneui/base";

const Cart = () => {
  return (
    <SafeAreaView style={tw`bg-gray-900 flex-1`}>
      <StatusBar barStyle="light-content" />
      <Text style={tw`text-neutral-100 text-center text-2xl mt-5 font-bold`}>
        Categories
      </Text>

      <TouchableOpacity
        style={tw`mt-5 bg-red-500 border-solid border-4 border-red-500  rounded-full ml-10 mr-10 pt-3 pb-3`}
      >
        <Text style={tw`text-white text-center font-bold `}>
          VIEW ALL ITEMS
        </Text>
      </TouchableOpacity>
      <Text style={tw  `text-white pt-5 pl-5`}>Choose category</Text>
      <ScrollView>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Tops</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Shirts & Blouses</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Cardigans & Sweaters</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Knitwear</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Blazers</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Outwear</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Pants</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Jeans</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Shorts</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Skirts</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      <View>
        <TouchableOpacity style={tw `pt-5`}>
          <Text style={tw `text-white pl-5 text-2xl font-semibold`}>Dresses</Text>
        </TouchableOpacity>
        <Divider style={tw `mt-4 `}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
