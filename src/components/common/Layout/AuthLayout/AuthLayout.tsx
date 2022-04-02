import { FC, ReactNode } from 'react'

import Section from './AuthLayout.style'

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return <Section>{children}</Section>
}

export default AuthLayout
