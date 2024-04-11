import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { FC, useContext } from 'react'

interface IRegistrationPageInputsLogIn {
  isUncorrectEmailOrPassword: boolean
}

const RegistrationPageInputsLogIn: FC<IRegistrationPageInputsLogIn> = () => {
  const { email, password, setEmail, setPassword } = useContext(RegistrationContext)

  return (
    <>
      <div className="registration_block">
        <Input
          value={email}
          setValue={setEmail}
          placeholder="User@gmail.com"
          className="input registration_input"
        />
      </div>
      <div className="registration_block">
        <Input
          value={password}
          setValue={setPassword}
          placeholder="●●●●●●●●●●●●●"
          type="password"
          className="input registration_input registration_input--password"
        />
      </div>
    </>
  )
}

export default RegistrationPageInputsLogIn
