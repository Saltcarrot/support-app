import { FC, ReactNode } from 'react'
import Div from './FormBottom.style'

interface FormBottomPropTypes {
  children: ReactNode
}

const FormBottom: FC<FormBottomPropTypes> = ({ children }) => {
  return <Div>{children}</Div>
}

export default FormBottom
