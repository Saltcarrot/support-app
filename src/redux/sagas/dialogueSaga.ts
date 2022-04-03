import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { call, put, takeLatest } from 'redux-saga/effects'

import { dialogue as types } from '../../utils/enums/dialogue'
import { dialogueActions } from '../actions/dialogueActions'
import { searchData } from '../../utils/helpers/searchDialogues'
import { Data } from '../../utils/types/dialogue'
import { convertError } from '../../utils/helpers/convertError'

const getDialogues = () => {
  const ref = firebase.database().ref('dialogues')

  return searchData(ref)
}

function* getDialoguesWorker() {
  try {
    const data: Data[] = yield call(getDialogues)
    yield put(dialogueActions.getDialogues.success(data))
  } catch (error: any) {
    yield put(dialogueActions.getDialogues.error(convertError(error)))
  }
}

export function* dialogueSaga() {
  yield takeLatest(types.GET_DIALOGUES_REQUEST, getDialoguesWorker)
}
