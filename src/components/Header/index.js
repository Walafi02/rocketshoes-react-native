import React from 'react';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Wrapper, Logo, ButtonIcon, AmountTotalText} from './styles';

function Header({navigation, cartSize}) {
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

export default connect(
  state => ({
    cartSize: state.Cart.length,
  }),
  null,
)(Header);
