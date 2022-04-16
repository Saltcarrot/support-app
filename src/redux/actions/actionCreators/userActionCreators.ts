import { Auth, ConfPass, User } from '../../../utils/types/user'
import * as actions from '../actionTypes/userActionTypes'

// RESET MESSAGES
export type resetMessagesActionCreator = () => actions.ResetMessagesAction

// AUTH
export type checkAuthRequestActionCreator = () => actions.CheckAuthRequestAction
export type checkAuthErrorActionCreator = (
  message: string
) => actions.CheckAuthErrorAction
export type checkAuthResetActionCreator = () => actions.CheckAuthResetAction

// SIGN IN
export type signInRequestActionCreator = ({
  email,
  password,
}: Auth) => actions.SignInRequestAction
export type signInSuccessActionCreator = (
  user: User
) => actions.SignInSuccessAction
export type signInErrorActionCreator = (
  message: string
) => actions.SignInErrorAction

// SIGN IN WITH GOOGLE
export type signInWithGoogleRequestActionCreator =
  () => actions.SignInWithGoogleRequestAction

// SIGN UP
export type signUpRequestActionCreator = ({
  email,
  password,
}: Auth) => actions.SignUpRequestAction
export type signUpSuccessActionCreator = (
  user: User
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

// CONFIRM PASSWORD
export type confirmPasswordRequestActionCreator = (
  data: ConfPass
) => actions.ConfirmPasswordRequestAction
export type confirmPasswordSuccessActionCreator = (
  message: string
) => actions.ConfirmPasswordSuccessAction
export type confirmPasswordErrorActionCreator = (
  message: string
) => actions.ConfirmPasswordErrorAction
