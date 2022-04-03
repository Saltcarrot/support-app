import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { yupResolver } from '@hookform/resolvers/yup'
import { IInput } from '../../../../utils/types/input'
import { signInSchema } from '../../../../utils/helpers/validationSchemas'

import Container from '../../../common/Container/Container'
import { CustomForm as Form } from '../../../common/UI/Form'

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

  const {
    user: { signIn },
  } = useActions()

  const onSubmit = (data: any) => {
    signIn(data)
    reset()
  }

  const signInInputs: IInput[] = [
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
          <Form.FormBottom>
            <Form.CheckBoxAndLink
              isRemember={isRemember}
              setIsRemember={setIsRemember}
            />
            <Form.BottomBtns
              googleOnClick={() => {}}
              linkPath='/registration'
              linkTitle='Регистрация'
            />
            <Form.Button.Submit text='Войти' />
          </Form.FormBottom>
        }
      />
    </Container>
  )
}

export default Authorization
