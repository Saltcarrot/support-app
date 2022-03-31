import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { signInSchema } from '../../../../utils/helpers/validationSchemas'
import { userActions } from '../../../../redux/actions/userActions'

import AuthLayout from '../../../common/Layout/AuthLayout/AuthLayout'
import Container from '../../../common/Container/Container'
import { CustomForm as Form } from '../../../common/UI/Form'

import styles from './styles.module.sass'

const Authorization: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  })
  const [isRemember, setIsRemember] = useState<boolean>(false)
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(userActions.signIn.request(data))
    reset()
  }

  const signInInputs: IInput[] = [
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
  ]

  return (
    <AuthLayout>
      <Container content='auth'>
        <Form.Container
          title='Авторизация'
          tip='Заполните все поля для авторизации'
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          inputs={signInInputs}
          bottom={
            <>
              <div className={styles.wrapper}>
                <Form.CheckBox
                  isChecked={isRemember}
                  onClick={() => setIsRemember(!isRemember)}
                />
                <Form.Link.ForgotPassword />
              </div>
              <div className={styles.wrapper_btns}>
                <Form.Button.Google onClick={() => {}} />
                <Form.Link.Redirect
                  path='/registration'
                  title='Зарегистрироваться'
                />
              </div>
              <div className={styles.wrapper_submit}>
                <Form.Button.Submit text='Войти' />
              </div>
            </>
          }
        />
      </Container>
    </AuthLayout>
  )
}

export default Authorization
