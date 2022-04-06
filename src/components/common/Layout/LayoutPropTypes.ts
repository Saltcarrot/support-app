import { ReactNode } from 'react'

type content = 'auth' | 'common'

export interface LayoutPropTypes {
  content?: content
  children: ReactNode
}
