import { settingsSidebar } from '@renderer/utils/settingsSidebar'
import './SettingsPageSelect.scss'
import { TUserSettingsSidebar } from '@renderer/types/IUser'
import { FC } from 'react'

export interface ISettingsPageSelect {
  sidebarSetting: TUserSettingsSidebar
  setSidebarSetting: React.Dispatch<React.SetStateAction<TUserSettingsSidebar>>
}

const SettingsPageSelect: FC<ISettingsPageSelect> = ({ sidebarSetting, setSidebarSetting }) => {
  return (
    <select
      id="settings_select"
      value={sidebarSetting}
      onChange={(e) => setSidebarSetting(e.target.value as TUserSettingsSidebar)}
    >
      {settingsSidebar.map((setting) => (
        <option value={setting.value} key={setting.name}>
          {setting.name}
        </option>
      ))}
    </select>
  )
}

export default SettingsPageSelect
