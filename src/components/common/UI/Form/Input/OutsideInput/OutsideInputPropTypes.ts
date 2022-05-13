import { ChangeEvent } from 'react'

export interface OutsideInputPropTypes {
  name: string
  type?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
