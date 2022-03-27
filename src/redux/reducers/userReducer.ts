import { handleActions } from 'redux-actions'
import { UserInfo } from 'firebase/auth'
import { IAuth, IUserState } from '../../utils/types/user'
import { UserActions } from '../actions/userActions'

const initialState: IUserState = {
  loading: false,
  error: null,
  user: null,
}

// Т.к. конкретный экшен в userActions принимает конкретный тип пеилоада,
// TS будет ругаться на <IUserState, IAuth | UserInfo | string>,
// потому что payload всегда будет IAuth | UserInfo | string
export const userReducer = handleActions<any, IAuth | UserInfo | string>(
  {
    [UserActions.types.SIGN_IN_REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [UserActions.types.SIGN_IN_SUCCESS]: (state, { payload }) => ({
      loading: false,
      error: null,
      user: payload,
    }),
    [UserActions.types.SIGN_IN_ERROR]: (state, { payload }) => ({
      loading: false,
      error: payload,
      user: null,
    }),
    [UserActions.types.AUTH_REQUEST]: (state) => ({
      ...state,
    }),
    [UserActions.types.AUTH_SUCCESS]: (state) => ({
      initialState,
    }),
    [UserActions.types.AUTH_ERROR]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
)

// Аналогично следующему примеру
// export const userReducer = (
//   state = initialState,
//   { type, payload }: IUserAction
// ): IUserState => {
//   switch (type) {
//     case userActionTypes.SIGN_IN_REQUEST:
//       return { ...state, loading: true }
//     case userActionTypes.SIGN_IN_SUCCESS:
//       return { loading: false, error: null, user: payload }
//     case userActionTypes.SIGN_IN_ERROR:
//       return { loading: false, error: payload, user: null }
//     default:
//       return state
//   }
// }
