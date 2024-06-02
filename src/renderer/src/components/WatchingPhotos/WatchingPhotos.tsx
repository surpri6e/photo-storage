import { IUserImage } from '@renderer/types/IUser'
import './WatchingPhotos.scss'
import { FC } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'

interface IWatchingPhotos {
  photos: IUserImage[]
  currentPhoto: number
  setIsWatchMode: React.Dispatch<React.SetStateAction<boolean>>
}

const WatchingPhotos: FC<IWatchingPhotos> = ({ currentPhoto, photos, setIsWatchMode }) => {
  return (
    <ModalWindow>
      {/* <img src={urlImage} alt={title} /> */}
      <button onClick={() => setIsWatchMode(false)}>close</button>
      <button onClick={() => setIsWatchMode(false)}>next</button>
      <button onClick={() => setIsWatchMode(false)}>prev</button>
    </ModalWindow>
  )
}

export default WatchingPhotos
