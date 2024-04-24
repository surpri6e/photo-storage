import { FC, useContext } from 'react'
import './PhotoCard.scss'
import { UserContext } from '@renderer/context/UserContext'

interface IPhotoCard {
  imageUrl: string
  title: string
}

const PhotoCard: FC<IPhotoCard> = ({ imageUrl, title }) => {
  const { userSettings } = useContext(UserContext)

  return (
    <div className="photo-card">
      <div
        className={
          userSettings && userSettings.showTitlesOfImages
            ? 'photo-card_image'
            : 'photo-card_image photo-card_image--without-title'
        }
      >
        <img src={imageUrl} alt={title} />
      </div>
      {userSettings && userSettings.showTitlesOfImages && (
        <p className="photo-card_title">{title}</p>
      )}

      <div className="photo-card_menu">
        <div className="photo-card_date">22.00.12</div>
        <div className="photo-card_liked"></div>
        <div className="photo-card_submenu">...</div>
      </div>
    </div>
  )
}

export default PhotoCard
