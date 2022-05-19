import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'

import { Input } from '../../../../utils/types/input'
import { signUpSchema } from '../../../../utils/helpers/validationSchemas'

import UI from '../../../common/UI'

const Registration: FC = () => {
  const { loading, error } = useTypedSelector((state) => state.user)
  const {
    user: { signUp, signInWithGoogle },
  } = useActions()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  })

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
    <UI.Container flow='auth'>
      <UI.Form.Container
        title='Регистрация'
        tip='Для регистрации заполните все поля'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={signUpInputs}
        bottom={
          <>
            {loading && <UI.Loader />}
            {error && <UI.Alert type='error' message={error} />}
            <UI.Form.FormBottom>
              <UI.Form.BottomBtns
                googleOnClick={() => signInWithGoogle()}
                linkPath='/authorization'
                linkTitle='Войти'
              />
              <UI.Form.Button.Submit text='Зарегистрироваться' />
            </UI.Form.FormBottom>
          </>
        }
      />
    </UI.Container>
  )
}

export default Registration
