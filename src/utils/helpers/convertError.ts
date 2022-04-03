import { Errors } from '../enums/errors'

export const convertError = (error: {
  code: string
  message: string
}): string => {
  switch (error.code) {
    case Errors.EMAIL_EXISTS:
      return 'Пользователь с этим email уже существует'
    case Errors.USER_NOT_FOUND:
      return 'Пользователь с этим email не найден'
    case Errors.WRONG_PASSWORD:
      return 'Неверный пароль'
    case Errors.CLOSED_POPUP:
      return 'Вы закрыли окно авторизации через Google, попробуйте еще раз'
    case Errors.INVALID_ACTION_CODE:
      return 'Неверный код активации, попробуйте еще раз или запросите ссылку для сброса пароля заново'
    default:
      return `Error: ${error.code} - ${error.message}`
  }
}
