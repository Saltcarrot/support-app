import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'

import Layout from '../../../common/Layout/Layout'
import UI from '../../../common/UI'

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  })

  const {
    user: { signUp },
  } = useActions()

  const onSubmit = (data: any) => {
    signUp(data)
    reset()
  }

  const signUpInputs: Input[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placeholder: 'example@example.com',
    },
    {
      label: 'Введите пароль',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
    },
    {
      label: 'Повторите пароль',
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Пароль',
    },
  ]

  return (
    <Layout content='auth'>
      <UI.Form.Container
        title='Регистрация'
        tip='Для регистрации заполните все поля'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={signUpInputs}
        bottom={
          <UI.Form.FormBottom>
            <UI.Form.BottomBtns
              googleOnClick={() => {}}
              linkPath='/authorization'
              linkTitle='Войти'
            />
            <UI.Form.Button.Submit text='Зарегистрироваться' />
          </UI.Form.FormBottom>
        }
      />
    </Layout>
  )
}

export default Registration
