import styled from "styled-components/native";

export const Row = styled.View`
  flex-direction: row;
  margin: ${props => props.margiN || "0"};
  align-items: ${props => props.alignItems || "flex-start"};
`;

export const Column = styled.View`
  flex-direction: column;
  margin: ${props => props.margiN || "0"};
  align-items: ${props => props.alignItems || "flex-start"};
`;

export const BoldText = styled.Text`
  font-weight: bold;
  font-size: 18;
  color: #111;
`;

export const MyContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  margin: 2px;
  background: #ececec;
`;

export const MyImage = styled.Image`
  width: 120px;
  height: 60px;
`;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
`;

export const MyButton = styled.TouchableOpacity`
  background: ${props => props.color || "#ececec"};
  color: #fff;
  width: 100%;
  margin: 2px;
  padding: 2px 10px;
  border-radius: 3px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;
