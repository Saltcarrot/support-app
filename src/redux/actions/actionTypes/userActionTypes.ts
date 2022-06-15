import { userActionTypes as types } from '../../../utils/enums/user'
import {
  Auth,
  ConfPass,
  NewUserData,
  User,
  UserData,
} from '../../../utils/types/user'

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
export interface CheckAuthErrorAction {
  type: types.CHECK_AUTH_ERROR
  payload: string
}
export interface CheckAuthResetAction {
  type: types.CHECK_AUTH_RESET
  payload?: undefined
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

// SIGN IN WITH GOOGLE
export interface SignInWithGoogleRequestAction {
  type: types.SIGN_IN_WITH_GOOGLE_REQUEST
  payload?: undefined
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

// SIGN OUT
export interface SignOutRequestAction {
  type: types.SIGN_OUT_REQUEST
  payload?: undefined
}
export interface SignOutSuccessAction {
  type: types.SIGN_OUT_SUCCESS
  payload?: undefined
}
export interface SignOutErrorAction {
  type: types.SIGN_OUT_ERROR
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

// UPDATE PROFILE
export interface UpdateUserProfileRequestAction {
  type: types.UPDATE_USER_PROFILE_REQUEST
  payload: UserData
}
export interface UpdateUserProfileSuccessAction {
  type: types.UPDATE_USER_PROFILE_SUCCESS
  payload: NewUserData
}
export interface UpdateUserProfileErrorAction {
  type: types.UPDATE_USER_PROFILE_ERROR
  payload: string
}

export type UserActions =
  | ResetMessagesAction
  | CheckAuthRequestAction
  | CheckAuthErrorAction
  | CheckAuthResetAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignInWithGoogleRequestAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpErrorAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutErrorAction
  | RecoverPasswordRequestAction
  | RecoverPasswordSuccessAction
  | RecoverPasswordErrorAction
  | ConfirmPasswordRequestAction
  | ConfirmPasswordSuccessAction
  | ConfirmPasswordErrorAction
  | UpdateUserProfileRequestAction
  | UpdateUserProfileSuccessAction
  | UpdateUserProfileErrorAction
