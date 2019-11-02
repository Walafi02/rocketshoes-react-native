import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native';

import api from '../../service/api';
import {priceFormatted} from '../../util/format';

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
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const products = response.data.map(product => ({
      ...product,
      priceFormatted: priceFormatted(product.price),
    }));

    this.setState({
      products,
    });
  }

  renderProduct = ({item}) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

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
