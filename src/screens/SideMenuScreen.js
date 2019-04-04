import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class SideMenuScreen extends Component {
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
    width: 280,
    backgroundColor: '#F5FCFF',
  },
  cart: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
