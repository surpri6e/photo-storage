import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import Input from '@renderer/components/Input'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { emailErrorMessage } from '@renderer/utils/constants'
import { useContext } from 'react'

const RegistrationPageInputsForgotten = (): JSX.Element => {
  const { email, setEmail, emailError } = useContext(RegistrationContext)

  return (
    <div className="registration_block">
      {emailError && <HelpWindow message={emailErrorMessage} />}
      <Input
        value={email}
        setValue={setEmail}
        placeholder="User@gmail.com"
        className={
          !emailError ? 'input registration_input' : 'input registration_input input--danger'
        }
      />
    </div>
  )
}

export default RegistrationPageInputsForgotten
