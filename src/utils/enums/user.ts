export enum userActionTypes {
  RESET_MESSAGES = 'RESET_MESSAGES',

  CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST',
  CHECK_AUTH_ERROR = 'CHECK_AUTH_ERROR',
  CHECK_AUTH_RESET = 'CHECK_AUTH_RESET',

  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  SIGN_IN_WITH_GOOGLE_REQUEST = 'SIGN_IN_WITH_GOOGLE_REQUEST',

  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR = 'SIGN_OUT_ERROR',

  RECOVER_PASSWORD_REQUEST = 'RECOVER_PASSWORD_REQUEST',
  RECOVER_PASSWORD_SUCCESS = 'RECOVER_PASSWORD_SUCCESS',
  RECOVER_PASSWORD_ERROR = 'RECOVER_PASSWORD_ERROR',

  CONFIRM_PASSWORD_REQUEST = 'CONFIRM_PASSWORD_REQUEST',
  CONFIRM_PASSWORD_SUCCESS = 'CONFIRM_PASSWORD_SUCCESS',
  CONFIRM_PASSWORD_ERROR = 'CONFIRM_PASSWORD_ERROR',
}
