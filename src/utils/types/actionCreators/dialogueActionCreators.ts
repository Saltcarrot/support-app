import * as actions from '../actionTypes/dialogueActionTypes'
import { Data, SortSettings } from '../dialogue'

export type getDialoguesRequestActionCreator = ({
  group,
  key,
  value,
}: SortSettings) => actions.GetDialoguesRequestAction
export type getDialoguesSuccessActionCreator = (
  dialogues: Data[]
) => actions.GetDialoguesSuccessAction
export type getDialoguesErrorActionCreator = (
  message: string
) => actions.GetDialoguesErrorAction
