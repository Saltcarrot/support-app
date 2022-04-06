import { FC } from 'react'
import { ContainerPropTypes } from './ContainerPropTypes'

import ContainerWrapper from './Container.style'

const Container: FC<ContainerPropTypes> = ({ children }) => {
  return <ContainerWrapper className='common'>{children}</ContainerWrapper>
}

export default Container
