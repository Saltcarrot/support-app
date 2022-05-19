import * as actions from '../actionTypes/dialogueActionTypes'
import { Data, SortSettings } from '../../../utils/types/dialogue'

export type getDialoguesRequestActionCreator = (
  args: SortSettings
) => actions.GetDialoguesRequestAction
export type getDialoguesSuccessActionCreator = (
  dialogues: Data[]
) => actions.GetDialoguesSuccessAction
export type getDialoguesErrorActionCreator = (
  message: string
) => actions.GetDialoguesErrorAction
