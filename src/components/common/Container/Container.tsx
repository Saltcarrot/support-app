import { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Container.module.sass'

interface IContainerProps {
  content?: string
  children: ReactNode
}

const Container: FC<IContainerProps> = (props: IContainerProps) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.auth]: props.content === 'auth',
        '': !props.content,
      })}
    >
      {props.children}
    </div>
  )
}

export default Container
