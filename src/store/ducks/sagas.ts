import { all, takeLatest } from 'redux-saga/effects';

function* RootSaga() {
  return yield all();
}

export default RootSaga;
