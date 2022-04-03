import { FC } from 'react'

import { default as LabelComponent } from './Label.style'

interface ILabelProps {
  forHtml: string
  text: string
}

const Label: FC<ILabelProps> = ({ forHtml, text }) => {
  return <LabelComponent htmlFor={forHtml}>{text}</LabelComponent>
}

export default Label
