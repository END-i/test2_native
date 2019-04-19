import React from "react";
// import { View, Button, Text, Image } from " react-native";
import CartBtn from "./CartBtn";

const TopBarNavigation = screenName => {
  return {
    topBar: {
      background: {
        color: "#0e3d88d1"
      },
      title: {
        text: screenName,
        color: "#fff"
      },
      rightButtons: [
        {
          id: "sideMenuButton",
          icon: require("./assets/menu-button.png"),
          color: "#fff"
        },
        {
          id: "cartScreen",
          icon: require("./assets/shopping-cart.png"),
          color: "#fff"
        }
      ],
      backButton: {
        color: "#fff"
      }
    }
  };
};

export default TopBarNavigation;
