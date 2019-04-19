import React, { Component } from "react";
import { Text } from "react-native";

import { Wrapper } from "./styled";

class SideMenu extends Component {
  render() {
    return (
      <Wrapper>
        <Text>Hello! </Text>
        <Text>This is Side Menu =)</Text>
      </Wrapper>
    );
  }
}

export default SideMenu;
