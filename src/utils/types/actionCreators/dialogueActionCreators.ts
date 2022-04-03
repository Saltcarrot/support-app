import * as actions from '../actionTypes/dialogueActionTypes'
import { Data } from '../dialogue'

export type getDialoguesRequestActionCreator =
  () => actions.GetDialoguesRequestAction
export type getDialoguesSuccessActionCreator = (
  dialogues: Data[]
) => actions.GetDialoguesSuccessAction
export type getDialoguesErrorActionCreator = (
  message: string
) => actions.GetDialoguesErrorAction
