import { dialogue as types } from '../../enums/dialogue'
import { Data } from '../dialogue'

export interface GetDialoguesRequestAction {
  type: types.GET_DIALOGUES_REQUEST
  payload?: undefined
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
