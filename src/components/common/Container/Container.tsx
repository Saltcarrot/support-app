import { FC, ReactNode } from 'react'

import Div from './Container.style'

interface IContainerProps {
  content?: string
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <Div className='auth'>{children}</Div>
}

export default Container
