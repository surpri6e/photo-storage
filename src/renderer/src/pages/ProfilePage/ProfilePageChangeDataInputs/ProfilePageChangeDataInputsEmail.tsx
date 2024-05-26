import { FC, useEffect, useState } from 'react'
import { IProfilePageChangeDataInputs } from './ProfilePageChangeDataInputs'
import { useUpdateEmail } from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import { emailErrorMessage } from '@renderer/utils/constants'
import Input from '@renderer/components/Input'
import UserInfoApi from '@renderer/api/userInfoApi'

interface IProfilePageChangeDataInputsEmail {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>

  emailError: boolean
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePageChangeDataInputsEmail: FC<
  IProfilePageChangeDataInputs & IProfilePageChangeDataInputsEmail
> = ({ setVariable, email, setEmail, setEmailError, emailError }) => {
  const [updateEmail, , errorEmail] = useUpdateEmail(auth)
  const [isEmailCanBeChanged, setIsEmailCanBeChanged] = useState(false)

  useEffect(() => {
    if (errorEmail) {
      setTimeout(() => setIsEmailCanBeChanged(true), 800)
      setTimeout(() => {
        setIsEmailCanBeChanged(false)
      }, 1200)
    }
  }, [errorEmail])

  return (
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
  )
}

export default ProfilePageChangeDataInputsEmail
