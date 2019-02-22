import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import ProductItem from "../containers/ProductItem";

class Products extends Component {
  state = { products: null };

  static get options() {
    return {
      topBar: {
        title: {
          text: "Products"
        }
      }
    };
  }

  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    });
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/19fkac")
      .then(data => {
        return data.json();
      })
      .then(response => {
        this.setState({ products: response.slice(0, 3) });
      })
      .catch(result => {
        console.log(result);
      });
  }

  render() {
    const { products } = this.state;
    console.log(products);
    if (!products) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#111" />
          {/* <Text style={styles.welcome}>LOADING ...</Text> */}
        </View>
      );
    }

    return (
      <ScrollView>
        <View>
          {/* <Button
            onPress={() => this.goToScreen("Details")}
            title="Se details"
            style={styles.button}
          />
          <Button
            onPress={() => this.goToScreen("Cart")}
            title="Se cart"
            style={styles.buttonCart}
          /> */}
          {products.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    width: "50%"
  },
  buttonCart: {
    width: "50%",
    backgroundColor: "green"
  }
});

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Products);
