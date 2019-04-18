import React from 'react'
import { Dimensions, View, Text } from 'react-native'

// import {
//   MyButton,
//   Wrapper,
//   MyImage,
//   Column,
//   Row,
//   BoldText,
//   ButtonText,
// } from './styled'
const imageWidth = Math.round(Dimensions.get('window').width / 2 - 5)

const Item = ({ item, goToScreen }) => {
  console.log(item.id)
  return (
    <Wrapper>
      <View style={{ flexDirection: 'row' }}>
        {/* <MyImage
          source={{
            uri: item.image,
          }}
          width={imageWidth}
        />
        <View style={{ width: imageWidth, paddingRight: 10, paddingLeft: 10 }}>
          <MyText fontSize={30}>{item.product_name}</MyText>
          <MyText fontSize={25}>{item.modal}</MyText>
          <Price>{item.price}</Price>
          <MyButton onPress={() => goToScreen('Details', item)} color="#47acfd">
            <ButtonText>More</ButtonText>
          </MyButton> */}
          {/* <MyButton onPress={() => goToScreen('Details', item)} color="#47acfd">
            <ButtonText>More</ButtonText>
          </MyButton>
          <MyButton onPress={() => goToScreen('Cart')} color="#31b10a">
            <ButtonText>Add To Cart</ButtonText>
          </MyButton> */}
        {/* </View> */}
      </View>
    </Wrapper>
  )
}

export default Item

import styled from 'styled-components/native'

export const Wrapper = styled.View`
  margin: 7px;
  margin-left: 0;
  background: #2196f3;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  padding: 10px;
`
export const MyImage = styled.Image`
  width: ${({ width }) => width || 100}
  height: 150;
`
export const MyText = styled.Text`
  font-size: ${({ fontSize }) => fontSize || 18};
  color: #fff;
`
export const Price = styled.Text`
  margin: 10px;
  text-align: center;
  font-size: 25;
  color: #08bb08;
  background: #00000017;
`
export const MyButton = styled.TouchableOpacity`
  background: #00000040;
  align-items: center;
  width: 70%;
  margin: auto;
  padding: 5px 0;
  border-radius: 3px;
  border: 1px #fff;
`
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20;
`