import * as ac from '../../utils/types/actionCreators/userActionCreators'
import { userActionTypes as types } from '../../utils/enums/user'

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

// AUTH
const authRequest: ac.authRequestActionCreator = () => ({
  type: types.AUTH_REQUEST,
})
const authReset: ac.authSuccessActionCreator = () => ({
  type: types.AUTH_RESET,
})
const authError: ac.authErrorActionCreator = (message) => ({
  type: types.AUTH_ERROR,
  payload: message,
})

export const userActions = {
  signIn: {
    request: signInRequest,
    success: signInSuccess,
    error: signInError,
  },
  auth: {
    request: authRequest,
    reset: authReset,
    error: authError,
  },
}
