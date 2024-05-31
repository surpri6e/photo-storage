import { useContext, useState } from 'react'
import './ProfilePageAvatar.scss'
import { UserContext } from '@renderer/context/UserContext'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'
import { useUploadAvatar } from '@renderer/hooks/useUploadAvatar'
import Loader from '@renderer/components/Loader/Loader'
import ProfilePageAvatarImage from './ProfilePageAvatarImage'

const ProfilePageAvatar = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  const [avatar, setAvatar] = useState<File | undefined>()

  const [loading, errorLocal, errorServer] = useUploadAvatar(avatar)

  return (
    <div className="profile_header">
      {loading && <Loader />}
      {!loading && (
        <ProfilePageAvatarImage
          errorLocal={errorLocal}
          errorServer={errorServer}
          urlAvatar={userInfo.urlAvatar[0]}
        />
      )}

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

      {errorLocal && (
        <HelpWindow message="Файл слишком большой или не является картинкой" inProfile />
      )}

      {errorServer && !errorLocal && (
        <HelpWindow message="При загрузке произошла ошибка" inProfile />
      )}
    </div>
  )
}

export default ProfilePageAvatar
