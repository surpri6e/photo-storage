import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { useContext } from 'react'

const RegistrationPageInputsLogIn = (): JSX.Element => {
  const { email, password, setEmail, setPassword } = useContext(RegistrationContext)

  return (
    <>
      <Input
        value={email}
        setValue={setEmail}
        placeholder="User@gmail.com"
        className="input registration_input"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="●●●●●●●●●●●●●"
        type="password"
        className="input registration_input registration_input--password"
      />
    </>
  )
}

export default RegistrationPageInputsLogIn
