import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Top = () => {
  const [store, setStore] = useState([]);

  const getData = async () => {
    useEffect(function () {
      getData();
    }, []);
    return (
      <View>
        <Text>Top</Text>
      </View>
    );
  };
};

export default Top;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
  },
});
