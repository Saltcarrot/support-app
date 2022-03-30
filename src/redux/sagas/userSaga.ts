import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { call, put, takeLatest } from 'redux-saga/effects'

import { userActionTypes } from '../../utils/enums/user'
import { userActions } from '../actions/userActions'
import * as actions from '../../utils/types/actionTypes/userActionTypes'
import { IAuth } from '../../utils/types/user'
import { convertError } from '../../utils/helpers/convertError'

const signIn = async ({ email, password, isRemember }: IAuth) => {
  const auth = firebase.auth()

  await auth.setPersistence(
    isRemember
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION
  )
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
  payload: { email, password, isRemember },
}: actions.SignInRequestAction) {
  try {
    const {
      multiFactor: { user },
    } = yield call(signIn, {
      email,
      password,
      isRemember,
    })
    yield put(userActions.signIn.success(user))
  } catch (error: any) {
    // По дефолту возвращает unknown
    yield put(userActions.signIn.error(convertError(error)))
  }
}

function* checkAuthWorker() {
  try {
    const user: boolean = yield call(checkAuth)
    if (!user) {
      yield put(userActions.auth.reset())
    }
  } catch (error: any) {
    yield put(userActions.auth.error(convertError(error)))
  }
}

export function* userSaga() {
  yield takeLatest(userActionTypes.SIGN_IN_REQUEST, signInWithDataWorker)
  yield takeLatest(userActionTypes.AUTH_REQUEST, checkAuthWorker)
}
