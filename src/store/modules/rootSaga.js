import {all} from 'redux-saga/effects';

import Cart from './Cart/saga';

export default function* rootSaga() {
  return yield all([Cart]);
}
