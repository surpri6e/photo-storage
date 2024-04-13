import './SettingsPage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import SettingsPageImageSetting from './SettingsPageImageSetting/SettingsPageImageSetting'
import SettingsPageSidebarSetting from './SettingsPageSidebarSetting'
import SettingsPageStorageSetting from './SettingsPageStorageSetting/SettingsPageStorageSetting'

const SettingsPage = (): JSX.Element => {
  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Настройки</div>
        <SettingsPageImageSetting />
        <SettingsPageSidebarSetting />
        <SettingsPageStorageSetting />
      </div>
    </div>
  )
}

export default SettingsPage
