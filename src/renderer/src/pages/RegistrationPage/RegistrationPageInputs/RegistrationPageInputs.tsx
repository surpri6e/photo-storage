import { FC, useContext } from 'react'
import './RegistrationPageInputs.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import RegistrationPageInputsRegistration from './RegistrationPageInputsRegistration'
import RegistrationPageInputsLogIn from './RegistrationPageInputsLogIn'

interface IRegistrationPageInputs {
  isRegistration: boolean
  isAccoutExist: boolean
  isUncorrectEmailOrPassword: boolean
}

const RegistrationPageInputs: FC<IRegistrationPageInputs> = ({
  isRegistration,
  isAccoutExist,
  isUncorrectEmailOrPassword
}) => {
  const { email } = useContext(RegistrationContext)
  //const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

  return (
    <div className="registration_inputs">
      {isRegistration && <RegistrationPageInputsRegistration isAccoutExist={isAccoutExist} />}
      {!isRegistration && (
        <RegistrationPageInputsLogIn isUncorrectEmailOrPassword={isUncorrectEmailOrPassword} />
      )}

      <div className="registration_forgotten" onClick={() => sendPasswordResetEmail(email)}>
        Забыли пароль?
      </div>
    </div>
  )
}

export default RegistrationPageInputs
