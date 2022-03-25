import { FC } from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

interface IAlertProps {
	type?: string
	message: string
}

const Alert: FC<IAlertProps> = ({ type = 'success', message }) => {
	return (
		<div
			className={cn(styles.alert, {
				[styles.success]: type === 'success',
				[styles.error]: type === 'error',
				[styles.info]: type === 'info',
			})}
		>
			{message}
		</div>
	)
}

export default Alert
