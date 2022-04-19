import { FC } from 'react'
import { ContainerPropTypes } from './ContainerPropTypes'

import ContainerWrapper from './Container.style'

const Container: FC<ContainerPropTypes> = ({ children, flow = 'column' }) => {
  return <ContainerWrapper className={flow}>{children}</ContainerWrapper>
}

export default Container
