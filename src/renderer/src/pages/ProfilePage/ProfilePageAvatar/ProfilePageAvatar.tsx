import { useContext, useEffect, useState } from 'react'
import './ProfilePageAvatar.scss'
import { UserContext } from '@renderer/context/UserContext'
import defaultAvatar from '../../../images/defaultAvatar.png'
import { useUploadFile } from 'react-firebase-hooks/storage'
import StorageApi from '@renderer/api/storageApi'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'

const ProfilePageAvatar = (): JSX.Element => {
  const user = useContext(UserContext)

  const [avatar, setAvatar] = useState<File | undefined>()
  const [avatarError, setAvatarError] = useState(false)

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (avatar && user.userInfo) {
      StorageApi.uploadAvatar(user, uploadFile, avatar, setAvatarError)
    }
  }, [avatar])

  return (
    <div className="profile_header">
      <img
        className={avatarError ? 'profile_avatar profile_avatar--error' : 'profile_avatar'}
        src={user.userInfo.urlAvatar.length === 0 ? defaultAvatar : user.userInfo.urlAvatar}
        alt="Аватарка"
      />

      <label
        htmlFor="avatar-upload"
        className="custom-avatar-upload profile_button profile_button--green"
      >
        Поменять
      </label>

      <input
        id="avatar-upload"
        type="file"
        onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : undefined)}
      />

      {avatarError && (
        <HelpWindow message="Файл слишком большой или не является картинкой" inProfile />
      )}
    </div>
  )
}

export default ProfilePageAvatar
