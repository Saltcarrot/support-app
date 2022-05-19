import { FC } from 'react'

import { RedirectPropTypes } from './RedirectPropTypes'

import RedirectWrapper from './Redirect.style'

const Redirect: FC<RedirectPropTypes> = ({ title, path }) => {
  return <RedirectWrapper to={path}>{title}</RedirectWrapper>
}

export default Redirect
