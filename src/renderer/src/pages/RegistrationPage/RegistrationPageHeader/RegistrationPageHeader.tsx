import { FC } from 'react'
import './RegistrationPageHeader.scss'

interface IRegistrationPageHeader {
  isRegistration: boolean
}

const RegistrationPageHeader: FC<IRegistrationPageHeader> = ({ isRegistration }) => {
  return (
    <div className="registration_header">
      <div className="registration_title">{isRegistration ? 'Зарегистрируйся' : 'Войти'}</div>
      <div className="registration_subtitle">для удобного хранения</div>
    </div>
  )
}

export default RegistrationPageHeader
