import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { FC, useContext } from 'react'

interface IRegistrationPageInputsForgotten {
  isEmailCanBeReset: boolean
}

const RegistrationPageInputsForgotten: FC<IRegistrationPageInputsForgotten> = ({
  isEmailCanBeReset
}) => {
  const { email, setEmail, emailError } = useContext(RegistrationContext)
  return (
    <div className="registration_block">
      {emailError && <HelpWindow message="Неправильная почта" />}
      {isEmailCanBeReset && <HelpWindow message="Почты не существует" />}
      <Input
        value={email}
        setValue={setEmail}
        placeholder="User@gmail.com"
        className={
          !emailError && !isEmailCanBeReset
            ? 'input registration_input'
            : 'input registration_input registration_input--danger'
        }
      />
    </div>
  )
}

export default RegistrationPageInputsForgotten