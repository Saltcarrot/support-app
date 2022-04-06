import { FC } from 'react'
import { LayoutPropTypes } from './LayoutPropTypes'

import LayoutWrapper from './Layout.style'

const Layout: FC<LayoutPropTypes> = ({ content = 'common', children }) => {
  return <LayoutWrapper className={content}>{children}</LayoutWrapper>
}

export default Layout
