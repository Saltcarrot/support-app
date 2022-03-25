import { FieldValues, UseFormRegister } from 'react-hook-form'

type TPattern = {
	value: RegExp
	message: string
}

type TMinLength = {
	value: number
	message: string
}

export interface IInput {
	label: string
	name: string
	type?: string
	placement?: string
	placeholder?: string
	pattern?: TPattern
	minLength?: TMinLength
	required: string
}

export interface IInputProps extends IInput {
	register: UseFormRegister<FieldValues>
}
