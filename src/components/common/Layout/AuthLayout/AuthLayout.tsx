import { FC, ReactNode } from 'react'

import styles from './AuthLayout.module.sass'

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }: IAuthLayoutProps) => {
  return <section className={styles.auth_layout}>{children}</section>
}

export default AuthLayout
