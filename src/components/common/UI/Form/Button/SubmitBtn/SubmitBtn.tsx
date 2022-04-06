import { FC } from 'react'
import { SubmitBtnPropTypes } from './SubmitBtnPropTypes'

import SubmitBtnWrapper from './SubmitBtn.style'

const SubmitBtn: FC<SubmitBtnPropTypes> = ({ text }) => {
  return (
    <SubmitBtnWrapper>
      <button type='submit'>{text}</button>
    </SubmitBtnWrapper>
  )
}

export default SubmitBtn
