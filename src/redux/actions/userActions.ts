import { createAction } from 'redux-actions'
import { userActionTypes } from '../../utils/enums/user'
import { UserInfo } from 'firebase/auth'
import { IAuth } from '../../utils/types/user'

// Аналогично
// const signInRequestAction = ({email, password}) => ({type: userActionTypes.SIGN_IN_REQUEST, payload: {email, password}})
// IAuth - payload
// userActionTypes.SIGN_IN_REQUEST - type
const signInRequestAction = createAction<IAuth>(userActionTypes.SIGN_IN_REQUEST)
const signInSuccessAction = createAction<UserInfo>(
  userActionTypes.SIGN_IN_SUCCESS
)
const signInErrorAction = createAction<string>(userActionTypes.SIGN_IN_ERROR)

export const UserActions = {
  types: userActionTypes,

  signIn: {
    request: signInRequestAction,
    success: signInSuccessAction,
    error: signInErrorAction,
  },
}
