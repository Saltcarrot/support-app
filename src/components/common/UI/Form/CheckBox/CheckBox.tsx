import { FC, MouseEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

import styles from './styles.module.sass'

interface ICheckBoxProps {
	isChecked: boolean
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CheckBox: FC<ICheckBoxProps> = (props: ICheckBoxProps) => {
	return (
		<div className={styles.checkbox}>
			<button
				className={styles.check_btn}
				onClick={props.onClick}
				type='button'
			>
				{props.isChecked && <FaCheck />}
			</button>
			<p>Запомнить меня</p>
		</div>
	)
}

export default CheckBox
