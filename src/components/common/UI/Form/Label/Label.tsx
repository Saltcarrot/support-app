import { FC } from 'react'
import { LabelPropTypes } from './LabelPropTypes'

import LabelWrapper from './Label.style'

const Label: FC<LabelPropTypes> = ({ forHtml, text }) => {
  return <LabelWrapper htmlFor={forHtml}>{text}</LabelWrapper>
}

export default Label
