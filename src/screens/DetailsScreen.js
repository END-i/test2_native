import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

import TopBar from './TopBar'

import Description from '../containers/Description/index'

class DetailsScreen extends Component {
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

  goToScreen = screen => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
      },
    })
  }

  render() {
    return <Description item={this.props.item} />
  }
}
export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: '50%',
  },
})
