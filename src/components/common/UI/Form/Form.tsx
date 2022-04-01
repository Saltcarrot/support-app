import { FC, ReactNode } from 'react'
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { IInput } from '../../../../utils/types/input'

import { CustomForm } from './index'
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
  inputs: IInput[]
  bottom?: ReactNode
}

const Form: FC<IFormProps> = (props: IFormProps) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit(props.onSubmit)}>
      <CustomForm.Header title={props.title} tip={props.tip} />
      {props.inputs.map((el) => {
        return (
          <CustomForm.Group key={el.name}>
            <CustomForm.Label for={el.name} text={el.label} />
            <CustomForm.Input register={props.register} {...el} />
            {props.errors[el.name] && (
              <Alert type='error' message={props.errors[el.name].message} />
            )}
          </CustomForm.Group>
        )
      })}
      <div className={styles.bottom}>{props.bottom}</div>
    </form>
  )
}

export default Form
