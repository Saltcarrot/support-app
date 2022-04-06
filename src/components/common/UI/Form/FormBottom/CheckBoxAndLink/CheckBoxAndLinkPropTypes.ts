import { Dispatch, SetStateAction } from 'react'

export interface CheckBoxAndLinkPropTypes {
  isRemember: boolean
  setIsRemember: Dispatch<SetStateAction<boolean>>
}
