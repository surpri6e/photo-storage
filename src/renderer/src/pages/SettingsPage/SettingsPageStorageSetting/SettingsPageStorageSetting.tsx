import './SettingsPageStorageSetting.scss'
import storageMemory from '../../../images/storageMemory.png'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import { scssGreenColor, scssOrangeColor, scssRedColor } from '@renderer/utils/scssColorsVariables'

const SettingsPageStorageSetting = (): JSX.Element => {
  const { userSettings } = useContext(UserContext)

  const [procent, setProcent] = useState(
    userSettings && userSettings.maxStorageMemory != 0
      ? (userSettings.nowStorageMemory / userSettings.maxStorageMemory) * 100
      : 0
  )

  useEffect(() => {
    setProcent(
      userSettings && userSettings.maxStorageMemory != 0
        ? (userSettings.nowStorageMemory / userSettings.maxStorageMemory) * 100
        : 0
    )
  }, [userSettings])

  return (
    <div className="settings_sidebar">
      <img src={storageMemory} alt="Занятая память" />
      <div className="settings_sidebar_right">
        <p>
          {userSettings?.nowStorageMemory} МБ / <span>{userSettings?.maxStorageMemory}</span> МБ
        </p>
        <div
          className="settings_sidebar_rectangle"
          title={`Ваше хранилище заполнено на ${procent}%`}
        >
          <div
            className="settings_sidebar_rectangle_fill"
            style={{
              width: `${procent}%`,
              backgroundColor: `${procent < 50 ? scssGreenColor : procent > 50 && procent < 90 ? scssOrangeColor : scssRedColor}`
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPageStorageSetting
