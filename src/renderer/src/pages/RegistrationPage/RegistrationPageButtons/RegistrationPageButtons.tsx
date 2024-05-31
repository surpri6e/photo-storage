import './RegistrationPageButtons.scss'
import { FC, useContext } from 'react'
import RegistrationPagesButtonsSpan from '../RegistrationPagesButtonsSpan/RegistrationPagesButtonsSpan'
import RegistartionApi from '@renderer/api/registrationApi'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { ActionCodeSettings, UserCredential } from 'firebase/auth'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'

interface IRegistrationPageButtons {
  registrationType: TTypeOfRegistration
  setRegistrationType: React.Dispatch<React.SetStateAction<TTypeOfRegistration>>

  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>

  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>

  sendPasswordResetEmail: (
    email: string,
    actionCodeSettings?: ActionCodeSettings | undefined
  ) => Promise<boolean>
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({
  registrationType,
  setRegistrationType,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
}) => {
  const context = useContext(RegistrationContext)

  return (
    <div className="registration_buttons">
      {registrationType !== 'forgotten' && (
        <div className="registration_forgotten" onClick={() => setRegistrationType('forgotten')}>
          Забыли пароль?
        </div>
      )}

      {registrationType === 'registration' && (
        <>
          <button
            className="registration_button"
            onClick={async () =>
              await RegistartionApi.createNewAccount(context, createUserWithEmailAndPassword)
            }
          >
            Зарегистрироваться
          </button>
          <div className="registration_accout">
            Уже есть аккаунт?{' '}
            <RegistrationPagesButtonsSpan setRegistrationType={setRegistrationType}>
              Войти
            </RegistrationPagesButtonsSpan>
          </div>
        </>
      )}

      {registrationType === 'logIn' && (
        <>
          <button
            className="registration_button"
            onClick={async () =>
              await RegistartionApi.logInAccount(context, signInWithEmailAndPassword)
            }
          >
            Войти
          </button>
          <div className="registration_accout">
            Еще нет аккаунта?{' '}
            <RegistrationPagesButtonsSpan setRegistrationType={setRegistrationType}>
              Создать
            </RegistrationPagesButtonsSpan>
          </div>
        </>
      )}

      {registrationType === 'forgotten' && (
        <>
          <button
            className="registration_button"
            onClick={async () => {
              const result = await RegistartionApi.resetPassword(context, sendPasswordResetEmail)

              if (result) {
                setRegistrationType('registration')
              }
            }}
          >
            Восстановить
          </button>
          <div className="registration_accout">
            Еще нет аккаунта?{' '}
            <RegistrationPagesButtonsSpan setRegistrationType={setRegistrationType}>
              Создать
            </RegistrationPagesButtonsSpan>
          </div>
        </>
      )}
    </div>
  )
}

export default RegistrationPageButtons
