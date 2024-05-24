import { AuthError } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useRegistrationInfo = (
  errorCreate: boolean,
  errorSignIn: boolean,
  errorReset: Error | AuthError | undefined
): [boolean, boolean, boolean] => {
  const [isAccoutExist, setIsAccoutExist] = useState(false)
  const [isUncorrectEmailOrPassword, setIsUncorrectEmailOrPassword] = useState(false)
  const [isEmailCanBeReset, setIsEmailCanBeReset] = useState(false)

  useEffect(() => {
    let errorCreateTimeout: NodeJS.Timeout
    let errorCreateInTimeout: NodeJS.Timeout

    let errorSignInTimeout: NodeJS.Timeout
    let errorSignInInTimeout: NodeJS.Timeout

    let errorResetTimeout: NodeJS.Timeout
    let errorResetInTimeout: NodeJS.Timeout

    if (errorCreate) {
      errorCreateTimeout = setTimeout(() => {
        setIsAccoutExist(errorCreate)
        errorCreateInTimeout = setTimeout(() => {
          setIsAccoutExist(false)
        }, 1500)
      }, 1000)
    }
    if (errorSignIn) {
      errorSignInTimeout = setTimeout(() => {
        setIsUncorrectEmailOrPassword(errorSignIn)
        errorSignInInTimeout = setTimeout(() => {
          setIsUncorrectEmailOrPassword(false)
        }, 1500)
      }, 1000)
    }
    if (errorReset) {
      errorResetTimeout = setTimeout(() => {
        setIsEmailCanBeReset(true)
        errorResetInTimeout = setTimeout(() => {
          setIsEmailCanBeReset(false)
        }, 1500)
      }, 1000)
    }

    return () => {
      clearTimeout(errorCreateTimeout)
      clearTimeout(errorCreateInTimeout)
      clearTimeout(errorSignInTimeout)
      clearTimeout(errorSignInInTimeout)
      clearTimeout(errorResetTimeout)
      clearTimeout(errorResetInTimeout)
    }
  }, [errorCreate, errorSignIn, errorReset])

  return [isAccoutExist, isUncorrectEmailOrPassword, isEmailCanBeReset]
}
