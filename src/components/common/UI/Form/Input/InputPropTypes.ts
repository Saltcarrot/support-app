import { FieldValues, UseFormRegister } from 'react-hook-form'
import { IInput } from '../../../../../utils/types/input'

export interface InputPropTypes extends IInput {
  register: UseFormRegister<FieldValues>
}
