import { FC, useContext } from 'react'
import './RegistrationPageInputs.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import RegistrationPageInputsRegistration from '../RegistrationPageInputsRegistration'
import RegistrationPageInputsLogIn from '../RegistrationPageInputsLogIn'

interface IRegistrationPageInputs {
  isRegistration: boolean
}

const RegistrationPageInputs: FC<IRegistrationPageInputs> = ({ isRegistration }) => {
  const { email } = useContext(RegistrationContext)
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)

  return (
    <div className="registration_inputs">
      {isRegistration && <RegistrationPageInputsRegistration />}
      {!isRegistration && <RegistrationPageInputsLogIn />}

      <div className="registration_forgotten" onClick={() => sendPasswordResetEmail(email)}>
        Забыли пароль?
      </div>
    </div>
  )
}

export default RegistrationPageInputs
