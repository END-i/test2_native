import React from "react";
import { TouchableOpacity, Button, Text, Image } from "react-native";

const CartBtn = () => {
  return (
    <TouchableOpacity>
      <Image source={require("./assets/shopping-cart.png")} />
      <Text style={{ color: "#fff" }}>111</Text>
    </TouchableOpacity>
  );
};

export default CartBtn;
