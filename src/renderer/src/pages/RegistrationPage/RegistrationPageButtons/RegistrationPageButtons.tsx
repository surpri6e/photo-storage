import './RegistrationPageButtons.scss'
import google from '../../../images/google.png'
import { FC } from 'react'
import { useCustomLogin } from '@renderer/hooks/useCustomLogin'

interface IRegistrationPageButtons {
  email: string
  password: string
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({ email, password }) => {
  const [login, error] = useCustomLogin(email, password)

  console.log(error)

  return (
    <div className="registration_buttons">
      <button className="registration_button">Зарегистрироваться</button>
      <div className="registration_google">
        <div>
          <div
            onClick={() => {
              login()
            }}
          >
            <img src={google} alt="Гугл" />
          </div>
        </div>
      </div>
      <div className="registration_accout">
        Уже есть аккаунт? <span>Войти</span>
      </div>
    </div>
  )
}

export default RegistrationPageButtons
