import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      // {
      //   id: 6,
      //   title: 'Tênis Adidas Duramo Lite 2.0',
      //   price: 219.9,
      //   image:
      //     'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      // },
      // {
      //   id: 4,
      //   title: 'Tênis de Caminhada Leve Confortável',
      //   price: 179.9,
      //   image:
      //     'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      // },
    ],
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <Products>
          {products.map(product => (
            <Product key={product.id}>
              <ProductMain>
                <ProductImage source={{uri: product.image}} />
                <ProductMainTexts>
                  <ProductMainTitle>{product.title} </ProductMainTitle>
                  <ProductMainPrice>{product.price}</ProductMainPrice>
                </ProductMainTexts>

                <ProductDelete>
                  <Icon name="delete-forever" size={24} color="#715fc1" />
                </ProductDelete>
              </ProductMain>
              <ProductFooter>
                <ProductControl>
                  <ProductButtonControl>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#715fc1"
                    />
                  </ProductButtonControl>
                  <TotalAmount value={String(0)} />
                  <ProductButtonControl>
                    <Icon name="add-circle-outline" size={20} color="#715fc1" />
                  </ProductButtonControl>
                </ProductControl>
                <ProductsTotal>123.12</ProductsTotal>
              </ProductFooter>
            </Product>
          ))}

          <PriceTotal>
            <TextTotal>Total</TextTotal>
            <TextPrice>123,12</TextPrice>

            <ButtonFinish>
              <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
            </ButtonFinish>
          </PriceTotal>
        </Products>
      </Container>
    );
  }
}

export default Cart;
