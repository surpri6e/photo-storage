import './RegistrationPageButtons.scss'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import { FC } from 'react'
import RegistrationPagesButtonsSpan from '../RegistrationPagesButtonsSpan/RegistrationPagesButtonsSpan'

interface IRegistrationPageButtons {
  isRegistration: boolean
  setIsRegistration: React.Dispatch<React.SetStateAction<boolean>>
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({
  isRegistration,
  setIsRegistration
}) => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  return (
    <div className="registration_buttons">
      {isRegistration && (
        <>
          <button className="registration_button">Зарегистрироваться</button>
          <div className="registration_accout">
            Уже есть аккаунт?{' '}
            <RegistrationPagesButtonsSpan setIsRegistration={setIsRegistration}>
              Войти
            </RegistrationPagesButtonsSpan>
          </div>
        </>
      )}
      {!isRegistration && (
        <>
          <button className="registration_button">Войти</button>
          <div className="registration_accout">
            Еще нет аккаунта?{' '}
            <RegistrationPagesButtonsSpan setIsRegistration={setIsRegistration}>
              Создать
            </RegistrationPagesButtonsSpan>
          </div>
        </>
      )}
    </div>
  )
}

export default RegistrationPageButtons
