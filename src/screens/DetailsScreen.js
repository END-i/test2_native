import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

import Description from '../containers/Description/index'

class DetailsScreen extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Details',
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
