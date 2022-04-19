import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'

import { Input } from '../../../../utils/types/input'
import { signInSchema } from '../../../../utils/helpers/validationSchemas'

import UI from '../../../common/UI'

const Authorization: FC = () => {
  const { loading, error } = useTypedSelector((state) => state.user)
  const {
    user: { signIn, signInWithGoogle },
  } = useActions()

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

  const onSubmit = (data: any) => {
    signIn(data)
    reset()
  }

  const signInInputs: Input[] = [
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
  ]

  return (
    <UI.Container flow='auth'>
      <UI.Form.Container
        title='Авторизация'
        tip='Заполните все поля для авторизации'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputs={signInInputs}
        bottom={
          <>
            {loading && <UI.Loader />}
            {error && <UI.Alert type='error' message={error} />}
            <UI.Form.FormBottom>
              <UI.Form.CheckBoxAndLink
                isRemember={isRemember}
                setIsRemember={setIsRemember}
              />
              <UI.Form.BottomBtns
                googleOnClick={() => signInWithGoogle()}
                linkPath='/registration'
                linkTitle='Регистрация'
              />
              <UI.Form.Button.Submit text='Войти' />
            </UI.Form.FormBottom>
          </>
        }
      />
    </UI.Container>
  )
}

export default Authorization
