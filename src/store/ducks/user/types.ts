import { UserModel } from 'models/User';

export enum UserTypes {
  'CREATE_REQUEST' = '@user/CREATE_REQUEST',
  'CREATE_SUCCESS' = '@user/CREATE_REQUEST',
  'LOGIN_REQUEST' = '@user/LOGIN_REQUEST',
  'LOGIN_SUCCESS' = '@user/LOGIN_REQUEST',
}

export type UserActionTypes = {
  type: UserTypes;
  payload: {
    data: UserModel;
  };
};

export interface UserState {
  readonly data: UserModel;
}
