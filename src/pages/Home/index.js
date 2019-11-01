import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native';

import {
  Product,
  ProductTitle,
  ProductImage,
  ProductPrice,
  ProductButton,
  ProductButtonText,
  ProductButtonView,
  ProductButtonViewText,
} from './styles';

class Home extends Component {
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
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  renderProduct = ({item}) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>

        <ProductButton>
          <ProductButtonView>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductButtonViewText>0</ProductButtonViewText>
          </ProductButtonView>
          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <FlatList
        horizontal
        data={products}
        // extraData={this.props}
        keyExtractor={product => String(product.id)}
        renderItem={this.renderProduct}
      />
    );
  }
}

export default Home;
