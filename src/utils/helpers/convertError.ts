import { errors } from '../enums/errors'

export const convertError = (error: {
  code: string
  message: string
}): string => {
  switch (error.code) {
    case errors.EMAIL_EXISTS:
      return 'Пользователь с этим email уже существует'
    case errors.USER_NOT_FOUND:
      return 'Пользователь с этим email не найден'
    case errors.WRONG_PASSWORD:
      return 'Неверный пароль'
    case errors.CLOSED_POPUP:
      return 'Вы закрыли окно авторизации через Google, попробуйте еще раз'
    default:
      return `Error: ${error.code} - ${error.message}`
  }
}
