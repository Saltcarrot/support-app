import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'

import Layout from '../../../common/Layout/Layout'
import CustomForm from '../../../common/UI/Form'

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
      <CustomForm.Container
        title='Регистрация'
        tip='Для регистрации заполните все поля'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={signUpInputs}
        bottom={
          <CustomForm.FormBottom>
            <CustomForm.BottomBtns
              googleOnClick={() => {}}
              linkPath='/authorization'
              linkTitle='Войти'
            />
            <CustomForm.Button.Submit text='Зарегистрироваться' />
          </CustomForm.FormBottom>
        }
      />
    </Layout>
  )
}

export default Registration
