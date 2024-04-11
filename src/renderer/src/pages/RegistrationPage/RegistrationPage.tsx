import { useState } from 'react'
import './RegistrationPage.scss'
import RegistrationPageButtons from './RegistrationPageButtons/RegistrationPageButtons'
import RegistrationPageHeader from './RegistrationPageHeader/RegistrationPageHeader'
import RegistrationPageInputs from './RegistrationPageInputs/RegistrationPageInputs'

const RegistrationPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState(true)

  return (
    <div className="registration">
      <div className="registration_body">
        <RegistrationPageHeader isRegistration={isRegistration} />
        <RegistrationPageInputs isRegistration={isRegistration} />
        <RegistrationPageButtons
          isRegistration={isRegistration}
          setIsRegistration={setIsRegistration}
        />
      </div>
    </div>
  )
}

export default RegistrationPage
