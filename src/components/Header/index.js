import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Wrapper, Logo, ButtonIcon, AmountTotalText} from './styles';

export default function Header({navigation}) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <ButtonIcon onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <AmountTotalText>0</AmountTotalText>
        </ButtonIcon>
      </Container>
    </Wrapper>
  );
}
