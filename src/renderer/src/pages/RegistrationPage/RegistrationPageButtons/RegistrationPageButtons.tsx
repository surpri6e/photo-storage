import './RegistrationPageButtons.scss'
import google from '../../../images/google.png'

import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import { FC, useContext } from 'react'
import { RegistrationContext } from '@renderer/context/RegistrationContext'

interface IRegistrationPageButtons {
  isRegistration: boolean
  setIsRegistration: React.Dispatch<React.SetStateAction<boolean>>
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({
  isRegistration,
  setIsRegistration
}) => {
  const { email, password } = useContext(RegistrationContext)
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const [sendEmailVerification] = useSendEmailVerification(auth)
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  return (
    <div className="registration_buttons">
      {isRegistration && (
        <>
          <button className="registration_button">Зарегистрироваться</button>
          <div className="registration_accout">
            Уже есть аккаунт? <span onClick={() => setIsRegistration((prev) => !prev)}>Войти</span>
          </div>
        </>
      )}
      {!isRegistration && (
        <>
          <button className="registration_button">Войти</button>
          <div className="registration_accout">
            Еще нет аккаунта?{' '}
            <span onClick={() => setIsRegistration((prev) => !prev)}>Создать</span>
          </div>
        </>
      )}
    </div>
  )
}

export default RegistrationPageButtons
