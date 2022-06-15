import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email должен иметь общепринятый вид адреса электронной почты')
    .required('Email должен быть введен'),
  password: Yup.string().required('Пароль должен быть введен'),
})

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      'Email должен иметь общепринятый вид адреса электронной почты'
    )
    .required('Email должен быть введен'),
  password: Yup.string()
    .min(8, 'Пароль должен состоять из 8 символов и более')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'Пароль должен содержать как минимум одну цифру, а также иметь буквы в верхнем и нижнем регистре'
    )
    .required('Пароль должен быть введен'),
  confirmPassword: Yup.string().when('password', {
    is: (val: string) => !!(val && val.length > 0),
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      .required('Подтвердите пароль'),
  }),
})

export const recoverySchema = Yup.object().shape({
  email: Yup.string()
    .email('Email должен иметь общепринятый вид адреса электронной почты')
    .required('Email должен быть введен'),
})

export const updatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Пароль должен состоять из 8 символов и более')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'Пароль должен содержать как минимум одну цифру, а также иметь буквы в верхнем и нижнем регистре'
    )
    .required('Пароль должен быть введен'),
  confirmPassword: Yup.string().when('password', {
    is: (val: string) => !!(val && val.length > 0),
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      .required('Подтвердите пароль'),
  }),
})

export const profileSchema = Yup.object().shape(
  {
    displayName: Yup.string()
      .nullable()
      .notRequired()
      .when('displayName', {
        is: (val: string) => !!(val && val.length > 0),
        then: Yup.string()
          .min(6, 'Никнейм должен состоять из 6 символов и более')
          .matches(
            /^(?=[a-zA-Z0-9._])(?!.*[_.]{2})[^_.].*[^_.]$/,
            'Неверный формат никнейма'
          ),
      }),
    password: Yup.string()
      .nullable()
      .notRequired()
      .when('password', {
        is: (val: string) => !!(val && val.length > 0),
        then: Yup.string()
          .min(8, 'Пароль должен состоять из 8 символов и более')
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            'Пароль должен содержать как минимум одну цифру, а также иметь буквы в верхнем и нижнем регистре'
          ),
      }),
    confirmPassword: Yup.string()
      .nullable()
      .notRequired()
      .when('confirmPassword', {
        is: (val: string) => !!(val && val.length > 0),
        then: Yup.string()
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
          .required('Подтвердите пароль'),
      }),
  },
  [
    ['displayName', 'displayName'],
    ['password', 'password'],
    ['confirmPassword', 'confirmPassword'],
  ]
)
