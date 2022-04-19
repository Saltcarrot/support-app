import { FC } from 'react'

import { FormBottomPropTypes } from './FormBottomPropTypes'

import FormBottomWrapper from './FormBottom.style'

const FormBottom: FC<FormBottomPropTypes> = ({ children }) => {
  return <FormBottomWrapper>{children}</FormBottomWrapper>
}

export default FormBottom
