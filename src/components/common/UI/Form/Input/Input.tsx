import { FC } from 'react'
import cn from 'classnames'

import { InputPropTypes } from './InputPropTypes'

import styles from './styles.module.sass'

const Input: FC<InputPropTypes> = (props: InputPropTypes) => {
  return (
    <input
      {...props.register(props.name)}
      type={props.type ? props.type : 'text'}
      className={cn(styles.input, {
        [styles.auth]: props.placement === 'auth',
        [styles.common]: props.placement === 'common' || !props.placement,
      })}
      placeholder={props.placeholder ? props.placeholder : ''}
    />
  )
}

export default Input
