import { ReactNode } from 'react'

type flow = 'auth' | 'row' | 'column'

export interface ContainerPropTypes {
  children: ReactNode
  flow?: flow
}
