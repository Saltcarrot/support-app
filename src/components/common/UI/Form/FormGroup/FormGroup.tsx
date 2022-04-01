import { FC } from 'react'

import styles from './FormGroup.module.sass'

const FormGroup: FC = ({ children }) => {
  return <div className={styles.form_group}>{children}</div>
}

export default FormGroup
