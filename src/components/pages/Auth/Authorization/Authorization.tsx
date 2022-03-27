import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { UserActions } from '../../../../redux/actions/userActions'
import { IInput } from '../../../../utils/types/input'

import AuthLayout from '../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../common/Container/Container'
import Form from '../../../common/UI/Form/Form'
import CheckBox from '../../../common/UI/Form/CheckBox/CheckBox'
import ForgotPassLink from '../../../common/UI/Form/Link/ForgotPassLink/ForgotPassLink'
import GoogleAuth from '../../../common/UI/Form/Button/GoogleAuth/GoogleAuth'
import AuthLink from '../../../common/UI/Form/Link/AuthLink/AuthLink'
import SubmitBtn from '../../../common/UI/Form/Button/SubmitBtn/SubmitBtn'

import styles from './styles.module.sass'

const Authorization: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
  })
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(UserActions.signIn.request(data))
    reset()
  }

  const [isRemember, setIsRemember] = useState<boolean>(false)

  const AuthInputs: IInput[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placement: 'auth',
      placeholder: 'example@example.com',
      required: 'Email не может быть пустым',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: 'Email должен иметь общепринятый вид адреса электронной почты',
      },
    },
    {
      label: 'Введите пароль',
      name: 'password',
      placement: 'auth',
      placeholder: 'Пароль',
      required: 'Пароль не может быть пустым',
      // minLength: {
      //   value: 8,
      //   message: 'Пароль должен состоять из 8 символов и более',
      // },
      // pattern: {
      //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      //   message:
      //     'Пароль должен содержать как минимум одну цифру, а также иметь буквы в верхнем и нижнем регистре',
      // },
    },
  ]

  return (
    <AuthLayout>
      <Container content="auth">
        <Form
          title="Авторизация"
          tip="Заполните все поля для авторизации"
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          inputArr={AuthInputs}
          bottom={
            <>
              <div className={styles.wrapper}>
                <CheckBox
                  isChecked={isRemember}
                  onClick={() => setIsRemember(!isRemember)}
                />
                <ForgotPassLink />
              </div>
              <div className={styles.wrapper_btns}>
                <GoogleAuth onClick={() => {}} />
                <AuthLink path="/registration" title="Зарегистрироваться" />
              </div>
              <div className={styles.wrapper_submit}>
                <SubmitBtn text="Войти" />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default Authorization
