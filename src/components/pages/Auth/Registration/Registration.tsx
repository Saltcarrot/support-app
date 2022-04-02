import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'

import AuthLayout from '../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../common/Container/Container'
import { CustomForm as Form } from '../../../common/UI/Form'

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

  const signUpInputs: IInput[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placement: 'auth',
      placeholder: 'example@example.com',
    },
    {
      label: 'Введите пароль',
      type: 'password',
      name: 'password',
      placement: 'auth',
      placeholder: 'Пароль',
    },
    {
      label: 'Повторите пароль',
      type: 'password',
      name: 'confirmPassword',
      placement: 'auth',
      placeholder: 'Пароль',
    },
  ]

  return (
    <AuthLayout>
      <Container content='auth'>
        <Form.Container
          title='Регистрация'
          tip='Для регистрации заполните все поля'
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          inputs={signUpInputs}
          bottom={
            <Form.FormBottom>
              <Form.BottomBtns
                googleOnClick={() => {}}
                linkPath='/authorization'
                linkTitle='Авторизоваться'
              />
              <Form.Button.Submit text='Зарегистрироваться' />
            </Form.FormBottom>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default Registration
