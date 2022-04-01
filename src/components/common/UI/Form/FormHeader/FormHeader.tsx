import { FC } from 'react'

import styles from './FormHeader.module.sass'

interface IFormHeaderProps {
  title: string
  tip: string
}

const FormHeader: FC<IFormHeaderProps> = (props: IFormHeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.tip}>{props.tip}</p>
    </div>
  )
}

export default FormHeader
