import { FC } from 'react'
import { FormHeaderPropTypes } from './FormHeaderPropTypes'

import FormHeaderWrapper from './FormHeader.style'

const FormHeader: FC<FormHeaderPropTypes> = ({ title, tip }) => {
  return (
    <FormHeaderWrapper>
      <h2>{title}</h2>
      <p>{tip}</p>
    </FormHeaderWrapper>
  )
}

export default FormHeader
