import './RegistrationPageButtons.scss'
import google from '../../../images/google.png'
import { FC } from 'react'

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
//import { useCustomLogin } from '@renderer/hooks/useCustomLogin'

interface IRegistrationPageButtons {
  email: string
  password: string
}

const RegistrationPageButtons: FC<IRegistrationPageButtons> = ({ email, password }) => {
  //const [login, error] = useCustomLogin(email, password)

  //console.log(error)

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const [sendEmailVerification] = useSendEmailVerification(auth)
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className="registration_buttons">
      <button className="registration_button" onClick={() => sendEmailVerification()}>
        Зарегистрироваться
      </button>
      <div className="registration_google">
        <div>
          <div
            onClick={() => {
              createUserWithEmailAndPassword(email, password)
            }}
          >
            <img src={google} alt="Гугл" />
          </div>
        </div>
      </div>
      <div className="registration_accout">
        Уже есть аккаунт?{' '}
        <span onClick={() => signInWithEmailAndPassword(email, password)}>Войти</span>
      </div>
    </div>
  )
}

export default RegistrationPageButtons
