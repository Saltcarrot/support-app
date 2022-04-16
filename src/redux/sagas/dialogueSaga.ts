import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { call, put, takeLatest } from 'redux-saga/effects'

import { dialogue as types } from '../../utils/enums/dialogue'
import { dialogueActions } from '../actions/dialogueActions'
import * as actions from '../actions/actionTypes/dialogueActionTypes'
import {
  getFirstDialogues,
  getNextDialogues,
} from '../../utils/helpers/searchDialogues'
import { Data, SortSettings } from '../../utils/types/dialogue'
import { convertError } from '../../utils/helpers/convertError'

const getDialogues = ({ lastValue, ...rest }: SortSettings) => {
  const db = firebase.firestore().collection('dialogues')

  if (lastValue === 0 || lastValue === '') {
    return getFirstDialogues({ db, ...rest })
  } else {
    return getNextDialogues({ db, ...rest, lastValue })
  }
}

function* getDialoguesWorker({ payload }: actions.GetDialoguesRequestAction) {
  try {
    const data: Data[] = yield call(getDialogues, payload)
    yield put(dialogueActions.getDialogues.success(data))
  } catch (error: any) {
    yield put(dialogueActions.getDialogues.error(convertError(error)))
  }
}

export function* dialogueSaga() {
  yield takeLatest(types.GET_DIALOGUES_REQUEST, getDialoguesWorker)
}
