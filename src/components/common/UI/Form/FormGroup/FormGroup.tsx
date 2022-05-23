import { FC } from 'react'

import { FormGroupPropTypes } from './FormGroupPropTypes'

import FormBottomWrapper from './FormGroup.style'

const FormGroup: FC<FormGroupPropTypes> = ({ flow = 'column', children }) => {
  return <FormBottomWrapper className={flow}>{children}</FormBottomWrapper>
}

export default FormGroup
