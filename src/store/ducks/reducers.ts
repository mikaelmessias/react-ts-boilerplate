import { combineReducers } from 'redux';

import loading from './loading';

const RootReducer = () => combineReducers({
  loading,
});

export default RootReducer;
