import { FC } from 'react'

import LinkComponent from './ForgotPassLink.style'

const ForgotPassLink: FC = () => {
  return <LinkComponent to='/password_recovery'>Забыли пароль?</LinkComponent>
}

export default ForgotPassLink
