import { userActionTypes as types } from '../../enums/user'
import { IAuth } from '../user'
import { UserInfo } from 'firebase/auth'

// AUTH
export interface CheckAuthRequestAction {
  type: types.CHECK_AUTH_REQUEST
  payload?: undefined
}
export interface CheckAuthResetAction {
  type: types.CHECK_AUTH_RESET
  payload?: undefined
}
export interface CheckAuthErrorAction {
  type: types.CHECK_AUTH_ERROR
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
  | CheckAuthRequestAction
  | CheckAuthResetAction
  | CheckAuthErrorAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpErrorAction
