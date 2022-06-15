import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { profileSchema } from '../../../utils/helpers/validationSchemas'

import { Input } from '../../../utils/types/input'

import Header from '../../common/Header/Header'
import UI from '../../common/UI'

import UserProfileWrapper from './UserProfile.style'
import { useActions } from '../../../hooks/useActions'

const UserProfile: FC = () => {
  const { loading, error, success, user } = useTypedSelector(
    (state) => state.user
  )
  const {
    user: { updateUserProfile },
  } = useActions()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(profileSchema),
  })

  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (user) {
      if (user.user.displayName) setValue('displayName', user.user.displayName)
      if (user.user.photoURL) setImageSrc(user.user.photoURL)
    }
  }, [user])

  const onFileInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setImageSrc(reader.result?.toString())
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const profileInputs: Input[] = [
    { label: 'Никнейм', name: 'displayName', type: 'text', placeholder: '' },
    {
      label: 'Аватар',
      name: 'avatar',
      type: 'file',
      accept: '.jpeg, .jpg, .png',
      onChange: onFileInputChangeHandler,
    },
    {
      label: 'Новый пароль',
      name: 'password',
      type: 'password',
      placeholder: '',
    },
    {
      label: 'Подтвердите пароль',
      name: 'confirmPassword',
      type: 'password',
      placeholder: '',
    },
  ]

  const onSubmit = (data: any) => {
    if (user) {
      updateUserProfile({
        ...data,
      })
    }

    setValue('password', '')
    setValue('confirmPassword', '')
  }

  return (
    <>
      <Header />
      <UserProfileWrapper>
        <UI.Container>
          <UI.Form.Container
            title='Настройки профиля'
            imageSrc={imageSrc}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            inputs={profileInputs}
            bottom={
              <>
                {loading && <UI.Loader />}
                {error && <UI.Alert type='error' message={error} />}
                {success && <UI.Alert message={success} />}
                <UI.Form.FormBottom>
                  <UI.Form.Button.Submit text='Обновить профиль' />
                </UI.Form.FormBottom>
              </>
            }
          />
        </UI.Container>
      </UserProfileWrapper>
    </>
  )
}

export default UserProfile
