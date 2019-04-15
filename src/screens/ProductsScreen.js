import React, { Component, Fragment } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, Image } from 'react-native'

import AllProducts from '../containers/AllProducts/index'
import Header from '../containers/Header/index'
import TopBar from './TopBar'
import RightBtn from './RightBtn'

class ProductsScreen extends Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  static get options() {
    return {
      topBar: {
        background: {
          color: '#2196f3ba',
          
        },
        title: {
          text: 'Product',
          color: '#fff'
        },
        rightButtons: [
          {
          id: 'burgerButton',
          icon: require('./media/menu-button.png'),
          color: '#fff',
        }],
        backButton: {
          color: '#fff'
        }
      },
    }
  }

  
  navigationButtonPressed({ buttonId }) {
    console.log('click')
    if (buttonId === 'burgerButton') {
      Navigation.mergeOptions('Products', {
        sideMenu: {
          left: {
            visible: true,
          },
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
        <AllProducts goToScreen={this.goToScreen} />
      </Fragment>
    )
  }
}

export default ProductsScreen
