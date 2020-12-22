import { Reducer } from 'redux';
import { LoadingTypes, LoadingActionTypes, LoadingState } from './types';

const INITIAL_STATE: LoadingState = {
  data: {
    loading: false,
  },
};

const LoadingReducer: Reducer<LoadingState, LoadingActionTypes> = (
  state: LoadingState = INITIAL_STATE,
  action: LoadingActionTypes,
) => {
  switch (action.type) {
    case LoadingTypes.LOADING_SHOW: {
      return {
        data: {
          loading: true,
        },
      };
    }
    case LoadingTypes.LOADING_STOP: {
      return {
        data: {
          loading: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default LoadingReducer;
