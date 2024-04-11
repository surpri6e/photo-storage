import './RegistrationPageButtons.scss'
import { FC, useContext } from 'react'
import RegistrationPagesButtonsSpan from '../RegistrationPagesButtonsSpan/RegistrationPagesButtonsSpan'
import { createNewAccount, logInAccount } from '@renderer/api/registrationApi'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { UserCredential } from 'firebase/auth'

interface IRegistrationPageButtons {
  isRegistration: boolean
  setIsRegistration: React.Dispatch<React.SetStateAction<boolean>>

  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>

  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({
  isRegistration,
  setIsRegistration,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}) => {
  const context = useContext(RegistrationContext)

  return (
    <div className="registration_buttons">
      {isRegistration && (
        <>
          <button
            className="registration_button"
            onClick={() => createNewAccount(context, createUserWithEmailAndPassword)}
          >
            Зарегистрироваться
          </button>
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
          <button
            className="registration_button"
            onClick={() => logInAccount(context, signInWithEmailAndPassword)}
          >
            Войти
          </button>
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
