import { useState } from 'react'
import './RegistrationPage.scss'
import RegistrationPageButtons from './RegistrationPageButtons/RegistrationPageButtons'
import RegistrationPageHeader from './RegistrationPageHeader/RegistrationPageHeader'
import RegistrationPageInputs from './RegistrationPageInputs/RegistrationPageInputs'
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'
import { useRegistrationInfo } from '@renderer/hooks/useRegistrationInfo'

const RegistrationPage = (): JSX.Element => {
  const [registrationType, setRegistrationType] = useState<TTypeOfRegistration>('registration')

  const [createUserWithEmailAndPassword, , errorCreate] = useCreateUserWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword, , errorSignIn] = useSignInWithEmailAndPassword(auth)
  const [sendPasswordResetEmail, , errorReset] = useSendPasswordResetEmail(auth)

  const [isAccoutExist, isUncorrectEmailOrPassword, isEmailCanBeReset] = useRegistrationInfo(
    errorCreate,
    errorSignIn,
    errorReset
  )

  return (
    <div className="registration">
      <div className="registration_body">
        <RegistrationPageHeader registrationType={registrationType} />
        <RegistrationPageInputs
          registrationType={registrationType}
          isAccoutExist={isAccoutExist}
          isUncorrectEmailOrPassword={isUncorrectEmailOrPassword}
          isEmailCanBeReset={isEmailCanBeReset}
        />
        <RegistrationPageButtons
          registrationType={registrationType}
          setRegistrationType={setRegistrationType}
          createUserWithEmailAndPassword={createUserWithEmailAndPassword}
          signInWithEmailAndPassword={signInWithEmailAndPassword}
          sendPasswordResetEmail={sendPasswordResetEmail}
        />
      </div>
    </div>
  )
}

export default RegistrationPage
