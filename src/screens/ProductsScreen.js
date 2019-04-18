import React, { Component, Fragment } from "react";
import { Navigation } from "react-native-navigation";
import { View, Text, Image } from "react-native";

import AllProducts from "../containers/AllProducts/index";

class ProductsScreen extends Component {
  // constructor(props) {
  //   super(props)
  //   Navigation.events().bindComponent(this)
  // }

  // static get options() {
  //   return {
  //     topBar: {
  //       background: {
  //         color: '#2196f3ba',
  //       },
  //       title: {
  //         text: 'Product',
  //         color: '#fff',
  //       },
  //       // rightButtons: [
  //       //   {
  //       //     id: 'burgerButton',
  //       //     icon: require('./assets/menu-button.png'),
  //       //     color: '#fff',
  //       //   },
  //       // ],
  //       backButton: {
  //         color: '#fff',
  //       },
  //     },
  //   }
  // }

  // navigationButtonPressed({ buttonId }) {
  //   if (buttonId === 'burgerButton') {
  //     Navigation.mergeOptions('Products', {
  //       // sideMenu: {
  //       //   left: {
  //       //     visible: true,
  //       //   },
  //       // },
  //     })
  //   }
  // }

  goToScreen = (screen, item) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: {
          item: item
        }
      }
    });
  };

  render() {
    return <AllProducts goToScreen={this.goToScreen} />;
  }
}

export default ProductsScreen;
