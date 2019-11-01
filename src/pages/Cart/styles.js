import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: auto;
  /* height: 100px; */
  background: #fff;
  margin: 20px;
  padding: 10px;
  border-radius: 7px;
`;

export const Products = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false, // remove a barra de rolagem
})``;

export const Product = styled.View`
  margin-bottom: 20px;
`;

export const ProductMain = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductMainTexts = styled.View`
  flex: 1;
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
  font-size: 20px;
  color: #191920;
`;

export const ProductMainPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ProductFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  padding: 5px;
  border-radius: 5px;
`;

export const ProductControl = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductButtonControl = styled.TouchableOpacity`
  padding: 5px;
`;

export const TotalAmount = styled.TextInput.attrs({
  readonly: true,
  editable: false,
})`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  height: 30px;
  padding: 0 5px;
  color: #000;
`;

export const ProductsTotal = styled.Text`
  margin: auto 0;
  font-weight: bold;
  font-size: 20px;
`;

export const PriceTotal = styled.View``;

export const TextTotal = styled.Text`
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  color: #aaa;
`;

export const TextPrice = styled.Text`
  margin: 0 auto;
  font-size: 26px;
  font-weight: bold;
`;

export const ButtonFinish = styled.TouchableOpacity`
  background: #715fc1;
  border-radius: 7px;
  align-items: center;
  margin-top: 20px;
  /* margin-bottom: 5px; */
`;

export const ButtonFinishText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  padding: 10px;
`;
