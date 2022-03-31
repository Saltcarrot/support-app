import * as ac from '../../utils/types/actionCreators/userActionCreators'
import { userActionTypes as types } from '../../utils/enums/user'

// AUTH
const authCheckRequest: ac.checkAuthRequestActionCreator = () => ({
  type: types.CHECK_AUTH_REQUEST,
})
const authCheckReset: ac.checkAuthSuccessActionCreator = () => ({
  type: types.CHECK_AUTH_RESET,
})
const authCheckError: ac.checkAuthErrorActionCreator = (message) => ({
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

export const userActions = {
  checkAuth: {
    request: authCheckRequest,
    reset: authCheckReset,
    error: authCheckError,
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
}
