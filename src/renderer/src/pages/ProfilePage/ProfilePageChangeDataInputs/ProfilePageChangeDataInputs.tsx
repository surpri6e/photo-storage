import UserInfoApi from '@renderer/api/userInfoApi'
import Input from '@renderer/components/Input'
import { auth } from '@renderer/main'
import { TChangeData } from '@renderer/types/TChangeData'
import { FC, useEffect, useState } from 'react'
import { useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth'
import './ProfilePageChangeDataInputs.scss'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import { emailErrorMessage, passwordErrorMessage } from '@renderer/utils/constants'

interface IProfilePageChangeDataInputs {
  variable: TChangeData
  setVariable: React.Dispatch<React.SetStateAction<TChangeData>>
}

const ProfilePageChangeDataInputs: FC<IProfilePageChangeDataInputs> = ({
  variable,
  setVariable
}) => {
  const [updateEmail, errorEmail] = useUpdateEmail(auth)
  const [updatePassword, errorPassword] = useUpdatePassword(auth)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [isEmailCanBeChanged, setIsEmailCanBeChanged] = useState(false)
  const [isPasswordCanBeChanged, setIsPasswordCanBeChanged] = useState(false)

  useEffect(() => {
    let firstTimeout: NodeJS.Timeout
    let secondTimeout: NodeJS.Timeout

    if (errorEmail) {
      firstTimeout = setTimeout(() => setIsEmailCanBeChanged(errorEmail), 800)
      setTimeout(() => {
        setIsEmailCanBeChanged(false)
      }, 1500)
    }
    if (errorPassword) {
      secondTimeout = setTimeout(() => setIsPasswordCanBeChanged(errorPassword), 800)
      setTimeout(() => {
        setIsPasswordCanBeChanged(false)
      }, 1500)
    }

    return () => {
      clearTimeout(firstTimeout)
      clearTimeout(secondTimeout)
    }
  }, [errorEmail, errorPassword])

  return (
    <>
      {variable === 'email' && (
        <>
          <div className="profile_inputs">
            {emailError && <HelpWindow message={emailErrorMessage} />}
            {isEmailCanBeChanged && !emailError && (
              <HelpWindow message="Нельзя сменить на данную почту" />
            )}

            <Input
              className={
                !emailError && !isEmailCanBeChanged
                  ? 'input profile_input'
                  : 'input profile_input input--danger'
              }
              placeholder="Введите новую почту"
              type="text"
              setValue={setEmail}
              value={email}
            />
          </div>

          <button
            className="profile_button profile_button--green"
            onClick={async () => {
              const result = await UserInfoApi.updateUserEmail({
                value: email,
                setValue: setEmail,
                setValueError: setEmailError,
                cbfunction: updateEmail
              })
              if (result) setVariable('closed')
            }}
          >
            Сменить
          </button>
        </>
      )}

      {variable === 'password' && (
        <>
          <div className="profile_inputs">
            {passwordError && <HelpWindow message={passwordErrorMessage} />}
            {isPasswordCanBeChanged && !passwordError && (
              <HelpWindow message="Нельзя сменить на данный пароль" />
            )}

            <Input
              className={
                !passwordError && !isPasswordCanBeChanged
                  ? 'input profile_input'
                  : 'input profile_input input--danger'
              }
              placeholder="Введите новый пароль"
              type="password"
              setValue={setPassword}
              value={password}
            />
          </div>

          <button
            className="profile_button profile_button--green"
            onClick={async () => {
              const result = await UserInfoApi.updateUserPassword({
                value: password,
                setValue: setPassword,
                setValueError: setPasswordError,
                cbfunction: updatePassword
              })
              if (result) setVariable('closed')
            }}
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
