import './WatchingPhotos.scss'
import { FC, useContext, useState } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import { PhotosContext } from '@renderer/context/PhotosContext'

import plus from '../../images/plus.png'
import arrow from '../../images/arrow.png'

interface IWatchingPhotos {
  currentPhoto: number
  setIsWatchMode: React.Dispatch<React.SetStateAction<boolean>>
}

const WatchingPhotos: FC<IWatchingPhotos> = ({ currentPhoto, setIsWatchMode }) => {
  const [iterator, setIterator] = useState(currentPhoto)
  const { photos } = useContext(PhotosContext)

  return (
    <ModalWindow>
      <div className="watching-photos">
        <img
          src={photos[iterator].urlImage}
          alt={photos[iterator].title}
          className="watching_photos_image"
        />
        <button onClick={() => setIsWatchMode(false)} className="watching-photos_close">
          <img src={plus} alt="Закрыть" />
        </button>
        <button
          onClick={() => setIterator(iterator + 1)}
          className={
            iterator === photos.length - 1
              ? 'watching-photos_next watching-photos--disabled'
              : 'watching-photos_next'
          }
          disabled={iterator === photos.length - 1}
        >
          <img src={arrow} alt="Стрелка вправо" />
        </button>
        <button
          onClick={() => setIterator(iterator - 1)}
          className={
            iterator === 0
              ? 'watching-photos_prev watching-photos--disabled'
              : 'watching-photos_prev'
          }
          disabled={iterator === 0}
        >
          <img src={arrow} alt="Стрелка влево" />
        </button>
      </div>
    </ModalWindow>
  )
}

export default WatchingPhotos
