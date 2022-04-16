import { userActionTypes as types } from '../../enums/user'
import { Auth, ConfPass, User } from '../user'
// import { UserInfo } from 'firebase/auth'

// RESET MESSAGES
export interface ResetMessagesAction {
  type: types.RESET_MESSAGES
  payload?: undefined
}

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
  payload: Auth
}
export interface SignInSuccessAction {
  type: types.SIGN_IN_SUCCESS
  payload: User
}
export interface SignInErrorAction {
  type: types.SIGN_IN_ERROR
  payload: string
}

// SIGN UP
export interface SignUpRequestAction {
  type: types.SIGN_UP_REQUEST
  payload: Auth
}
export interface SignUpSuccessAction {
  type: types.SIGN_UP_SUCCESS
  payload: User
}
export interface SignUpErrorAction {
  type: types.SIGN_UP_ERROR
  payload: string
}

// RECOVER PASSWORD
export interface RecoverPasswordRequestAction {
  type: types.RECOVER_PASSWORD_REQUEST
  payload: string
}
export interface RecoverPasswordSuccessAction {
  type: types.RECOVER_PASSWORD_SUCCESS
  payload: string
}
export interface RecoverPasswordErrorAction {
  type: types.RECOVER_PASSWORD_ERROR
  payload: string
}

// CONFIRM PASSWORD
export interface ConfirmPasswordRequestAction {
  type: types.CONFIRM_PASSWORD_REQUEST
  payload: ConfPass
}
export interface ConfirmPasswordSuccessAction {
  type: types.CONFIRM_PASSWORD_SUCCESS
  payload: string
}
export interface ConfirmPasswordErrorAction {
  type: types.CONFIRM_PASSWORD_ERROR
  payload: string
}

export type UserActions =
  | ResetMessagesAction
  | CheckAuthRequestAction
  | CheckAuthResetAction
  | CheckAuthErrorAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpErrorAction
  | RecoverPasswordRequestAction
  | RecoverPasswordSuccessAction
  | RecoverPasswordErrorAction
  | ConfirmPasswordRequestAction
  | ConfirmPasswordSuccessAction
  | ConfirmPasswordErrorAction
