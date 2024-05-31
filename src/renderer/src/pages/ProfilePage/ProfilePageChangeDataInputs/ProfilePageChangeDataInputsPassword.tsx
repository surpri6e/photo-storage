import React, { FC, useEffect, useState } from 'react'
import { IProfilePageChangeDataInputs } from './ProfilePageChangeDataInputs'
import { useUpdatePassword } from 'react-firebase-hooks/auth'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import { passwordErrorMessage } from '@renderer/utils/constants'
import Input from '@renderer/components/Input'
import { auth } from '@renderer/main'
import UserInfoApi from '@renderer/api/userInfoApi'
import { errorDoubleTimeout } from '@renderer/utils/errorsTimeout'

interface IProfilePageChangeDataInputsPassword {
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>

  passwordError: boolean
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePageChangeDataInputsPassword: FC<
  IProfilePageChangeDataInputs & IProfilePageChangeDataInputsPassword
> = ({ password, passwordError, setPassword, setPasswordError, setVariable }) => {
  const [updatePassword, , errorPassword] = useUpdatePassword(auth)
  const [isPasswordCanBeChanged, setIsPasswordCanBeChanged] = useState(false)

  useEffect(() => {
    if (errorPassword) {
      errorDoubleTimeout(setIsPasswordCanBeChanged, 800)
    }
  }, [errorPassword])

  return (
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
  )
}

export default ProfilePageChangeDataInputsPassword
