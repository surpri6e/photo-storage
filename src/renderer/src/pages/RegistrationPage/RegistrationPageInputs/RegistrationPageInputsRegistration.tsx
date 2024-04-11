import Input from '@renderer/components/Input'
import { FC, useContext } from 'react'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import { registrationErrorMessage } from '@renderer/utils/constants'

interface IRegistrationPageInputsRegistration {
  isAccoutExist: boolean
}

const RegistrationPageInputsRegistration: FC<IRegistrationPageInputsRegistration> = ({
  isAccoutExist
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

  return (
    <>
      <div className="registration_block">
        {emailError && <HelpWindow message="Неправильная почта" />}
        {isAccoutExist && <HelpWindow message={registrationErrorMessage} />}
        <Input
          value={email}
          setValue={setEmail}
          placeholder="User@gmail.com"
          className={
            !emailError && !isAccoutExist
              ? 'input registration_input'
              : 'input registration_input registration_input--danger'
          }
        />
      </div>
      <div className="registration_block">
        {passwordError && <HelpWindow message="Короткий пароль" />}
        {passwordsEqualsError && !passwordError && (
          <HelpWindow message="Пароли должны быть одинаковыми" />
        )}
        {isAccoutExist && <HelpWindow message={registrationErrorMessage} />}
        <Input
          value={password}
          setValue={setPassword}
          placeholder="●●●●●●●●●●●●●"
          type="password"
          className={
            !passwordError && !passwordsEqualsError && !isAccoutExist
              ? 'input registration_input registration_input--password'
              : 'input registration_input registration_input--danger registration_input--password'
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
              : 'input registration_input registration_input--danger registration_input--password'
          }
        />
      </div>
    </>
  )
}

export default RegistrationPageInputsRegistration
