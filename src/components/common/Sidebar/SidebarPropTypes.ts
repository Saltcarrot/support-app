import { Dispatch, SetStateAction } from 'react'

export interface SidebarPropTypes {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  message: string
  setMessage: Dispatch<SetStateAction<string>>
}
