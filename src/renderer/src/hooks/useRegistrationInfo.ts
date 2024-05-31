import { errorDoubleTimeout } from '@renderer/utils/errorsTimeout'
import { AuthError } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useRegistrationInfo = (error: boolean | Error | AuthError | undefined): boolean => {
  const [newError, setNewError] = useState(false)

  useEffect(() => {
    if (error) {
      errorDoubleTimeout(setNewError, 800)
    }
  }, [error])

  return newError
}
