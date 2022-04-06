import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { Input } from '../../../../../utils/types/input'
import { ReactNode } from 'react'

export interface FormPropTypes {
  title: string
  tip: string
  register: UseFormRegister<FieldValues>
  errors: {
    [x: string]: any
  }
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onSubmit: SubmitHandler<FieldValues>
  inputs: Input[]
  bottom?: ReactNode
}
