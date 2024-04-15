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
    if (errorCreate) {
      setIsAccoutExist(errorCreate)
      setTimeout(() => {
        setIsAccoutExist(false)
      }, 1500)
    }
    if (errorSignIn) {
      setIsUncorrectEmailOrPassword(errorSignIn)
      setTimeout(() => {
        setIsUncorrectEmailOrPassword(false)
      }, 1500)
    }
    if (errorReset) {
      setIsEmailCanBeReset(true)
      setTimeout(() => {
        setIsEmailCanBeReset(false)
      }, 1500)
    }
  }, [errorCreate, errorSignIn, errorReset])

  return [isAccoutExist, isUncorrectEmailOrPassword, isEmailCanBeReset]
}
