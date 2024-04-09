import './RegistrationPage.scss'
import RegistrationPageButtons from './RegistrationPageButtons/RegistrationPageButtons'
import RegistrationPageHeader from './RegistrationPageHeader/RegistrationPageHeader'
import RegistrationPageInputs from './RegistrationPageInputs/RegistrationPageInputs'

const RegistrationPage = (): JSX.Element => {
  return (
    <div className="registration">
      <div className="registration_body">
        <RegistrationPageHeader />
        <RegistrationPageInputs />
        <RegistrationPageButtons />
      </div>
    </div>
  )
}

export default RegistrationPage
