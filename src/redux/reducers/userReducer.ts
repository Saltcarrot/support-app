import { userActionTypes as types } from '../../utils/enums/user'
import { UserState } from '../../utils/types/user'

import { UserActions } from '../actions/actionTypes/userActionTypes'

const initialState: UserState = {
  loading: false,
  error: null,
  success: null,
  user: null,
}

export const userReducer = (
  state: UserState = initialState,
  { type, payload }: UserActions
): UserState => {
  switch (type) {
    // RESET MESSAGES
    case types.RESET_MESSAGES:
      return { ...state, success: null, error: null }
    // AUTH
    case types.CHECK_AUTH_REQUEST:
      return { ...state }
    case types.CHECK_AUTH_ERROR:
      return { ...state, error: payload }
    case types.CHECK_AUTH_RESET:
      return initialState
    // SIGN IN
    case types.SIGN_IN_REQUEST:
      return { ...state, loading: true }
    case types.SIGN_IN_SUCCESS:
      return { ...state, loading: false, user: { ...payload } }
    case types.SIGN_IN_ERROR:
      return { ...state, loading: false, error: payload }
    // SIGN IN WITH GOOGLE
    case types.SIGN_IN_WITH_GOOGLE_REQUEST:
      return { ...state, loading: true }
    // SIGN UP
    case types.SIGN_UP_REQUEST:
      return { ...state, loading: true }
    case types.SIGN_UP_SUCCESS:
      return { ...state, loading: false, user: payload }
    case types.SIGN_UP_ERROR:
      return { ...state, loading: false, error: payload }
    // RECOVER PASSWORD
    case types.RECOVER_PASSWORD_REQUEST:
      return { ...state, loading: true }
    case types.RECOVER_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: payload }
    case types.RECOVER_PASSWORD_ERROR:
      return { ...state, loading: false, error: payload }
    // CONFIRM PASSWORD
    case types.CONFIRM_PASSWORD_REQUEST:
      return { ...state, loading: true }
    case types.CONFIRM_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: payload }
    case types.CONFIRM_PASSWORD_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
