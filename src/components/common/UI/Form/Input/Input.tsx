import { FC } from 'react'
import cn from 'classnames'

import { IInputProps } from '../../../../../types/input'

import styles from './styles.module.sass'

const Input: FC<IInputProps> = (props: IInputProps) => {
	return (
		<input
			{...props.register(props.name, {
				required: props.required,
				...(props.minLength && {
					minLength: {
						value: props.minLength.value,
						message: props.minLength.message,
					},
				}),
				...(props.pattern && {
					pattern: {
						value: props.pattern.value,
						message: props.pattern.message,
					},
				}),
			})}
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
