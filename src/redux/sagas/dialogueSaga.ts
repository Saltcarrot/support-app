import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { call, put, takeLatest } from 'redux-saga/effects'

import { dialogue as types } from '../../utils/enums/dialogue'
import { dialogueActions } from '../actions/dialogueActions'
import * as actions from '../../utils/types/actionTypes/dialogueActionTypes'
import { searchData } from '../../utils/helpers/searchDialogues'
import { Data, SortSettings } from '../../utils/types/dialogue'
import { convertError } from '../../utils/helpers/convertError'

const getDialogues = ({ group, key, value }: SortSettings) => {
  const ref = firebase.database().ref('dialogues')

  return searchData(ref, group, key, value)
}

function* getDialoguesWorker({
  payload: { group, key, value },
}: actions.GetDialoguesRequestAction) {
  try {
    const data: Data[] = yield call(getDialogues, { group, key, value })
    yield put(dialogueActions.getDialogues.success(data))
  } catch (error: any) {
    yield put(dialogueActions.getDialogues.error(convertError(error)))
  }
}

export function* dialogueSaga() {
  yield takeLatest(types.GET_DIALOGUES_REQUEST, getDialoguesWorker)
}
