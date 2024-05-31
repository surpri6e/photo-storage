import UserSettingsApi from '@renderer/api/userSettingsApi'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'

const SettingsPageThemeSetting = (): JSX.Element => {
  const { userSettings } = useContext(UserContext)

  return (
    <div className="settings_block">
      <p>Темная тема: </p>
      <button
        className="settings_button"
        onClick={async () => await UserSettingsApi.updateThemeSetting(userSettings)}
      >
        {userSettings.isDarkTheme ? 'Да' : 'Нет'}
      </button>
    </div>
  )
}

export default SettingsPageThemeSetting
