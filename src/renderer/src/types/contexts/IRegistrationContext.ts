export interface IRegistrationContext {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  doublePassword: string
  setDoublePassword: React.Dispatch<React.SetStateAction<string>>
}
