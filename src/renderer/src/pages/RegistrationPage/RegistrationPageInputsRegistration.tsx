import Input from '@renderer/components/Input'
import { useContext } from 'react'
import { RegistrationContext } from '@renderer/context/RegistrationContext'

const RegistrationPageInputsRegistration = (): JSX.Element => {
  const { email, password, doublePassword, setEmail, setPassword, setDoublePassword } =
    useContext(RegistrationContext)

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
      <Input
        value={doublePassword}
        setValue={setDoublePassword}
        placeholder="●●●●●●●●●●●●●"
        type="password"
        className="input registration_input registration_input--password"
      />
    </>
  )
}

export default RegistrationPageInputsRegistration
