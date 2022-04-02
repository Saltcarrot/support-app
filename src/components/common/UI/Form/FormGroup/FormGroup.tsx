import { FC, ReactNode } from 'react'

import Div from './FormGroup.style'

interface FormGroupPropTypes {
  children: ReactNode
}

const FormGroup: FC<FormGroupPropTypes> = ({ children }) => {
  return <Div>{children}</Div>
}

export default FormGroup
