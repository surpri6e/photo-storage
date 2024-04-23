import { UserInfoApi } from '@renderer/api/userInfoApi'
import Input from '@renderer/components/Input'
import { auth } from '@renderer/main'
import { TChangeData } from '@renderer/types/TChangeData'
import { FC, useEffect, useState } from 'react'
import { useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth'
import './ProfilePageChangeDataInputs.scss'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'

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
    if (errorEmail) {
      setIsEmailCanBeChanged(errorEmail)
      setTimeout(() => {
        setIsEmailCanBeChanged(false)
      }, 1000)
    }
    if (errorPassword) {
      setIsPasswordCanBeChanged(errorPassword)
      setTimeout(() => {
        setIsPasswordCanBeChanged(false)
      }, 1000)
    }
  }, [errorEmail, errorPassword])

  return (
    <>
      {variable === 'email' && (
        <>
          <div className="profile_inputs">
            {emailError && <HelpWindow message="Неправильная почта" />}
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
              const result = await UserInfoApi.updateUserEmail(
                email,
                setEmail,
                setEmailError,
                updateEmail
              )
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
            {passwordError && <HelpWindow message="Слишком короткий пароль" />}
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
              const result = await UserInfoApi.updateUserPassword(
                password,
                setPassword,
                setPasswordError,
                updatePassword
              )
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
