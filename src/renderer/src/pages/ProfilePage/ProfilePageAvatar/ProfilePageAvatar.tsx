import { useContext, useEffect, useState } from 'react'
import './ProfilePageAvatar.scss'
import { UserContext } from '@renderer/context/UserContext'
import defaultAvatar from '../../../images/defaultAvatar.png'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { StorageApi } from '@renderer/api/storageApi'

const ProfilePageAvatar = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  const [avatar, setAvatar] = useState<File | undefined>()

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (avatar && userInfo) {
      StorageApi.uploadPhoto(userInfo, uploadFile, avatar)
    }
  }, [avatar])

  return (
    <div className="profile_header">
      <img
        className="profile_avatar"
        src={userInfo?.urlAvatar.length === 0 ? defaultAvatar : userInfo?.urlAvatar}
        alt="Аватарка"
      />
      <label htmlFor="avatar-upload" className="custom-avatar-upload">
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
