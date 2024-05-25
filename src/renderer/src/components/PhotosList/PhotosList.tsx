import { IUserImage } from '@renderer/types/IUser'
import './PhotosList.scss'
import { FC, useContext, useEffect, useState } from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import { UserContext } from '@renderer/context/UserContext'
import { useUploadFile } from 'react-firebase-hooks/storage'
import StorageApi from '@renderer/api/storageApi'

import plus from '../../images/plus.png'

interface IPhotosList {
  photos: IUserImage[]
  withCreator: boolean
}

const PhotosList: FC<IPhotosList> = ({ photos, withCreator }) => {
  const [photo, setPhoto] = useState<File | undefined>()
  const user = useContext(UserContext)

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (photo && user.userInfo && user.userSettings) {
      StorageApi.uploadPhoto(user, uploadFile, photo)
    }
  }, [photo])

  return (
    <div className="photos-list">
      {withCreator && (
        <div className="photos-list_creator">
          <label htmlFor="photo-upload" className="custom-photo-upload">
            <img src={plus} alt="Добавить фотографию" />
          </label>
          <input
            id="photo-upload"
            type="file"
            onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : undefined)}
          />
        </div>
      )}
      {photos.length > 0 &&
        photos.map((image) => (
          <PhotoCard
            urlImage={image.urlImage}
            title={image.title.length > 97 ? image.title.slice(0, 97) + '...' : image.title}
            dateOfCreate={image.dateOfCreate}
            isInTrasher={image.isInTrasher}
            isStarred={image.isStarred}
            id={image.id}
            key={image.urlImage}
          />
        ))}
    </div>
  )
}

export default PhotosList
