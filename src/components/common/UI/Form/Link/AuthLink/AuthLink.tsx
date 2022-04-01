import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './AuthLink.module.sass'

interface ILinkProps {
  title: string
  path: string
}

const AuthLink: FC<ILinkProps> = (props: ILinkProps) => {
  return (
    <Link className={styles.link} to={props.path}>
      {props.title}
    </Link>
  )
}

export default AuthLink
