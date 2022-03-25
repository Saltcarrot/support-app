import { FC } from 'react'

import styles from './styles.module.sass'

interface IFormHeaderProps {
	title: string
	tip: string
}

const FormHeader: FC<IFormHeaderProps> = (props: IFormHeaderProps) => {
	return (
		<div className={styles.top}>
			<h1 className={styles.title}>{props.title}</h1>
			<p>{props.tip}</p>
		</div>
	)
}

export default FormHeader
