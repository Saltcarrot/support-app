import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../../hooks/useActions'
import { useLocation } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../../utils/types/input'
import { updatePasswordSchema } from '../../../../../utils/helpers/validationSchemas'

import AuthLayout from '../../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../../common/Container/Container'
import { CustomForm as Form } from '../../../../common/UI/Form'

import styles from '../../styles.module.sass'

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

  const confPassInputs: IInput[] = [
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
      placeholder: 'Повторите пароль',
    },
  ]

  return (
    <AuthLayout>
      <Container content='auth'>
        <Form.Container
          title='Обновление пароля'
          tip='Задайте новый пароль для своей учетной записи'
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          inputs={confPassInputs}
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
                <Form.Button.Submit text='Задать новый пароль' />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default PasswordConfirm
