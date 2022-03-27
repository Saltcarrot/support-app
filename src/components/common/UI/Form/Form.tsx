import { FC, ReactNode } from 'react'
import {
	FieldValues,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { IInput } from '../../../../utils/types/input'

import FormHeader from './FormHeader/FormHeader'
import FormGroup from './FormGroup/FormGroup'
import Label from './Label/Label'
import Input from './Input/Input'
import Alert from '../Alert/Alert'

import styles from './styles.module.sass'

interface IFormProps {
	title: string
	tip: string
	register: UseFormRegister<FieldValues>
	errors: {
		[x: string]: any
	}
	handleSubmit: UseFormHandleSubmit<FieldValues>
	onSubmit: SubmitHandler<FieldValues>
	inputArr: IInput[]
	bottom: ReactNode
}

const Form: FC<IFormProps> = (props: IFormProps) => {
	return (
		<form className={styles.form} onSubmit={props.handleSubmit(props.onSubmit)}>
			<FormHeader title={props.title} tip={props.tip} />
			{props.inputArr.map((el) => {
				return (
					<FormGroup key={el.name}>
						<Label for={el.name} text={el.label} />
						<Input register={props.register} {...el} />
						{props.errors[el.name] && (
							<Alert type='error' message={props.errors[el.name].message} />
						)}
					</FormGroup>
				)
			})}
			<div className={styles.bottom}>{props.bottom}</div>
		</form>
	)
}

export default Form
