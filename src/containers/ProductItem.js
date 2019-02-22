import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: item.image }} />
      <Text>{item.product_name}</Text>
      <Text>{item.product_id}</Text>
      <Text>{item.price}</Text>
      <View style={styles.buttonGroup}>
        <Button onPress={() => alert("goto details")} title="Details" />
        <Button onPress={() => alert("add to cart")} title="Add to cart" />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "column"
  }
});
