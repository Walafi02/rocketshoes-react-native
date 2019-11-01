import styled from 'styled-components/native';

export const Container = styled.View`
  width: auto;
  background: #fff;
  margin: 20px;
  padding: 10px;
  border-radius: 7px;
`;

export const Title = styled.Text`
  color: red;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProductMain = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductMainTexts = styled.View`
  display: flex;
  justify-content: space-evenly;
`;

export const ProductDelete = styled.TouchableOpacity`
  justify-content: center;
  margin-left: auto;
`;

export const ProductMainTitle = styled.Text.attrs({
  numberOfLines: 2, // define quantas linas o texto pode ter
})`
  font-size: 22px;
  color: #191920;
`;

export const ProductMainPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ProductFooter = styled.View``;
