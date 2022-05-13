import { FC } from 'react'

import { OutsideInputPropTypes } from './OutsideInputPropTypes'

import OutsideInputWrapper from './OutsideInput.style'

const OutsideInput: FC<OutsideInputPropTypes> = ({
  name,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <OutsideInputWrapper
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default OutsideInput
