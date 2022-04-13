import * as ac from '../../utils/types/actionCreators/dialogueActionCreators'
import { dialogue as types } from '../../utils/enums/dialogue'

const getDialoguesRequest: ac.getDialoguesRequestActionCreator = ({
  group,
  key,
  value,
}) => ({
  type: types.GET_DIALOGUES_REQUEST,
  payload: { group, key, value },
})
const getDialoguesSuccess: ac.getDialoguesSuccessActionCreator = (
  dialogues
) => ({
  type: types.GET_DIALOGUES_SUCCESS,
  payload: dialogues,
})
const getDialoguesError: ac.getDialoguesErrorActionCreator = (message) => ({
  type: types.GET_DIALOGUES_ERROR,
  payload: message,
})

export const dialogueActions = {
  getDialogues: {
    request: getDialoguesRequest,
    success: getDialoguesSuccess,
    error: getDialoguesError,
  },
}
