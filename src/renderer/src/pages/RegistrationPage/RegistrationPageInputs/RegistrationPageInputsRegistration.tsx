import Input from '@renderer/components/Input'
import { FC, useContext } from 'react'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import {
  emailErrorMessage,
  passwordErrorMessage,
  registrationErrorMessage
} from '@renderer/utils/constants'
import { useRegistrationInfo } from '@renderer/hooks/useRegistrationInfo'

interface IRegistrationPageInputsRegistration {
  errorCreate: boolean
}

const RegistrationPageInputsRegistration: FC<IRegistrationPageInputsRegistration> = ({
  errorCreate
}) => {
  const {
    email,
    password,
    doublePassword,
    setEmail,
    setPassword,
    setDoublePassword,
    emailError,
    passwordError,
    passwordsEqualsError
  } = useContext(RegistrationContext)

  const isAccoutExist = useRegistrationInfo(errorCreate)

  return (
    <>
      <div className="registration_block">
        {emailError && <HelpWindow message={emailErrorMessage} />}
        {isAccoutExist && !emailError && <HelpWindow message={registrationErrorMessage} />}

        <Input
          type="text"
          value={email}
          setValue={setEmail}
          placeholder="User@gmail.com"
          className={
            !emailError && !isAccoutExist
              ? 'input registration_input'
              : 'input registration_input input--danger'
          }
        />
      </div>

      <div className="registration_block">
        {passwordError && <HelpWindow message={passwordErrorMessage} />}
        {passwordsEqualsError && !passwordError && (
          <HelpWindow message="Пароли должны быть одинаковыми" />
        )}
        {isAccoutExist && !passwordError && !(passwordsEqualsError && !passwordError) && (
          <HelpWindow message={registrationErrorMessage} />
        )}

        <Input
          value={password}
          setValue={setPassword}
          placeholder="●●●●●●●●●●●●●"
          type="password"
          className={
            !passwordError && !passwordsEqualsError && !isAccoutExist
              ? 'input registration_input registration_input--password'
              : 'input registration_input input--danger registration_input--password'
          }
        />
      </div>

      <div className="registration_block">
        {passwordsEqualsError && !passwordError && (
          <HelpWindow message="Пароли должны быть одинаковыми" />
        )}

        <Input
          value={doublePassword}
          setValue={setDoublePassword}
          placeholder="●●●●●●●●●●●●●"
          type="password"
          className={
            !passwordsEqualsError
              ? 'input registration_input registration_input--password'
              : 'input registration_input input--danger registration_input--password'
          }
        />
      </div>
    </>
  )
}

export default RegistrationPageInputsRegistration
