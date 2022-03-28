import { userActionTypes as types } from '../../enums/user'
import { IAuth } from '../user'
import { UserInfo } from 'firebase/auth'

// SIGN IN
export interface SignInRequestAction {
  type: types.SIGN_IN_REQUEST
  payload: IAuth
}
export interface SignInSuccessAction {
  type: types.SIGN_IN_SUCCESS
  payload: UserInfo
}
export interface SignInErrorAction {
  type: types.SIGN_IN_ERROR
  payload: string
}

// AUTH
export interface AuthRequestAction {
  type: types.AUTH_REQUEST
  payload?: undefined
}
export interface AuthResetAction {
  type: types.AUTH_RESET
  payload?: undefined
}
export interface AuthErrorAction {
  type: types.AUTH_ERROR
  payload: string
}

export type UserActions =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInErrorAction
  | AuthRequestAction
  | AuthResetAction
  | AuthErrorAction
