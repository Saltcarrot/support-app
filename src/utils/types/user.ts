import { UserInfo } from 'firebase/auth'

export interface Auth {
  email: string
  password: string
  isRemember?: boolean
}

export interface ConfPass {
  oobCode: string | null
  password: string
}

export interface UserState {
  loading: boolean
  error: string | null
  success: string | null
  user: UserInfo | null
}
