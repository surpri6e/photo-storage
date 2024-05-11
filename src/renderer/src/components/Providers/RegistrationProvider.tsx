import { RegistrationContext } from '@renderer/context/RegistrationContext'
import React, { FC, useState } from 'react'

interface IRegistrationProvider {
  children: React.ReactNode
}

const RegistrationProvider: FC<IRegistrationProvider> = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [doublePassword, setDoublePassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordsEqualsError, setPasswordsEqualsError] = useState(false)

  return (
    <RegistrationContext.Provider
      value={{
        email,
        password,
        doublePassword,
        setEmail,
        setPassword,
        setDoublePassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        passwordsEqualsError,
        setPasswordsEqualsError
      }}
    >
      {children}
    </RegistrationContext.Provider>
  )
}

export default RegistrationProvider
