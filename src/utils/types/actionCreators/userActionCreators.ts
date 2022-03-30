import { IAuth } from '../user'
import * as actions from '../actionTypes/userActionTypes'
import { UserInfo } from 'firebase/auth'

// AUTH
export type authCheckRequestActionCreator = () => actions.AuthCheckRequestAction
export type authCheckSuccessActionCreator = () => actions.AuthCheckResetAction
export type authCheckErrorActionCreator = (
  message: string
) => actions.AuthCheckErrorAction

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

// SIGN UP
export type signUpRequestActionCreator = ({
  email,
  password,
}: IAuth) => actions.SignUpRequestAction
export type signUpSuccessActionCreator = (
  user: UserInfo
) => actions.SignUpSuccessAction
export type signUpErrorActionCreator = (
  message: string
) => actions.SignUpErrorAction
