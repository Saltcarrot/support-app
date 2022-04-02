import { FC } from 'react'
import { CustomForm as Form } from '../../index'

import Div from './BottomBtns.style'

interface BottomBtnsPropTypes {
  googleOnClick: () => void
  linkPath: string
  linkTitle: string
}

const BottomBtns: FC<BottomBtnsPropTypes> = ({
  googleOnClick = () => {},
  ...rest
}) => {
  return (
    <Div>
      <Form.Button.Google onClick={googleOnClick} />
      <Form.Link.Redirect path={rest.linkPath} title={rest.linkTitle} />
    </Div>
  )
}

export default BottomBtns
