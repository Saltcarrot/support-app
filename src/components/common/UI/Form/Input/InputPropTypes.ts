import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Input } from '../../../../../utils/types/input'

export interface InputPropTypes extends Input {
  register: UseFormRegister<FieldValues>
}
