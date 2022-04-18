import { ReactNode } from 'react'

type flow = 'row' | 'column'

export interface ContainerPropTypes {
  children: ReactNode
  flow?: flow
}
