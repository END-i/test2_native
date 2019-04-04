import React, { Component, Fragment } from 'react'
import { Navigation } from 'react-native-navigation'

import AllProducts from '../containers/AllProducts/index'
import Header from '../containers/Header/index'

class ProductsScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Products',
        },
        rightButtons: {
          id: 'burgerButton',
          icon: require('./menu-button.png'),
        },
      },
    }
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'burgerButton') {
      Navigation.mergeOptions('Products', {
        sideMenu: {
          left: {
            visible: true,
          }
        },
      })
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
    return (
      <Fragment>
        {/* <Header /> */}
        <AllProducts goToScreen={this.goToScreen} />
      </Fragment>
    )
  }
}

export default ProductsScreen
