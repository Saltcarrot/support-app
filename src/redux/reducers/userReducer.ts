import { Reducer } from 'react'
import { IUserState } from '../../utils/types/user'
import { UserActions } from '../../utils/types/actionTypes/userActionTypes'
import { userActionTypes as types } from '../../utils/enums/user'

const initialState: IUserState = {
  loading: false,
  error: null,
  user: null,
}

export const userReducer: Reducer<IUserState, UserActions> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    // AUTH
    case types.AUTH_CHECK_REQUEST:
      return { ...state }
    case types.AUTH_CHECK_RESET:
      return initialState
    case types.AUTH_CHECK_ERROR:
      return { ...state, error: payload }
    // SIGN IN
    case types.SIGN_IN_REQUEST:
      return { ...state, loading: true }
    case types.SIGN_IN_SUCCESS:
      return { ...state, loading: false, user: { ...payload } }
    case types.SIGN_IN_ERROR:
      return { ...state, loading: false, error: payload }
    // SIGN UP
    case types.SIGN_UP_REQUEST:
      return { ...state, loading: true }
    case types.SIGN_UP_SUCCESS:
      return { ...state, loading: false, user: payload }
    case types.SIGN_UP_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
