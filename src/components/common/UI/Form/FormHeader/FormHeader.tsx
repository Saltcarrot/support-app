import { FC } from 'react'

import Div from './FormHeader.style'

interface IFormHeaderProps {
  title: string
  tip: string
}

const FormHeader: FC<IFormHeaderProps> = ({ title, tip }) => {
  return (
    <Div>
      <h1 className='title'>{title}</h1>
      <p className='tip'>{tip}</p>
    </Div>
  )
}

export default FormHeader
