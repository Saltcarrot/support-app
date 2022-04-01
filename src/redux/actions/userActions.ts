import * as ac from '../../utils/types/actionCreators/userActionCreators'
import { userActionTypes as types } from '../../utils/enums/user'

// RESET MESSAGES
const resetMessages: ac.resetMessagesActionCreator = () => ({
  type: types.RESET_MESSAGES,
})

// AUTH
const checkAuthRequest: ac.checkAuthRequestActionCreator = () => ({
  type: types.CHECK_AUTH_REQUEST,
})
const checkAuthReset: ac.checkAuthSuccessActionCreator = () => ({
  type: types.CHECK_AUTH_RESET,
})
const checkAuthError: ac.checkAuthErrorActionCreator = (message) => ({
  type: types.CHECK_AUTH_ERROR,
  payload: message,
})

// SIGN IN
const signInRequest: ac.signInRequestActionCreator = ({
  email,
  password,
  isRemember,
}) => ({
  type: types.SIGN_IN_REQUEST,
  payload: { email, password, isRemember },
})
const signInSuccess: ac.signInSuccessActionCreator = (user) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user,
})
const signInError: ac.signInErrorActionCreator = (message) => ({
  type: types.SIGN_IN_ERROR,
  payload: message,
})

// SIGN UP
const signUpRequest: ac.signUpRequestActionCreator = ({ email, password }) => ({
  type: types.SIGN_UP_REQUEST,
  payload: { email, password },
})
const signUpSuccess: ac.signUpSuccessActionCreator = (user) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: user,
})
const signUpError: ac.signUpErrorActionCreator = (message) => ({
  type: types.SIGN_UP_ERROR,
  payload: message,
})

// RECOVER PASSWORD
const recoverPasswordRequest: ac.recoverPasswordRequestActionCreator = (
  email
) => ({
  type: types.RECOVER_PASSWORD_REQUEST,
  payload: email,
})
const recoverPasswordSuccess: ac.recoverPasswordSuccessActionCreator = (
  message: string
) => ({
  type: types.RECOVER_PASSWORD_SUCCESS,
  payload: message,
})
const recoverPasswordError: ac.recoverPasswordErrorActionCreator = (
  message: string
) => ({
  type: types.RECOVER_PASSWORD_ERROR,
  payload: message,
})

export const userActions = {
  resetMessages,
  checkAuth: {
    request: checkAuthRequest,
    reset: checkAuthReset,
    error: checkAuthError,
  },
  signIn: {
    request: signInRequest,
    success: signInSuccess,
    error: signInError,
  },
  signUp: {
    request: signUpRequest,
    success: signUpSuccess,
    error: signUpError,
  },
  recoverPassword: {
    request: recoverPasswordRequest,
    success: recoverPasswordSuccess,
    error: recoverPasswordError,
  },
}
