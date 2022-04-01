import { FC } from 'react'

import styles from './Label.module.sass'

interface ILabelProps {
  for: string
  text: string
}

const Label: FC<ILabelProps> = (props: ILabelProps) => {
  return (
    <label className={styles.label} htmlFor={props.for}>
      {props.text}
    </label>
  )
}

export default Label
