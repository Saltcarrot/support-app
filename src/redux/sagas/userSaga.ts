import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import { Action } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'

import { IAuth } from '../../utils/types/user'
import { UserActions } from '../actions/userActions'
import { convertError } from '../../utils/helpers/convertError'

const signIn = async ({ email, password }: IAuth) => {
  const auth = firebase.auth()

  const provider = firebase.auth.EmailAuthProvider.credential(email, password)
  const { user } = await auth.signInWithCredential(provider)

  return user
}

const checkAuth = async () => {
  const auth = firebase.auth()

  const isUser = await auth.onAuthStateChanged((user) => !!user)

  return isUser
}

function* signInWithDataWorker({
  payload: { email, password },
}: Action<IAuth>) {
  try {
    const user: firebase.User = yield call(signIn, {
      email,
      password,
    })
    yield put(UserActions.signIn.success(user))
  } catch (error: any) {
    // По дефолту возвращает unknown
    yield put(UserActions.signIn.error(convertError(error)))
  }
}

function* checkAuthWorker() {
  try {
    const user: firebase.Unsubscribe = yield call(checkAuth)
    if (!user) {
      yield put(UserActions.auth.success())
    }
  } catch (error: any) {
    yield put(UserActions.auth.error(convertError(error)))
  }
}

export function* userSaga() {
  yield takeLatest(UserActions.types.SIGN_IN_REQUEST, signInWithDataWorker)
  yield takeLatest(UserActions.types.AUTH_REQUEST, checkAuthWorker)
}
