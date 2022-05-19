import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { call, put, takeLatest } from 'redux-saga/effects'

import { userActionTypes as types } from '../../utils/enums/user'
import { Auth, ConfPass, role } from '../../utils/types/user'
import { Errors } from '../../utils/enums/errors'
import { convertError } from '../../utils/helpers/convertError'

import * as actions from '../actions/actionTypes/userActionTypes'
import { userActions } from '../actions/userActions'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const fetchCheckAuth = async () => {
  const auth = firebase.auth()

  const isUser = await auth.onAuthStateChanged((user) => !!user)

  return isUser
}

const fetchSignIn = async ({ email, password, isRemember }: Auth) => {
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

const fetchSignInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  const { user } = await firebase.auth().signInWithPopup(provider)

  return user
}

const fetchSignUp = async ({ email, password }: Auth) => {
  const auth = firebase.auth()

  const { user } = await auth.createUserWithEmailAndPassword(email, password)

  return user
}

const fetchSignOut = async () => {
  const auth = firebase.auth()

  return await auth.signOut()
}

const fetchUserRole = async (uid: string) => {
  const db = firebase.firestore().collection('users')

  const snapshot = await db
    .where(firebase.firestore.FieldPath.documentId(), '==', uid)
    .get()
  const [role] = snapshot.docs.map((item) => {
    return item.data()['role']
  })

  if (!role) {
    await db.doc(uid).set({
      role: 'user',
    })
  }

  return role
}

const fetchRecoverPassword = async (email: string) => {
  const auth = firebase.auth()
  await auth.sendPasswordResetEmail(email)
}

const fetchConfirmPassword = async ({ oobCode, password }: ConfPass) => {
  const auth = firebase.auth()
  if (oobCode != null) {
    await auth.confirmPasswordReset(oobCode, password)
  }
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
    const user: firebase.User = yield call(fetchSignIn, {
      email,
      password,
      isRemember,
    })
    const role: role = yield call(fetchUserRole, user.uid)
    yield put(userActions.signIn.success({ user, role }))
  } catch (error: any) {
    // По дефолту возвращает unknown
    yield put(userActions.signIn.error(convertError(error)))
  }
}

function* signInWithGoogleWorker() {
  try {
    const user: firebase.User = yield call(fetchSignInWithGoogle)
    const role: role = yield call(fetchUserRole, user.uid)
    yield put(userActions.signIn.success({ user, role }))
  } catch (error: any) {
    // По дефолту возвращает unknown
    yield put(userActions.signIn.error(convertError(error)))
  }
}

function* signUpWorker({
  payload: { email, password },
}: actions.SignUpRequestAction) {
  try {
    const user: firebase.User = yield call(fetchSignUp, {
      email: email,
      password: password,
    })
    const role: role = yield call(fetchUserRole, user.uid)
    yield put(userActions.signUp.success({ user, role }))
  } catch (error: any) {
    yield put(userActions.signUp.error(convertError(error)))
  }
}

function* signOutWorker() {
  try {
    yield call(fetchSignOut)
    yield put(userActions.signOut.success())
  } catch (error: any) {
    yield put(userActions.signOut.error(convertError(error)))
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
  } catch (error: any) {
    yield put(userActions.recoverPassword.error(convertError(error)))
  } finally {
    yield call(delay, 5000)
    yield put(userActions.resetMessages())
  }
}

function* confirmPasswordWorker({
  payload: { oobCode, password },
}: actions.ConfirmPasswordRequestAction) {
  try {
    if (oobCode !== null) {
      yield call(fetchConfirmPassword, { oobCode, password })
      yield put(
        userActions.confirmPassword.success(
          'Пароль обновлен, перенаправляем на страницу авторизации'
        )
      )
    } else {
      yield put(
        userActions.confirmPassword.error(
          convertError({ code: Errors.INVALID_ACTION_CODE, message: '' })
        )
      )
    }
  } catch (error: any) {
    yield put(userActions.confirmPassword.error(convertError(error)))
  } finally {
    yield call(delay, 5000)
    yield put(userActions.resetMessages())
  }
}

export function* userSaga() {
  yield takeLatest(types.SIGN_IN_REQUEST, signInWithDataWorker)
  yield takeLatest(types.CHECK_AUTH_REQUEST, checkAuthWorker)
  yield takeLatest(types.SIGN_UP_REQUEST, signUpWorker)
  yield takeLatest(types.SIGN_OUT_REQUEST, signOutWorker)
  yield takeLatest(types.RECOVER_PASSWORD_REQUEST, recoverPasswordWorker)
  yield takeLatest(types.CONFIRM_PASSWORD_REQUEST, confirmPasswordWorker)
  yield takeLatest(types.SIGN_IN_WITH_GOOGLE_REQUEST, signInWithGoogleWorker)
}
