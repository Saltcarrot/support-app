import { MouseEvent } from 'react'

export interface CheckBoxPropTypes {
  isChecked: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}
