import settings from '../../../images/settings.png'
import './HeaderRight.scss'

const HeaderRight = (): JSX.Element => {
  return (
    <div className="header_right">
      <div className="header_settings">
        <img src={settings} alt="Настройки" />
      </div>
      <div className="header_profile">
        {/* If image do image else green circle */}
        {/* <img src="" alt="Профиль" /> */}
      </div>
    </div>
  )
}

export default HeaderRight
