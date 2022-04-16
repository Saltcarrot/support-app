import { dialogue as types } from '../../../utils/enums/dialogue'
import { Data, SortSettings } from '../../../utils/types/dialogue'

export interface GetDialoguesRequestAction {
  type: types.GET_DIALOGUES_REQUEST
  payload: SortSettings
}
export interface GetDialoguesSuccessAction {
  type: types.GET_DIALOGUES_SUCCESS
  payload: Data[]
}
export interface GetDialoguesErrorAction {
  type: types.GET_DIALOGUES_ERROR
  payload: string
}

export type DialogueActions =
  | GetDialoguesRequestAction
  | GetDialoguesSuccessAction
  | GetDialoguesErrorAction
