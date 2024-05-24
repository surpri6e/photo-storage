import UserSettingsApi from '@renderer/api/userSettingsApi'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'

const SettingsPageImageSetting = (): JSX.Element => {
  const { userInfo, userSettings } = useContext(UserContext)
  return (
    <div className="settings_block">
      <p>Показывать название фотографий: </p>
      <button
        className="settings_button"
        onClick={() => {
          if (userSettings && userInfo) {
            UserSettingsApi.updateImageSetting(userSettings)
          }
        }}
      >
        {userSettings?.showTitlesOfImages ? 'Да' : 'Нет'}
      </button>
    </div>
  )
}

export default SettingsPageImageSetting
