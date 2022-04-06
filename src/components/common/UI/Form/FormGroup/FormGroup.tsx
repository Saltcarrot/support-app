import { FC } from 'react'
import { FormGroupPropTypes } from './FormGroupPropTypes'

import FormBottomWrapper from './FormGroup.style'

const FormGroup: FC<FormGroupPropTypes> = ({ children }) => {
  return <FormBottomWrapper>{children}</FormBottomWrapper>
}

export default FormGroup
