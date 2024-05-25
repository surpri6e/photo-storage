import { FC } from 'react'
import './RegistrationPageInputs.scss'
import RegistrationPageInputsRegistration from './RegistrationPageInputsRegistration'
import RegistrationPageInputsLogIn from './RegistrationPageInputsLogIn'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'
import RegistrationPageInputsForgotten from './RegistrationPageInputsForgotten'

interface IRegistrationPageInputs {
  registrationType: TTypeOfRegistration
  errorCreate: boolean
  errorSignIn: boolean
}

const RegistrationPageInputs: FC<IRegistrationPageInputs> = ({
  registrationType,
  errorCreate,
  errorSignIn
}) => {
  return (
    <div className="registration_inputs">
      {registrationType === 'registration' && (
        <RegistrationPageInputsRegistration errorCreate={errorCreate} />
      )}
      {registrationType === 'logIn' && <RegistrationPageInputsLogIn errorSignIn={errorSignIn} />}
      {registrationType === 'forgotten' && <RegistrationPageInputsForgotten />}
    </div>
  )
}

export default RegistrationPageInputs
