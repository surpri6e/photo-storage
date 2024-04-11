import { useState } from 'react'
import './RegistrationPage.scss'
import RegistrationPageButtons from './RegistrationPageButtons/RegistrationPageButtons'
import RegistrationPageHeader from './RegistrationPageHeader/RegistrationPageHeader'
import RegistrationPageInputs from './RegistrationPageInputs/RegistrationPageInputs'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'

const RegistrationPage = (): JSX.Element => {
  const [isRegistration, setIsRegistration] = useState(true)

  const [createUserWithEmailAndPassword, , errorCreate] = useCreateUserWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword, , errorSignIn] = useSignInWithEmailAndPassword(auth)

  return (
    <div className="registration">
      <div className="registration_body">
        <RegistrationPageHeader isRegistration={isRegistration} />
        <RegistrationPageInputs
          isRegistration={isRegistration}
          isAccoutExist={errorCreate}
          isUncorrectEmailOrPassword={errorSignIn}
        />
        <RegistrationPageButtons
          isRegistration={isRegistration}
          setIsRegistration={setIsRegistration}
          createUserWithEmailAndPassword={createUserWithEmailAndPassword}
          signInWithEmailAndPassword={signInWithEmailAndPassword}
        />
      </div>
    </div>
  )
}

export default RegistrationPage
