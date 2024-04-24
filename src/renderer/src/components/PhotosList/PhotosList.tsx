import { IUserInfoImage } from '@renderer/types/IUserInfo'
import './PhotosList.scss'
import { FC, useContext, useEffect, useState } from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import { UserContext } from '@renderer/context/UserContext'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { StorageApi } from '@renderer/api/storageApi'

interface IPhotosList {
  photos: IUserInfoImage[]
}

const PhotosList: FC<IPhotosList> = ({ photos }) => {
  const [photo, setPhoto] = useState<File | undefined>()
  const { userInfo } = useContext(UserContext)

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (photo && userInfo) {
      StorageApi.uploadPhoto(userInfo, uploadFile, photo)
    }
  }, [photo])

  return (
    <div className="photos-list">
      <div className="photos-list_creator">
        <label htmlFor="photo-upload" className="custom-photo-upload">
          +
        </label>
        <input
          id="photo-upload"
          type="file"
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : undefined)}
        />
      </div>
      {photos.length > 0 &&
        photos.map((image) => (
          <PhotoCard
            imageUrl={image.urlImage}
            title={image.title.length > 97 ? image.title.slice(0, 97) + '...' : image.title}
            date={image.dateOfCreate}
            isStarred={image.isStarred}
            key={image.urlImage}
          />
        ))}
    </div>
  )
}

export default PhotosList
