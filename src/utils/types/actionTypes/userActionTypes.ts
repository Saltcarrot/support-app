import { userActionTypes as types } from '../../enums/user'
import { IAuth } from '../user'
import { UserInfo } from 'firebase/auth'

// AUTH
export interface AuthCheckRequestAction {
  type: types.AUTH_CHECK_REQUEST
  payload?: undefined
}
export interface AuthCheckResetAction {
  type: types.AUTH_CHECK_RESET
  payload?: undefined
}
export interface AuthCheckErrorAction {
  type: types.AUTH_CHECK_ERROR
  payload: string
}

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

// SIGN UP
export interface SignUpRequestAction {
  type: types.SIGN_UP_REQUEST
  payload: IAuth
}
export interface SignUpSuccessAction {
  type: types.SIGN_UP_SUCCESS
  payload: UserInfo
}
export interface SignUpErrorAction {
  type: types.SIGN_UP_ERROR
  payload: string
}

export type UserActions =
  | AuthCheckRequestAction
  | AuthCheckResetAction
  | AuthCheckErrorAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpErrorAction
