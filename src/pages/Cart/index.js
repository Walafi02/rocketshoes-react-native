import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {priceFormatted} from '../../util/format';

import * as CartActions from '../../store/modules/Cart/actions';

import {
  Container,
  Products,
  Product,
  ProductMain,
  ProductImage,
  ProductMainTexts,
  ProductMainTitle,
  ProductMainPrice,
  ProductDelete,
  ProductFooter,
  ProductControl,
  ProductButtonControl,
  TotalAmount,
  ProductsTotal,
  PriceTotal,
  TextTotal,
  TextPrice,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

function Cart({products, removeFromCard, updateAmountRequest, total}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductMain>
              <ProductImage source={{uri: product.image}} />
              <ProductMainTexts>
                <ProductMainTitle>{product.title} </ProductMainTitle>
                <ProductMainPrice>{product.priceFormattad}</ProductMainPrice>
              </ProductMainTexts>

              <ProductDelete onPress={() => removeFromCard(product.id)}>
                <Icon name="delete-forever" size={24} color="#715fc1" />
              </ProductDelete>
            </ProductMain>
            <ProductFooter>
              <ProductControl>
                <ProductButtonControl onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#715fc1"
                  />
                </ProductButtonControl>
                <TotalAmount value={String(product.amount)} />
                <ProductButtonControl onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={20} color="#715fc1" />
                </ProductButtonControl>
              </ProductControl>
              <ProductsTotal>{product.subtotal}</ProductsTotal>
            </ProductFooter>
          </Product>
        ))}

        <PriceTotal>
          <TextTotal>Total</TextTotal>
          <TextPrice>{total}</TextPrice>

          <ButtonFinish>
            <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
          </ButtonFinish>
        </PriceTotal>
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.Cart.map(product => ({
    ...product,
    subtotal: priceFormatted(product.amount * product.price),
  })),

  total: priceFormatted(
    state.Cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
