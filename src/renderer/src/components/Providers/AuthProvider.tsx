import { AuthContext } from '@renderer/context/AuthContext'
import { auth } from '@renderer/main'
import React, { FC } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

interface IAuthProvider {
  children: React.ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)

  return <AuthContext.Provider value={{ user, loading, error }}>{children}</AuthContext.Provider>
}

export default AuthProvider
