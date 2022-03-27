import { UserInfo } from 'firebase/auth'

export interface IAuth {
  email: string
  password: string
}

export interface IUserState {
  loading: boolean
  error: string | null
  user: UserInfo | null
}
