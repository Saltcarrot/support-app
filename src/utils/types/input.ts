import { FieldValues, UseFormRegister } from 'react-hook-form'

interface TPattern {
  value: RegExp
  message: string
}

interface TMinLength {
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
