import React from 'react';
// import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductMain,
  ProductFooter,
  ProductImage,
  ProductMainTexts,
  ProductMainTitle,
  ProductMainPrice,
  ProductDelete,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <ProductMain>
          <ProductImage
            source={{
              uri:
                'https://static.zattini.com.br/produtos/sapato-casual-em-couro-d&r-shoes-masculino/06/FAO-0332-006/FAO-0332-006_zoom1.jpg',
            }}
          />
          <ProductMainTexts>
            <ProductMainTitle>sjdiaiusia dk djsadja</ProductMainTitle>
            <ProductMainPrice>120,20</ProductMainPrice>
          </ProductMainTexts>
        </ProductMain>
        <ProductDelete>
          <Icon name="delete-forever" size={24} color="#715fc1" />
        </ProductDelete>
        <ProductFooter />
      </Product>
    </Container>
  );
}
