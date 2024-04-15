import { updateUserEmail, updateUserPassword } from '@renderer/api/userDataApi'
import Input from '@renderer/components/Input'
import { auth } from '@renderer/main'
import { TChangeData } from '@renderer/types/TChangeData'
import { FC, useState } from 'react'
import { useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth'

interface IProfilePageChangeDataInputs {
  variable: TChangeData
  setVariable: React.Dispatch<React.SetStateAction<TChangeData>>
}

const ProfilePageChangeDataInputs: FC<IProfilePageChangeDataInputs> = ({
  variable,
  setVariable
}) => {
  const [updateEmail, , errorEmail] = useUpdateEmail(auth)
  const [updatePassword, , errorPassword] = useUpdatePassword(auth)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  return (
    <>
      {variable === 'email' && (
        <>
          <Input
            className="input profile_input"
            placeholder="Введите новую почту"
            type="text"
            setValue={setEmail}
            value={email}
          />
          <button
            className="profile_button profile_button--green"
            onClick={() => updateUserEmail(email, setEmail, setEmailError, updateEmail)}
          >
            Сменить
          </button>
        </>
      )}

      {variable === 'password' && (
        <>
          <Input
            className="input profile_input"
            placeholder="Введите новый пароль"
            type="password"
            setValue={setPassword}
            value={password}
          />
          <button
            className="profile_button profile_button--green"
            onClick={() =>
              updateUserPassword(password, setPassword, setPasswordError, updatePassword)
            }
          >
            Сменить
          </button>
        </>
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
