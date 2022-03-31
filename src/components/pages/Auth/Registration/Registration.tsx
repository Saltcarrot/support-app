import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'
import { userActions } from '../../../../redux/actions/userActions'

import AuthLayout from '../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../common/Container/Container'
import { CustomForm as Form } from '../../../common/UI/Form'

import styles from '../Authorization/styles.module.sass'

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
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(userActions.signUp.request(data))
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
            <>
              <div className={styles.wrapper_btns}>
                <Form.Button.Google onClick={() => {}} />
                <Form.Link.Redirect
                  path='/authorization'
                  title='Авторизоваться'
                />
              </div>
              <div className={styles.wrapper_submit}>
                <Form.Button.Submit text='Зарегистрироваться' />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default Registration
