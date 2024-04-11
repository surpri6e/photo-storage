import { FC } from 'react'
import './RegistrationPageInputs.scss'
import RegistrationPageInputsRegistration from './RegistrationPageInputsRegistration'
import RegistrationPageInputsLogIn from './RegistrationPageInputsLogIn'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'
import RegistrationPageInputsForgotten from './RegistrationPageInputsForgotten'

interface IRegistrationPageInputs {
  registrationType: TTypeOfRegistration
  isAccoutExist: boolean
  isUncorrectEmailOrPassword: boolean
  isEmailCanBeReset: boolean
}

const RegistrationPageInputs: FC<IRegistrationPageInputs> = ({
  registrationType,
  isAccoutExist,
  isUncorrectEmailOrPassword,
  isEmailCanBeReset
}) => {
  return (
    <div className="registration_inputs">
      {registrationType === 'registration' && (
        <RegistrationPageInputsRegistration isAccoutExist={isAccoutExist} />
      )}
      {registrationType === 'logIn' && (
        <RegistrationPageInputsLogIn isUncorrectEmailOrPassword={isUncorrectEmailOrPassword} />
      )}
      {registrationType === 'forgotten' && (
        <RegistrationPageInputsForgotten isEmailCanBeReset={isEmailCanBeReset} />
      )}
    </div>
  )
}

export default RegistrationPageInputs
