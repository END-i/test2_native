import React, { Component } from 'react'
import AllProducts from '../containers/AllProducts/index'
import { Navigation } from 'react-native-navigation'

class ProductsScreen extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Products',
        },
      },
    }
  }

  goToScreen = (screen, item) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: {
          item: item,
        },
      },
    })
  }

  render() {
    return <AllProducts goToScreen={this.goToScreen} />
  }
}

export default ProductsScreen
