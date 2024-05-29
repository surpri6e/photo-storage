import { useContext, useEffect, useState } from 'react'
import './SettingsPageButton.scss'
import { AuthContext } from '@renderer/context/AuthContext'
import { UserContext } from '@renderer/context/UserContext'
import { useSendEmailVerification } from 'react-firebase-hooks/auth'
import { auth } from '@renderer/main'
import UserSettingsApi from '@renderer/api/userSettingsApi'

const SettingsPageButton = (): JSX.Element => {
  const { user } = useContext(AuthContext)
  const { userSettings } = useContext(UserContext)

  const [isClicked, setIsClicked] = useState(false)

  const [sendEmailVerification] = useSendEmailVerification(auth)

  useEffect(() => {
    if (user?.emailVerified && !userSettings.verifyEmail) {
      UserSettingsApi.verifyUserEmail(userSettings)
    }
  }, [user])

  return (
    <button
      title="После подтверждения почты перезапустите приложение"
      className={
        user?.emailVerified
          ? 'settings_button settings_button--green'
          : isClicked
            ? 'settings_button settings_button--orange settings_button--disabled'
            : 'settings_button settings_button--orange'
      }
      disabled={user?.emailVerified || isClicked}
      onClick={() => {
        sendEmailVerification()
        setIsClicked(true)
      }}
    >
      {user?.emailVerified ? 'Почта подтверждена' : 'Выслать письмо с подтверждением почты'}
    </button>
  )
}

export default SettingsPageButton
