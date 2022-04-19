import { FC } from 'react'

import SubmitBtnWrapper from './SubmitBtn.style'

import { SubmitBtnPropTypes } from './SubmitBtnPropTypes'

const SubmitBtn: FC<SubmitBtnPropTypes> = ({ text }) => {
  return (
    <SubmitBtnWrapper>
      <button type='submit'>{text}</button>
    </SubmitBtnWrapper>
  )
}

export default SubmitBtn
