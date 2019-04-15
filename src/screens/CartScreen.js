import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class CartScreen extends Component {
  static get options() {
    return {
      topBar: {
        background: {
          color: '#2196f3ba',
        },
        title: {
          color: '#fff',
        },
        rightButtons: {
          id: 'burgerButton',
          icon: require('./media/menu-button.png'),
          color: '#fff',
        },
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
    return (
      <View style={styles.container}>
        <Text style={styles.cart}>Cart</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cart: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
