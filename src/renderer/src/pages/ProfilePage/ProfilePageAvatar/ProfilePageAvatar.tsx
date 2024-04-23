import { useContext, useEffect, useState } from 'react'
import './ProfilePageAvatar.scss'
import { UserContext } from '@renderer/context/UserContext'
import defaultAvatar from '../../../images/defaultAvatar.png'

const ProfilePageAvatar = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  const [avatar, setAvatar] = useState<File | undefined>()

  useEffect(() => {
    if (avatar) {
      console.log('it be uploaded normaly')
      console.log(avatar)
    }
  }, [avatar])

  return (
    <div className="profile_header">
      <img
        className="profile_avatar"
        src={userInfo?.urlAvatar.length === 0 ? defaultAvatar : userInfo?.urlAvatar}
        alt="Аватарка"
      />
      <label htmlFor="file-upload" className="custom-avatar-upload">
        Поменять
      </label>
      <input
        id="avatar-upload"
        type="file"
        onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : undefined)}
      />
    </div>
  )
}

export default ProfilePageAvatar
