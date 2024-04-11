import { useContext } from 'react'
import './RegistrationPageInputs.scss'
import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'

const RegistrationPageInputs = (): JSX.Element => {
  const { email, password, doublePassword, setEmail, setPassword, setDoublePassword } =
    useContext(RegistrationContext)

  return (
    <div className="registration_inputs">
      <Input
        value={email}
        setValue={setEmail}
        placeholder="user@gmail.com"
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

      <div className="registration_forgotten">Забыли пароль?</div>
    </div>
  )
}

export default RegistrationPageInputs
