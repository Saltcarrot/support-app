import { useDispatch } from 'react-redux'
import { Dispatch } from 'react'
import { UserActions } from '../utils/types/actionTypes/userActionTypes'
import { userActions } from '../redux/actions/userActions'
import { IAuth } from '../utils/types/user'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch<UserActions>>()

  return {
    user: {
      checkAuth: () => dispatch(userActions.checkAuth.request()),
      signIn: (payload: IAuth) => dispatch(userActions.signIn.request(payload)),
      signUp: (payload: IAuth) => dispatch(userActions.signUp.request(payload)),
      recoverPassword: (payload: string) =>
        dispatch(userActions.recoverPassword.request(payload)),
    },
  }
}
