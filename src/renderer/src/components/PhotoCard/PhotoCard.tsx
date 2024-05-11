import { FC, useContext } from 'react'
import './PhotoCard.scss'
import { UserContext } from '@renderer/context/UserContext'
import PhotoCardSubmenu from './PhotoCardSubmenu/PhotoCardSubmenu'

import starred from '../../images/starred.png'
import notStarred from '../../images/notStarred.png'
import { UserInfoApi } from '@renderer/api/userInfoApi'
import { IUserInfoImage } from '@renderer/types/IUser'

const PhotoCard: FC<IUserInfoImage> = ({
  urlImage,
  title,
  dateOfCreate,
  isStarred,
  id,
  isInTrasher
}) => {
  const { userSettings, userInfo } = useContext(UserContext)

  return (
    <div className="photo-card">
      <a
        href={urlImage}
        target="_blank"
        className={
          userSettings && userSettings.showTitlesOfImages
            ? 'photo-card_image'
            : 'photo-card_image photo-card_image--without-title'
        }
        rel="noreferrer"
      >
        <img src={urlImage} alt={title} />
      </a>

      {userSettings && userSettings.showTitlesOfImages && (
        <p className="photo-card_title">{title}</p>
      )}

      <div className="photo-card_menu">
        <div className="photo-card_date">{dateOfCreate}</div>
        <div className="photo-card_menu_right">
          <div className="photo-card_starred">
            <img
              src={isStarred ? starred : notStarred}
              alt="Лайк"
              onClick={() => {
                if (userInfo) {
                  UserInfoApi.changeLikeForPhoto(userInfo, id)
                }
              }}
            />
          </div>
          <PhotoCardSubmenu />
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
