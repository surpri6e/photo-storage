import { IAuthContext } from '@renderer/types/contexts/IAuthContext'
import { createContext } from 'react'

export const AuthContext = createContext({} as IAuthContext)
