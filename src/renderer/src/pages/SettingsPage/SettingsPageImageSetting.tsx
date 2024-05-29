import UserSettingsApi from '@renderer/api/userSettingsApi'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'

const SettingsPageImageSetting = (): JSX.Element => {
  const { userSettings } = useContext(UserContext)

  return (
    <div className="settings_block">
      <p>Показывать название фотографий: </p>
      <button
        className="settings_button"
        onClick={() => UserSettingsApi.updateImageSetting(userSettings)}
      >
        {userSettings.showTitlesOfImages ? 'Да' : 'Нет'}
      </button>
    </div>
  )
}

export default SettingsPageImageSetting
