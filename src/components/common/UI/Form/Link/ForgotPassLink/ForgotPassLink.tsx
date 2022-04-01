import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './ForgotLink.module.sass'

const ForgotPassLink: FC = () => {
  return (
    <Link className={styles.link} to='/password_recovery'>
      Забыли пароль?
    </Link>
  )
}

export default ForgotPassLink
