import {Alert} from 'react-native';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../service/api';

import {priceFormatted} from '../../../util/format';
import {addToCartSuccess, updateAmountSuccess} from './actions';

import NavigationService from '../../../service/navigation';

function* addToCart({id}) {
  const productExist = yield select(state => state.Cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormattad: priceFormatted(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
  NavigationService.navigate('Cart');
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
