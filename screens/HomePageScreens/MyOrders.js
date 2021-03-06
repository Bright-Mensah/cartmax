import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Tab, TabView } from "@rneui/themed";

const MyOrders = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={tw`bg-gray-900 flex-1`}>
      <Text style={tw`text-neutral-100 font-bold pt-5 pl-2 text-2xl `}>
        MyOrders
      </Text>
      {/* <View style={styles.orderBtn}>
        <TouchableOpacity
          style={tw`bg-neutral-100  rounded-3xl text-center pl-2 h-8 mt-8 ml-2`}
        >
          <Text style={tw` pt-2 font-300  ml-2 pr-3`}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`mt-7`}>
          <Text style={tw`text-neutral-100 pt-4 pr-2 ml-16 `}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`mt-7`}>
          <Text style={tw`text-neutral-100 pt-4 pl-15 pr-12 ml-3`}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View> */}
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        variant="primary"
        disableIndicator={true}
      >
        <Tab.Item
          title="Delivered"
          titleStyle={[tw` text-center pl-2 h-8  `, styles.title]}
          // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}

          //  buttonStyle={tw `bg-neutral-100  rounded-3xl text-center pl-2 h-8 mt-2 ml-2`}
        />
        <Tab.Item
          title="Processing"
          titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Cancelled"
          titleStyle={{ fontSize: 12 }}
          // icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Details")}
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400 mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
            <View style={tw`bg-slate-800 rounded-xl h-33  mt-13 pt-3`}>
              <Text style={tw`text-neutral-100 ml-5`}>Order No 1947034</Text>
              <Text style={tw`text-neutral-100 pl-70 mt--4`}> 05-12-2019</Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Tracking number{" "}
                <Text style={tw`text-neutral-100`}>IW3475453455</Text>
              </Text>
              <Text style={tw`text-slate-400 ml-5`}>
                Quantity : <Text style={tw`text-neutral-100`}>3</Text>
              </Text>
              <Text style={tw`text-slate-400 pl-55 mt--4`}>
                Total Amount : <Text style={tw`text-neutral-100`}>112$</Text>
              </Text>
              <TouchableOpacity
                style={tw` mr-70 rounded-2xl border-2 border-solid border-red-50 mt-4 pl-2 pt-1 ml-5s h-8 w-27`}
              >
                <Text style={tw`text-neutral-100 text-center`}>Details</Text>
              </TouchableOpacity>
              <Text style={tw`text-lime-400  mt--6 ml-69`}>Delivered</Text>
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text style={tw`text-white`}>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text style={tw`text-white`}>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  orderBtn: {
    display: "flex",
    flexDirection: "row",
  },
});
