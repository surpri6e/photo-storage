import { User } from 'firebase/auth'

export interface IAuthContext {
  user: User | null | undefined
  loading: boolean
  error: Error | undefined
}
