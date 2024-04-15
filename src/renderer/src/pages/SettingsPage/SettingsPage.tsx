import './SettingsPage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import SettingsPageImageSetting from './SettingsPageImageSetting'
import SettingsPageSidebarSetting from './SettingsPageSidebarSetting'
import SettingsPageStorageSetting from './SettingsPageStorageSetting/SettingsPageStorageSetting'
import SettingsPageButton from './SettingsPageButton/SettingsPageButton'

const SettingsPage = (): JSX.Element => {
  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Настройки</div>
        <SettingsPageImageSetting />
        <SettingsPageSidebarSetting />
        <SettingsPageStorageSetting />
        <SettingsPageButton />
        <div className="settings_block">
          <p>Служба поддержки и покупка вип статуса: </p>
          <a href="https://vk.com/surpri6e" target="_blank" rel="noreferrer">
            здесь
          </a>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
