import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, FlatList, Text } from "react-native";
import styled from "styled-components/native";

const Products = () => {
  // state = { products: null };
  // const [products, setProducts] = useState({
  //   products: []
  // });
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.products);
  //   if (JSON.stringify(props.products) !== JSON.stringify(state.products)) {
  //     return {
  //       products: props.products
  //     };
  //   }
  //   return null;
  // }

  // componentDidMount() {
  //   this.props.getData();
  // }

  // goToScreen = screenName => {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: screenName
  //     }
  //   });
  // };

    // const { products } = this.state;
    // console.log(products);
    // if (!products) {
    //   return (
    //     <Loader>
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </Loader>
    //   );
    // }

    return (
      <View>
        <Text>data</Text>
        {/* <FlatList
          data={products}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          windowSize={2}
        /> */}
      </View>
    );
  }

const Loader = styled.View`
  flex: 1;
  justify-content: center;
`;


export default Products
