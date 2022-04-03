import { FC } from 'react'

import LinkComponent from './AuthLink.style'

interface ILinkProps {
  title: string
  path: string
}

const AuthLink: FC<ILinkProps> = ({ title, path }) => {
  return <LinkComponent to={path}>{title}</LinkComponent>
}

export default AuthLink
