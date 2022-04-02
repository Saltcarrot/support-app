import { FC } from 'react'

import { InputPropTypes } from './InputPropTypes'

import { default as InputComponent } from './Input.style'

const Input: FC<InputPropTypes> = ({
  type = 'text',
  placement = 'common',
  ...rest
}) => {
  return (
    <InputComponent
      {...rest.register(rest.name)}
      type={type}
      className={placement}
      placeholder={rest.placeholder ? rest.placeholder : ''}
    />
  )
}

export default Input
