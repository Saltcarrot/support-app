import { FC } from 'react'
import { FormHeaderPropTypes } from './FormHeaderPropTypes'

import FormHeaderWrapper from './FormHeader.style'

const FormHeader: FC<FormHeaderPropTypes> = ({ title, tip }) => {
  return (
    <FormHeaderWrapper>
      <h1 className='title'>{title}</h1>
      <p className='tip'>{tip}</p>
    </FormHeaderWrapper>
  )
}

export default FormHeader
