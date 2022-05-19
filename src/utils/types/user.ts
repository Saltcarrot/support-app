import { UserInfo } from 'firebase/auth'

export type role = 'operator' | 'user'

export interface Auth {
  email: string
  password: string
  isRemember?: boolean
}

export interface ConfPass {
  oobCode: string | null
  password: string
}

export interface User {
  user: UserInfo
  role: role
}

export interface UserState {
  loading: boolean
  error: string | null
  success: string | null
  user: User | null
}
