import './RegistrationPageButtons.scss'
import google from '../../../images/google.png'

const RegistrationPageButtons = (): JSX.Element => {
  return (
    <div className="registration_buttons">
      <button className="registration_button">Зарегистрироваться</button>
      <div className="registration_google">
        <div>
          <img src={google} alt="Гугл" />
        </div>
      </div>
      <div className="registration_accout">
        Уже есть аккаунт? <span>Войти</span>
      </div>
    </div>
  )
}

export default RegistrationPageButtons
