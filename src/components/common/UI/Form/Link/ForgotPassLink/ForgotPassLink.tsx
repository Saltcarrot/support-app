import { FC } from 'react'

import ForgotPassLinkWrapper from './ForgotPassLink.style'

const ForgotPassLink: FC = () => {
  return (
    <ForgotPassLinkWrapper to='/password_recovery'>
      Забыли пароль?
    </ForgotPassLinkWrapper>
  )
}

export default ForgotPassLink
