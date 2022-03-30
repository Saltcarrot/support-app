import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { authSchema } from '../../../../utils/helpers/validationSchemas'
import { userActions } from '../../../../redux/actions/userActions'

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
    resolver: yupResolver(authSchema),
  })
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(userActions.signIn.request(data))
    reset()
  }

  const [isRemember, setIsRemember] = useState<boolean>(false)

  const AuthInputs: IInput[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placement: 'auth',
      placeholder: 'example@example.com',
    },
    {
      label: 'Введите пароль',
      name: 'password',
      type: 'password',
      placement: 'auth',
      placeholder: 'Пароль',
    },
  ]

  return (
    <AuthLayout>
      <Container content='auth'>
        <Form
          title='Авторизация'
          tip='Заполните все поля для авторизации'
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          inputs={AuthInputs}
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
                <AuthLink path='/registration' title='Зарегистрироваться' />
              </div>
              <div className={styles.wrapper_submit}>
                <SubmitBtn text='Войти' />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default Authorization
