import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'

import { Auth, ConfPass } from '../utils/types/user'
import { SortSettings } from '../utils/types/dialogue'

import { UserActions } from '../redux/actions/actionTypes/userActionTypes'
import { userActions } from '../redux/actions/userActions'
import { DialogueActions } from '../redux/actions/actionTypes/dialogueActionTypes'
import { dialogueActions } from '../redux/actions/dialogueActions'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch<UserActions | DialogueActions>>()

  return {
    user: {
      checkAuth: () => dispatch(userActions.checkAuth.request()),
      signIn: (payload: Auth) => dispatch(userActions.signIn.request(payload)),
      signInWithGoogle: () => dispatch(userActions.signInWithGoogle()),
      signUp: (payload: Auth) => dispatch(userActions.signUp.request(payload)),
      signOut: () => dispatch(userActions.signOut.request()),
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
