import { useContext } from 'react'
import settings from '../../../images/settings.png'
import './HeaderRight.scss'
import { AuthContext } from '@renderer/context/AuthContext'
import { Link } from 'react-router-dom'
import { profilePath, settingsPath } from '@renderer/utils/paths'
import defaultAvatar from '../../../images/defaultAvatar.png'

const HeaderRight = (): JSX.Element => {
  const { user } = useContext(AuthContext)
  return (
    <div className="header_right">
      {user && (
        <>
          <Link className="header_profile" to={profilePath}>
            <img src={defaultAvatar} alt="Профиль" />
          </Link>
          <Link className="header_settings" to={settingsPath}>
            <img src={settings} alt="Настройки" />
          </Link>
        </>
      )}
    </div>
  )
}

export default HeaderRight
