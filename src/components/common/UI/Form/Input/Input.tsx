import { FC } from 'react'

import { InputPropTypes } from './InputPropTypes'

import { default as InputComponent } from './Input.style'

const Input: FC<InputPropTypes> = ({ type = 'text', ...rest }) => {
  return (
    <InputComponent
      {...rest.register(rest.name)}
      type={type}
      placeholder={rest.placeholder ? rest.placeholder : ''}
    />
  )
}

export default Input
