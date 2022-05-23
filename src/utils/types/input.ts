import { ChangeEvent } from 'react'

export interface Input {
  label: string
  name: string
  type?: 'text' | 'password' | 'file'
  placeholder?: string
  accept?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
