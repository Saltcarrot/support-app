import { FC } from 'react'

import styles from './styles.module.sass'

const FormGroup: FC = ({ children }) => {
	return <div className={styles.group}>{children}</div>
}

export default FormGroup
