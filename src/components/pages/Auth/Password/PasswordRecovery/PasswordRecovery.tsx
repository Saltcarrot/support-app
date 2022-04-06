import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../../../../utils/types/input'
import { recoverySchema } from '../../../../../utils/helpers/validationSchemas'

import Layout from '../../../../common/Layout/Layout'
import CustomForm from '../../../../common/UI/Form'

const PasswordRecovery: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(recoverySchema),
  })

  const {
    user: { recoverPassword },
  } = useActions()

  const onSubmit = ({ email }: any) => {
    recoverPassword(email)
    reset()
  }

  const emailInput: Input[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placeholder: 'example@example.com',
    },
  ]

  return (
    <Layout content='auth'>
      <CustomForm.Container
        title='Восстановление пароля'
        tip='Введите Email, на который должна прийти ссылка для восстановления пароля'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={emailInput}
        bottom={
          <CustomForm.FormBottom>
            <CustomForm.BottomBtns
              googleOnClick={() => {}}
              linkPath='/authorization'
              linkTitle='Авторизоваться'
            />
            <CustomForm.Button.Submit text='Получить ссылку' />
          </CustomForm.FormBottom>
        }
      />
    </Layout>
  )
}

export default PasswordRecovery
