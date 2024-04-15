import { useContext } from 'react'
import './ProfilePageAvatar.scss'
import { UserContext } from '@renderer/context/UserContext'
import defaultAvatar from '../../../images/defaultAvatar.png'

const ProfilePageAvatar = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  return (
    <div className="profile_header">
      <img
        className="profile_avatar"
        src={userInfo?.urlAvatar.length === 0 ? defaultAvatar : userInfo?.urlAvatar}
        alt="Аватарка"
      />
    </div>
  )
}

export default ProfilePageAvatar
