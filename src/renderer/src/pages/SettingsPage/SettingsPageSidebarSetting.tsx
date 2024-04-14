import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import SettingsPageSelect from './SettingsPageSelect/SettingsPageSelect'
import { TUserSettingsSidebar } from '@renderer/types/IUserSettings'
import { updateSidebarSetting } from '@renderer/api/userSettingsApi'

const SettingsPageSidebarSetting = (): JSX.Element => {
  const { userInfo, userSettings } = useContext(UserContext)
  const [sidebarSetting, setSidebarSetting] = useState<TUserSettingsSidebar>(
    userSettings ? userSettings.sidebar : 'all'
  )

  useEffect(() => {
    if (userInfo && userSettings) {
      updateSidebarSetting(userInfo, userSettings, sidebarSetting)
    }
  }, [sidebarSetting])

  return (
    <div className="settings_block">
      <p>Настройки сайдбара: </p>
      <SettingsPageSelect sidebarSetting={sidebarSetting} setSidebarSetting={setSidebarSetting} />
    </div>
  )
}

export default SettingsPageSidebarSetting