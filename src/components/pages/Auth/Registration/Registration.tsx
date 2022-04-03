import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'

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
              linkTitle='Войти'
            />
            <Form.Button.Submit text='Зарегистрироваться' />
          </Form.FormBottom>
        }
      />
    </Container>
  )
}

export default Registration
