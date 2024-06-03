import { FC, useContext, useState } from 'react'
import './PhotoCard.scss'
import { UserContext } from '@renderer/context/UserContext'
import { IUserImage } from '@renderer/types/IUser'
import PhotoCardMenu from './PhotoCardMenu/PhotoCardMenu'
import PhotoCardChangeTitle from './PhotoCardChangeTitle/PhotoCardChangeTitle'
import WatchingPhotos from '../WatchingPhotos/WatchingPhotos'

interface IPhotoCard {
  index: number
}

const PhotoCard: FC<IUserImage & IPhotoCard> = ({
  urlImage,
  title,
  dateOfCreate,
  isStarred,
  id,
  isInTrasher,
  index
}) => {
  const user = useContext(UserContext)
  const { userSettings } = user

  const [isShow, setIsShow] = useState(false)
  const [isWatchMode, setIsWatchMode] = useState(false)

  return (
    <div className="photo-card">
      <a
        className={
          userSettings.showTitlesOfImages && !isInTrasher
            ? 'photo-card_image'
            : 'photo-card_image photo-card_image--without-title'
        }
        rel="noreferrer"
        onClick={() => setIsWatchMode(true)}
      >
        <img src={urlImage} alt={title} />
      </a>

      {isWatchMode && <WatchingPhotos currentPhoto={index} setIsWatchMode={setIsWatchMode} />}

      <PhotoCardMenu
        dateOfCreate={dateOfCreate}
        id={id}
        isInTrasher={isInTrasher}
        isStarred={isStarred}
        setIsShow={setIsShow}
      />
      <PhotoCardChangeTitle
        id={id}
        isInTrasher={isInTrasher}
        isShow={isShow}
        setIsShow={setIsShow}
        title={title}
      />
    </div>
  )
}

export default PhotoCard
