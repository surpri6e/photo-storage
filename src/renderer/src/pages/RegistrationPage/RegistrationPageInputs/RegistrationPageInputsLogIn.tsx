import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { useRegistrationInfo } from '@renderer/hooks/useRegistrationInfo'
import {
  emailErrorMessage,
  logInErrorMessage,
  passwordErrorMessage
} from '@renderer/utils/constants'
import { FC, useContext } from 'react'

interface IRegistrationPageInputsLogIn {
  errorSignIn: boolean
}

const RegistrationPageInputsLogIn: FC<IRegistrationPageInputsLogIn> = ({ errorSignIn }) => {
  const { email, password, setEmail, setPassword, emailError, passwordError } =
    useContext(RegistrationContext)

  const isUncorrectEmailOrPassword = useRegistrationInfo(errorSignIn)

  return (
    <>
      <div className="registration_block">
        {emailError && <HelpWindow message={emailErrorMessage} />}
        {isUncorrectEmailOrPassword && !emailError && <HelpWindow message={logInErrorMessage} />}

        <Input
          type="text"
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
        {isUncorrectEmailOrPassword && !passwordError && <HelpWindow message={logInErrorMessage} />}

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
