import { all } from 'redux-saga/effects'
import { userSaga } from './userSaga'
import { dialogueSaga } from './dialogueSaga'

export default function* rootSaga() {
  yield all([userSaga(), dialogueSaga()])
}
