import { IAuth } from '../user'
import * as actions from '../actionTypes/userActionTypes'
import { UserInfo } from 'firebase/auth'

// SIGN IN
export type signInRequestActionCreator = ({
  email,
  password,
}: IAuth) => actions.SignInRequestAction
export type signInSuccessActionCreator = (
  user: UserInfo
) => actions.SignInSuccessAction
export type signInErrorActionCreator = (
  message: string
) => actions.SignInErrorAction

// AUTH
export type authRequestActionCreator = () => actions.AuthRequestAction
export type authSuccessActionCreator = () => actions.AuthResetAction
export type authErrorActionCreator = (
  message: string
) => actions.AuthErrorAction
