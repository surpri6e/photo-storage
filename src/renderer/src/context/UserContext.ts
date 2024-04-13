import { IUserContext } from '@renderer/types/contexts/IUserContext'
import { createContext } from 'react'

export const UserContext = createContext({} as IUserContext)
