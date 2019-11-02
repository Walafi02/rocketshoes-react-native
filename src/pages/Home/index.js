import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../service/api';
import {priceFormatted} from '../../util/format';

import * as CartActions from '../../store/modules/Cart/actions';

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

  handleAddToCart = id => {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
    console.tron.log(id);
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
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ProductButton onPress={() => this.handleAddToCart(item.id)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
