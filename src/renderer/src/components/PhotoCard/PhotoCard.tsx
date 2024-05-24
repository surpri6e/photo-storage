import { FC, useContext } from 'react'
import './PhotoCard.scss'
import { UserContext } from '@renderer/context/UserContext'
import PhotoCardSubmenu from './PhotoCardSubmenu/PhotoCardSubmenu'

import starred from '../../images/starred.png'
import notStarred from '../../images/notStarred.png'
import { IUserImage } from '@renderer/types/IUser'
import UserImagesApi from '@renderer/api/userImagesApi'

const PhotoCard: FC<IUserImage> = ({ urlImage, title, dateOfCreate, isStarred, id }) => {
  const user = useContext(UserContext)
  const { userSettings, userInfo } = user

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
                  UserImagesApi.changeLikeForPhoto(user, id)
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
