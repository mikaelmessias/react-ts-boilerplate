import iLoading from 'helpers/types/Loading';

export enum LoadingTypes {
  LOADING_SHOW = '@loading/LOADING_SHOW',
  LOADING_STOP = '@loading/LOADING_STOP'
}

export type LoadingActionTypes = {
  type: LoadingTypes;
  payload: {
    data: iLoading;
  };
};

export interface LoadingState {
  readonly data: iLoading;
}
