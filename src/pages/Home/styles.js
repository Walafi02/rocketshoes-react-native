import styled from 'styled-components/native';

export const Product = styled.View`
  margin: 20px;
  background: #fff;
  width: 220px;
  height: 358px;
  border-radius: 7px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2, // define quantas linas o texto pode ter
})`
  padding: 0 5px;
  font-size: 20px;
  color: #191920;
`;

export const ProductPrice = styled.Text`
  padding: 5px 5px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #715fc1;
  border-radius: 4px;
  color: #fff;
  border: 0;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  margin-top: auto;
`;

export const ProductButtonView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 12px;
  /* width: 50px; */
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductButtonViewText = styled.Text`
  color: #fff;
  padding-left: 5px;
  margin: auto;
`;

export const ProductButtonText = styled.Text`
  padding: 12px;
  text-transform: uppercase;
  color: #fff;
  margin: auto;
`;


export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: '#fff',
})`
  font-size:60px;
`;
