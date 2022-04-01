import { FC } from 'react'
import { FormPropTypes } from './FormPropTypes'
import { CustomForm } from '../index'

import Alert from '../../Alert/Alert'

import styles from './Form.module.sass'

const Form: FC<FormPropTypes> = (props: FormPropTypes) => {
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
