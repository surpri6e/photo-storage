import { TChangeData } from '@renderer/types/TChangeData'
import { FC, useState } from 'react'
import './ProfilePageChangeDataInputs.scss'
import ProfilePageChangeDataInputsEmail from './ProfilePageChangeDataInputsEmail'
import ProfilePageChangeDataInputsPassword from './ProfilePageChangeDataInputsPassword'

export interface IProfilePageChangeDataInputs {
  variable: TChangeData
  setVariable: React.Dispatch<React.SetStateAction<TChangeData>>
}

const ProfilePageChangeDataInputs: FC<IProfilePageChangeDataInputs> = ({
  variable,
  setVariable
}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  return (
    <>
      {variable === 'email' && (
        <ProfilePageChangeDataInputsEmail
          email={email}
          emailError={emailError}
          setEmail={setEmail}
          setEmailError={setEmailError}
          setVariable={setVariable}
          variable={variable}
        />
      )}

      {variable === 'password' && (
        <ProfilePageChangeDataInputsPassword
          password={password}
          passwordError={passwordError}
          setPassword={setPassword}
          setPasswordError={setEmailError}
          setVariable={setVariable}
          variable={variable}
        />
      )}

      <button
        className="profile_button profile_button--wrong"
        onClick={() => {
          setVariable('closed')
          setEmail('')
          setEmailError(false)
          setPassword('')
          setPasswordError(false)
        }}
      >
        X
      </button>
    </>
  )
}

export default ProfilePageChangeDataInputs
