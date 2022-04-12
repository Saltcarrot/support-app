import { useDispatch } from 'react-redux'
import { Dispatch } from 'react'
import { UserActions } from '../utils/types/actionTypes/userActionTypes'
import { userActions } from '../redux/actions/userActions'
import { Auth, ConfPass } from '../utils/types/user'
import { DialogueActions } from '../utils/types/actionTypes/dialogueActionTypes'
import { dialogueActions } from '../redux/actions/dialogueActions'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch<UserActions | DialogueActions>>()

  return {
    user: {
      checkAuth: () => dispatch(userActions.checkAuth.request()),
      signIn: (payload: Auth) => dispatch(userActions.signIn.request(payload)),
      signUp: (payload: Auth) => dispatch(userActions.signUp.request(payload)),
      recoverPassword: (email: string) =>
        dispatch(userActions.recoverPassword.request(email)),
      confirmPassword: (payload: ConfPass) =>
        dispatch(userActions.confirmPassword.request(payload)),
    },
    dialogue: {
      getDialogues: (payload: string) =>
        dispatch(dialogueActions.getDialogues.request(payload)),
    },
  }
}
