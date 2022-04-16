import { useDispatch } from 'react-redux'
import { Dispatch } from 'react'
import { UserActions } from '../redux/actions/actionTypes/userActionTypes'
import { userActions } from '../redux/actions/userActions'
import { Auth, ConfPass } from '../utils/types/user'
import { DialogueActions } from '../redux/actions/actionTypes/dialogueActionTypes'
import { dialogueActions } from '../redux/actions/dialogueActions'
import { SortSettings } from '../utils/types/dialogue'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch<UserActions | DialogueActions>>()

  return {
    user: {
      checkAuth: () => dispatch(userActions.checkAuth.request()),
      signIn: (payload: Auth) => dispatch(userActions.signIn.request(payload)),
      signInWithGoogle: () => dispatch(userActions.signInWithGoogle()),
      signUp: (payload: Auth) => dispatch(userActions.signUp.request(payload)),
      recoverPassword: (email: string) =>
        dispatch(userActions.recoverPassword.request(email)),
      confirmPassword: (payload: ConfPass) =>
        dispatch(userActions.confirmPassword.request(payload)),
    },
    dialogue: {
      getDialogues: (args: SortSettings) =>
        dispatch(dialogueActions.getDialogues.request(args)),
    },
  }
}
