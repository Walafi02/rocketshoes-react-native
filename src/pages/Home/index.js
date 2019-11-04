import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const productsReturn = response.data.map(product => ({
        ...product,
        priceFormatted: priceFormatted(product.price),
      }));

      setProducts(productsReturn);
    }

    loadProducts();
    setLoading(false);
  }, []);

  const amount = useSelector(state =>
    state.Cart.reduce((amountReturn, product) => {
      amountReturn[product.id] = product.amount;
      return amountReturn;
    }, {}),
  );

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({item}) {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ProductButton onPress={() => handleAddToCart(item.id)}>
          <ProductButtonView>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductButtonViewText>
              {amount[item.id] || 0}
            </ProductButtonViewText>
          </ProductButtonView>
          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </Product>
    );
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          horizontal
          data={products}
          // extraData={this.props}
          keyExtractor={product => String(product.id)}
          renderItem={renderProduct}
        />
      )}
    </>
  );
}
