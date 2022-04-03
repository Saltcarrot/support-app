import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../../utils/types/input'
import { recoverySchema } from '../../../../../utils/helpers/validationSchemas'

import Container from '../../../../common/Container/Container'
import { CustomForm as Form } from '../../../../common/UI/Form'

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

  const emailInput: IInput[] = [
    {
      label: 'Введите Email',
      name: 'email',
      placeholder: 'example@example.com',
    },
  ]

  return (
    <Container content='auth'>
      <Form.Container
        title='Восстановление пароля'
        tip='Введите Email, на который должна прийти ссылка для восстановления пароля'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={emailInput}
        bottom={
          <Form.FormBottom>
            <Form.BottomBtns
              googleOnClick={() => {}}
              linkPath='/authorization'
              linkTitle='Авторизоваться'
            />
            <Form.Button.Submit text='Получить ссылку' />
          </Form.FormBottom>
        }
      />
    </Container>
  )
}

export default PasswordRecovery
