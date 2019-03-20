import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Text} from 'react-native'

import {
  MyButton,
  MyContainer,
  MyImage,
  Column,
  Row,
  BoldText,
  ButtonText,
} from './styled'

const Item = ({ item, goToScreen }) => {
  console.log(item.id)
  return (
    <MyContainer>
      <Row>
        <TouchableOpacity onPress={() => console.log('goto details')}>
          <MyImage
            source={{
              uri: item.image,
            }}
          />
        </TouchableOpacity>
        <Column margiN="5px">
          <TouchableOpacity onPress={() => goToScreen('Details', item)}>
            <BoldText>{item.product_name}</BoldText>
          </TouchableOpacity>
        </Column>
      </Row>
      <Column alignItems="center">
        <BoldText>{item.price}</BoldText>
        <MyButton onPress={() => goToScreen('Details', item)} color="#47acfd">
          <ButtonText>More</ButtonText>
        </MyButton>
        <MyButton onPress={() => goToScreen('Cart')} color="#31b10a">
          <ButtonText>Add To Cart</ButtonText>
        </MyButton>
      </Column>
    </MyContainer>
  )
}

export default Item
