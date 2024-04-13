import './SettingsPage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import SettingsPageImageSetting from './SettingsPageImageSetting/SettingsPageImageSetting'
import SettingsPageSidebarSetting from './SettingsPageSidebarSetting/SettingsPageSidebarSetting'

const SettingsPage = (): JSX.Element => {
  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Настройки</div>
        <SettingsPageImageSetting />
        <SettingsPageSidebarSetting />
      </div>
    </div>
  )
}

export default SettingsPage
