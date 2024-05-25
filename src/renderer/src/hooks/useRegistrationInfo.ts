import { AuthError } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useRegistrationInfo = (error: boolean | Error | AuthError | undefined): boolean => {
  const [newError, setNewError] = useState(false)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setNewError(true)
      }, 1000)

      setTimeout(() => {
        setNewError(false)
      }, 2500)
    }
  }, [error])

  return newError
}
