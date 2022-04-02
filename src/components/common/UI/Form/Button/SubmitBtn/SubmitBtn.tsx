import { FC } from 'react'

import Div from './SubmitBtn.style'

interface ISubmitBtnProps {
  text: string
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ text }) => {
  return (
    <Div>
      <button type='submit'>{text}</button>
    </Div>
  )
}

export default SubmitBtn
