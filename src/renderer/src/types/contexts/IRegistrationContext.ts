export interface IRegistrationContext {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>

  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>

  doublePassword: string
  setDoublePassword: React.Dispatch<React.SetStateAction<string>>

  emailError: boolean
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>

  passwordError: boolean
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>

  passwordsEqualsError: boolean
  setPasswordsEqualsError: React.Dispatch<React.SetStateAction<boolean>>
}
