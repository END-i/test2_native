import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
  background-color: #2196f3;
`
export const Divider = styled.View`
  border-bottom-width: 3;
  border-color: #ffffff30;
  margin-left: 20;
  margin-right: 20;
  margin-top: 20;
  margin-bottom: 20;
`
export const MyImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  margin: auto;
  height: 250;
`
export const Sale = styled.View`
  display: ${({sale})=> sale ? 'flex' : 'none'};
  background-color: #d02222;
  position: absolute;
  right: 0;
  bottom: 20;
  padding-left: 30;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 20;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
`
export const SaleText = styled.Text`
  color: #fff;
  font-size: 22;
  font-weight: bold;
`
export const Caption = styled.View`
  padding-top: 30;
  padding-left: 30;
  padding-bottom: 10;
`
export const CaptionText = styled.Text`
  color: #fff;
  font-size: ${({ fontSize }) => fontSize || 20};
`

export const Price = styled.Text`
  color: #68c568;
  font-size: 30;
  text-align: center;
  font-weight: bold;
  padding-top: 5;
  padding-bottom: 5;
`
export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #008000;
  font-size: 19;
  margin-bottom: 10;
  padding-bottom: 5;
  padding-top: 5;
  padding-left: 20;
  padding-right: 20;
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
`
export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 25;
  font-weight: bold;
`
export const CartImage = styled.Image`
  width: 25;
  height: 25;
  margin-right: 10;
`
export const Info = styled.View`
  padding-top: 10;
  padding-left: 30;
  padding-right: 30;
  padding-bottom: 10;
  flex: 1;
  justify-content: flex-start;
`
export const InfoCaption = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 25;
  font-weight: bold;
  margin-bottom: 10;
`
export const InfoTextWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`
export const IfonText = styled.Text`
  font-size: 20;
  color: #fff;
  margin-top: 5;
  margin-bottom: 5;
`
export const ProductId = styled.Text`
  text-align: center;
  font-size: 20;
  color: #fff;
`