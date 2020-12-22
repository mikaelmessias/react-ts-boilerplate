import { action } from 'typesafe-actions';
import { LoadingTypes } from './types';

export const showLoading = () => action(LoadingTypes.LOADING_SHOW);

export const hideLoading = () => action(LoadingTypes.LOADING_STOP);
