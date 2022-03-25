import { FC } from 'react'

import styles from './styles.module.sass'

interface ISubmitBtnProps {
	text: string
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ text }) => {
	return (
		<button className={styles.submit} type='submit'>
			{text}
		</button>
	)
}

export default SubmitBtn
