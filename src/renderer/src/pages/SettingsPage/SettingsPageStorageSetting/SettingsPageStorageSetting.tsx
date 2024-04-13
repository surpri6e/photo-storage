import './SettingsPageStorageSetting.scss'
import storageMemory from '../../../images/storageMemory.png'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'

const SettingsPageStorageSetting = (): JSX.Element => {
  const { userSettings } = useContext(UserContext)

  return (
    <div className="settings_sidebar">
      <img src={storageMemory} alt="Занятая память" />
      <div className="settings_sidebar_right">
        <p>
          0 МБ / <span>{userSettings?.maxStorageMemory}</span> МБ
        </p>
        <div className="settings_sidebar_rectangle">
          <div className="settings_sidebar_rectangle_fill" style={{ width: `50%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPageStorageSetting
