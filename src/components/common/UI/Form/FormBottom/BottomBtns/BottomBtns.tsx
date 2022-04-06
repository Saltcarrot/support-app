import { FC } from 'react'
import { BottomBtnsPropTypes } from './BottomBtnPropTypes'
import CustomForm from '../../index'

import BottomBtnsWrapper from './BottomBtns.style'

const BottomBtns: FC<BottomBtnsPropTypes> = ({
  googleOnClick = () => {},
  ...rest
}) => {
  return (
    <BottomBtnsWrapper>
      <CustomForm.Button.Goggle onClick={googleOnClick} />
      <CustomForm.Link.Redirect path={rest.linkPath} title={rest.linkTitle} />
    </BottomBtnsWrapper>
  )
}

export default BottomBtns
