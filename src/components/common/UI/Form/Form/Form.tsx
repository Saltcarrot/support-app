import { FC } from 'react'
import { FormPropTypes } from './FormPropTypes'
import { CustomForm } from '../index'

import Alert from '../../Alert/Alert'

import { default as FormComponent } from './Form.style'

const Form: FC<FormPropTypes> = (props) => {
  return (
    <FormComponent onSubmit={props.handleSubmit(props.onSubmit)}>
      <CustomForm.Header title={props.title} tip={props.tip} />
      {props.inputs.map((el) => {
        return (
          <CustomForm.Group key={el.name}>
            <CustomForm.Label forHtml={el.name} text={el.label} />
            <CustomForm.Input register={props.register} {...el} />
            {props.errors[el.name] && (
              <Alert type='error' message={props.errors[el.name].message} />
            )}
          </CustomForm.Group>
        )
      })}
      <div>{props.bottom}</div>
    </FormComponent>
  )
}

export default Form
