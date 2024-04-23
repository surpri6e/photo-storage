import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import {
  emailErrorMessage,
  logInErrorMessage,
  passwordErrorMessage
} from '@renderer/utils/constants'
import { FC, useContext } from 'react'

interface IRegistrationPageInputsLogIn {
  isUncorrectEmailOrPassword: boolean
}

const RegistrationPageInputsLogIn: FC<IRegistrationPageInputsLogIn> = ({
  isUncorrectEmailOrPassword
}) => {
  const { email, password, setEmail, setPassword, emailError, passwordError } =
    useContext(RegistrationContext)

  return (
    <>
      <div className="registration_block">
        {emailError && <HelpWindow message={emailErrorMessage} />}
        {isUncorrectEmailOrPassword && <HelpWindow message={logInErrorMessage} />}
        <Input
          value={email}
          setValue={setEmail}
          placeholder="User@gmail.com"
          className={
            !emailError && !isUncorrectEmailOrPassword
              ? 'input registration_input'
              : 'input registration_input input--danger'
          }
        />
      </div>
      <div className="registration_block">
        {passwordError && <HelpWindow message={passwordErrorMessage} />}
        {isUncorrectEmailOrPassword && <HelpWindow message={logInErrorMessage} />}
        <Input
          value={password}
          setValue={setPassword}
          placeholder="●●●●●●●●●●●●●"
          type="password"
          className={
            !passwordError && !isUncorrectEmailOrPassword
              ? 'input registration_input registration_input--password'
              : 'input registration_input input--danger registration_input--password'
          }
        />
      </div>
    </>
  )
}

export default RegistrationPageInputsLogIn
