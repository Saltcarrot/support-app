import { Reducer } from 'react'
import { IUserState } from '../../utils/types/user'
import { UserActions } from '../../utils/types/actionTypes/userActionTypes'
import { userActionTypes } from '../../utils/enums/user'

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
    case userActionTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true }
    case userActionTypes.SIGN_IN_SUCCESS:
      return { loading: false, error: null, user: { ...payload } }
    case userActionTypes.SIGN_IN_ERROR:
      return { loading: false, user: null, error: payload }
    case userActionTypes.AUTH_REQUEST:
      return { ...state }
    case userActionTypes.AUTH_RESET:
      return initialState
    case userActionTypes.AUTH_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
