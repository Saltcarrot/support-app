import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../../utils/types/input'
import { recoverySchema } from '../../../../../utils/helpers/validationSchemas'

import AuthLayout from '../../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../../common/Container/Container'
import { CustomForm as Form } from '../../../../common/UI/Form'

import styles from '../../Auth.module.sass'

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
      placement: 'auth',
      placeholder: 'example@example.com',
    },
  ]

  return (
    <AuthLayout>
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
            <>
              <div className={styles.wrapper_btns}>
                <Form.Button.Google onClick={() => {}} />
                <Form.Link.Redirect
                  path='/authorization'
                  title='Авторизоваться'
                />
              </div>
              <div className={styles.wrapper_submit}>
                <Form.Button.Submit text='Получить ссылку' />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default PasswordRecovery
