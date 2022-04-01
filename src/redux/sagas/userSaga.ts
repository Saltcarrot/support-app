import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { call, put, takeLatest } from 'redux-saga/effects'

import { userActionTypes as types } from '../../utils/enums/user'
import { userActions } from '../actions/userActions'
import * as actions from '../../utils/types/actionTypes/userActionTypes'
import { IAuth } from '../../utils/types/user'
import { convertError } from '../../utils/helpers/convertError'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const fetchCheckAuth = async () => {
  const auth = firebase.auth()

  const isUser = await auth.onAuthStateChanged((user) => !!user)

  return isUser
}

const fetchSignIn = async ({ email, password, isRemember }: IAuth) => {
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

const fetchSignUp = async ({ email, password }: IAuth) => {
  const auth = firebase.auth()

  const { user } = await auth.createUserWithEmailAndPassword(email, password)

  return user
}

const fetchRecoverPassword = async (email: string) => {
  const auth = firebase.auth()
  await auth.sendPasswordResetEmail(email)
}

function* checkAuthWorker() {
  try {
    const user: boolean = yield call(fetchCheckAuth)
    if (!user) {
      yield put(userActions.checkAuth.reset())
    }
  } catch (error: any) {
    yield put(userActions.checkAuth.error(convertError(error)))
  }
}

function* signInWithDataWorker({
  payload: { email, password, isRemember },
}: actions.SignInRequestAction) {
  try {
    const {
      multiFactor: { user },
    } = yield call(fetchSignIn, {
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

function* signUpWorker({
  payload: { email, password },
}: actions.SignUpRequestAction) {
  try {
    const {
      multiFactor: { user },
    } = yield call(fetchSignUp, {
      email: email,
      password: password,
    })
    yield put(userActions.signUp.success(user))
  } catch (error: any) {
    yield put(userActions.signUp.error(convertError(error)))
  }
}

function* recoverPasswordWorker({
  payload: email,
}: actions.RecoverPasswordRequestAction) {
  try {
    yield call(fetchRecoverPassword, email)
    yield put(
      userActions.recoverPassword.success(
        'Ссылка для восстановления пароля отправлена на указанный email'
      )
    )
    yield call(delay, 5000)
    yield put(userActions.resetMessages())
  } catch (error: any) {
    yield put(userActions.recoverPassword.error(convertError(error)))
  }
}

export function* userSaga() {
  yield takeLatest(types.SIGN_IN_REQUEST, signInWithDataWorker)
  yield takeLatest(types.CHECK_AUTH_REQUEST, checkAuthWorker)
  yield takeLatest(types.SIGN_UP_REQUEST, signUpWorker)
  yield takeLatest(types.RECOVER_PASSWORD_REQUEST, recoverPasswordWorker)
}
