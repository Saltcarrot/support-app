import { UserInfo } from 'firebase/auth'

export interface IAuth {
  email: string
  password: string
  isRemember?: boolean
}

export interface IConfPass {
  oobCode: string | null
  password: string
}

export interface IUserState {
  loading: boolean
  error: string | null
  success: string | null
  user: UserInfo | null
}
