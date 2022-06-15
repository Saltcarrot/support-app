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

export interface UserData {
  displayName: string | null
  avatar: File | null
  password: string | null
}

export interface NewUserData {
  userData: User
  message: string
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
