import React, { Component } from 'react'

import { View, ScrollView, Text, Image } from 'react-native'
import {
  Wrapper,
  MyImage,
  Sale,
  SaleText,
  Caption,
  CaptionText,
  Divider,
  Info,
  InfoCaption,
  InfoTextWrapper,
  IfonText,
  ProductId,
  Price,
  CartButton,
  CartImage,
  ButtonText,
} from './styled'

class Description extends Component {
  render() {
    const item = this.props.item
    return (
      <Wrapper>
        <MyImage
          source={{
            uri: item.image,
          }}
        >
          <Sale sale={item.sale}>
            <SaleText>{`SALE  99%`}</SaleText>
          </Sale>
        </MyImage>

        <Caption>
          <CaptionText fontSize={40}>
            {item.product_name.toUpperCase()}
          </CaptionText>
          <CaptionText fontSize={30}>{item.modal}</CaptionText>
          <CaptionText fontSize={20}>{item.year}</CaptionText>
        </Caption>

        <Divider />

        <Price>{item.price}</Price>
        <CartButton>
          <CartImage source={require('./cart.png')} />
          <ButtonText>Add To Cart</ButtonText>
        </CartButton>

        <Divider />

        <Info>
          <InfoCaption>{`Сharacteristic:`.toUpperCase()}</InfoCaption>
          <InfoTextWrapper>
            <IfonText>Motor:</IfonText>
            <IfonText>{item.motor} cm3</IfonText>
          </InfoTextWrapper>
          <InfoTextWrapper>
            <IfonText>Max Speed: </IfonText>
            <IfonText>{item.max_speed}</IfonText>
          </InfoTextWrapper>
          <InfoTextWrapper>
            <IfonText>Cylinder </IfonText>
            <IfonText>{item.cylinder}</IfonText>
          </InfoTextWrapper>
        </Info>

        <Divider />

        <ProductId>Product ID: {item.product_id}</ProductId>
      </Wrapper>
    )
  }
}
export default Description
