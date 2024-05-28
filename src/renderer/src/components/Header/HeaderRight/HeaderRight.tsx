import { useContext } from 'react'
import settings from '../../../images/settings.png'
import './HeaderRight.scss'

import { Link } from 'react-router-dom'
import { profilePath, settingsPath } from '@renderer/utils/paths'
import defaultAvatar from '../../../images/defaultAvatar.png'
import { UserContext } from '@renderer/context/UserContext'

const HeaderRight = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  return (
    <div className="header_right">
      {userInfo && (
        <>
          <Link className="header_profile" to={profilePath}>
            <img
              src={userInfo.urlAvatar.length === 0 ? defaultAvatar : userInfo.urlAvatar}
              alt="Профиль"
            />
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
