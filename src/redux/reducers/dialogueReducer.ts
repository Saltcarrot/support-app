import { DialogueState } from '../../utils/types/dialogue'
import { DialogueActions } from '../../utils/types/actionTypes/dialogueActionTypes'
import { dialogue as types } from '../../utils/enums/dialogue'

const initialState: DialogueState = {
  loading: false,
  error: null,
  dialogues: null,
}

export const dialogueReducer = (
  state: DialogueState = initialState,
  { type, payload }: DialogueActions
): DialogueState => {
  switch (type) {
    case types.GET_DIALOGUES_REQUEST:
      return { ...state, loading: true }
    case types.GET_DIALOGUES_SUCCESS:
      return { ...state, loading: false, dialogues: payload }
    case types.GET_DIALOGUES_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
