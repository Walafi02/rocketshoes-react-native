import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
  CartMessageView,
  CartMessageText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    priceFormatted(
      state.Cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0),
    ),
  );

  const products = useSelector(state =>
    state.Cart.map(product => ({
      ...product,
      subtotal: priceFormatted(product.amount * product.price),
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length === 0 ? (
        <CartMessageView>
          <Icon name="shopping-cart" size={90} color="#ccc" />

          <CartMessageText>Sem Produtos no Carrinho</CartMessageText>
        </CartMessageView>
      ) : (
        <Products>
          {products.map(product => (
            <Product key={product.id}>
              <ProductMain>
                <ProductImage source={{uri: product.image}} />
                <ProductMainTexts>
                  <ProductMainTitle>{product.title} </ProductMainTitle>
                  <ProductMainPrice>{product.priceFormattad}</ProductMainPrice>
                </ProductMainTexts>

                <ProductDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCard(product.id))
                  }>
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
      )}
    </Container>
  );
}
