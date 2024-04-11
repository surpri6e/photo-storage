import { FC } from 'react'
import './RegistrationPageHeader.scss'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'

interface IRegistrationPageHeader {
  registrationType: TTypeOfRegistration
}

const RegistrationPageHeader: FC<IRegistrationPageHeader> = ({ registrationType }) => {
  return (
    <div className="registration_header">
      <div className="registration_title">
        {registrationType === 'registration'
          ? 'Зарегистрируйся'
          : registrationType === 'logIn'
            ? 'Войти'
            : 'Восстановите пароль'}
      </div>
      <div className="registration_subtitle">для удобного хранения</div>
    </div>
  )
}

export default RegistrationPageHeader
