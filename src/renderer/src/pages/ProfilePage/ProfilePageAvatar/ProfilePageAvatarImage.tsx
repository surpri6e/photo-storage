import { FC } from 'react'
import defaultAvatar from '../../../images/defaultAvatar.png'

interface IProfilePageAvatarImage {
  errorLocal: boolean
  errorServer: boolean
  urlAvatar: string
}

const ProfilePageAvatarImage: FC<IProfilePageAvatarImage> = ({
  urlAvatar,
  errorLocal,
  errorServer
}) => {
  return (
    <img
      className={
        errorLocal || errorServer ? 'profile_avatar profile_avatar--error' : 'profile_avatar'
      }
      src={urlAvatar.length === 0 ? defaultAvatar : urlAvatar}
      alt="Аватарка"
    />
  )
}

export default ProfilePageAvatarImage
