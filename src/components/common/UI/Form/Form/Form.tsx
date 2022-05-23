import { FC } from 'react'

import CustomForm from '../index'
import Alert from '../../Alert/Alert'

import { FormPropTypes } from './FormPropTypes'

import FormWrapper from './Form.style'

const Form: FC<FormPropTypes> = (props) => {
  return (
    <FormWrapper onSubmit={props.handleSubmit(props.onSubmit)}>
      <CustomForm.Header title={props.title} tip={props.tip} />
      {props.inputs.map((el) => {
        return (
          <CustomForm.Group
            key={el.name}
            flow={el.type === 'file' ? 'row' : 'column'}
          >
            <CustomForm.Label forHtml={el.name} text={el.label} />
            {props.imageSrc && el.type === 'file' && (
              <img src={props.imageSrc} alt='Аватар' />
            )}
            <CustomForm.Input register={props.register} {...el} />
            {props.errors[el.name] && (
              <Alert type='error' message={props.errors[el.name].message} />
            )}
          </CustomForm.Group>
        )
      })}
      <div>{props.bottom}</div>
    </FormWrapper>
  )
}

export default Form
