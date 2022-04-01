import { IAuth } from '../user'
import * as actions from '../actionTypes/userActionTypes'
import { UserInfo } from 'firebase/auth'

// RESET MESSAGES
export type resetMessagesActionCreator = () => actions.ResetMessagesAction

// AUTH
export type checkAuthRequestActionCreator = () => actions.CheckAuthRequestAction
export type checkAuthSuccessActionCreator = () => actions.CheckAuthResetAction
export type checkAuthErrorActionCreator = (
  message: string
) => actions.CheckAuthErrorAction

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

// RECOVER PASSWORD
export type recoverPasswordRequestActionCreator = (
  email: string
) => actions.RecoverPasswordRequestAction
export type recoverPasswordSuccessActionCreator = (
  message: string
) => actions.RecoverPasswordSuccessAction
export type recoverPasswordErrorActionCreator = (
  message: string
) => actions.RecoverPasswordErrorAction
