import React from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Wrapper, Logo, ButtonIcon, AmountTotalText} from './styles';

export default function Header({navigation}) {
  const cartSize = useSelector(state => state.Cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <ButtonIcon onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <AmountTotalText>{cartSize || 0}</AmountTotalText>
        </ButtonIcon>
      </Container>
    </Wrapper>
  );
}
