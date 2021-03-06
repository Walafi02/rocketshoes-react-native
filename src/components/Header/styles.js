import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  /* flex: 1; */
  background: #000;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  height: 28px;
  width: 28px;
  /* flex: 1; */
  align-items: center;
  justify-content: center;
`;

export const AmountTotalText = styled.Text`
  position: absolute;
  font-size: 16px;
  color: #fff;
  top: -5;
  right: -5;
  background: #715fc1;
  padding: 0 5px;
  border-radius: 50px;
`;
