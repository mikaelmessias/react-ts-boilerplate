import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ApplicationState from 'helpers/types/ApplicationState';
import rootReducer from './ducks/reducers';
import rootSaga from './ducks/sagas';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
