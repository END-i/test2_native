import React, { Fragment } from 'react'
import { View, Text, Image, Button, ImageBackground } from 'react-native'

const TopBar = () => {
  return (
      <Image
        source={require('./media/topbaImage1.png')}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          left: 50,
          backgroundColor: 'red',
          zIndex: -1,
        }}
        resizeMode="contain"
      />
      
  )
}

export default TopBar
