import { useState } from 'react'
import './RegistrationPage.scss'
import RegistrationPageButtons from './RegistrationPageButtons/RegistrationPageButtons'
import RegistrationPageHeader from './RegistrationPageHeader/RegistrationPageHeader'
import RegistrationPageInputs from './RegistrationPageInputs/RegistrationPageInputs'

const RegistrationPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="registration">
      <div className="registration_body">
        <RegistrationPageHeader />
        <RegistrationPageInputs
          email={email}
          password={password}
          setEMail={setEmail}
          setPassword={setPassword}
        />
        <RegistrationPageButtons email={email} password={password} />
      </div>
    </div>
  )
}

export default RegistrationPage
