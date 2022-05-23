import { FC } from 'react'

import { InputPropTypes } from './InputPropTypes'

import InputWrapper from './Input.style'

const Input: FC<InputPropTypes> = ({ type = 'text', ...rest }) => {
  return (
    <InputWrapper
      {...rest.register(rest.name)}
      type={type}
      placeholder={rest.placeholder ? rest.placeholder : ''}
      accept={rest.accept}
      onChange={rest.onChange}
    />
  )
}

export default Input
