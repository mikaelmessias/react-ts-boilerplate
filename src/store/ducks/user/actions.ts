import { action } from 'typesafe-actions';
import { UserModel } from 'models/User';
import { UserTypes } from './types';

export const loginRequest = (data: UserModel) => action(UserTypes.LOGIN_REQUEST, { data });

export const loginSuccess = (data: UserModel) => action(UserTypes.LOGIN_SUCCESS, { data });

export const createRequest = (data: UserModel) => action(UserTypes.LOGIN_REQUEST, { data });

export const createSuccess = (data: UserModel) => action(UserTypes.LOGIN_SUCCESS, { data });
