import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../../hooks/useActions'
import { useLocation } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../../../../utils/types/input'
import { updatePasswordSchema } from '../../../../../utils/helpers/validationSchemas'

import Layout from '../../../../common/Layout/Layout'
import UI from '../../../../common/UI'

const PasswordConfirm: FC = () => {
  const { search } = useLocation()
  const oobCode = new URLSearchParams(search).get('oobCode')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(updatePasswordSchema),
  })

  const {
    user: { confirmPassword },
  } = useActions()

  const onSubmit = ({ password }: any) => {
    confirmPassword({ oobCode, password })
    reset()
  }

  const confPassInputs: Input[] = [
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
      placeholder: 'Повторите пароль',
    },
  ]

  return (
    <Layout content='auth'>
      <UI.Form.Container
        title='Обновление пароля'
        tip='Задайте новый пароль для своей учетной записи'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={confPassInputs}
        bottom={
          <UI.Form.FormBottom>
            <UI.Form.BottomBtns
              googleOnClick={() => {}}
              linkPath='/authorization'
              linkTitle='Авторизоваться'
            />
            <UI.Form.Button.Submit text='Задать новый пароль' />
          </UI.Form.FormBottom>
        }
      />
    </Layout>
  )
}

export default PasswordConfirm
