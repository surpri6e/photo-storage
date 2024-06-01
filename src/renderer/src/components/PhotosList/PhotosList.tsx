import { IUserImage } from '@renderer/types/IUser'
import './PhotosList.scss'
import { FC, useState } from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import plus from '../../images/plus.png'
import HelpWindow from '../HelpWindow/HelpWindow'
import { useUploadPhotos } from '@renderer/hooks/useUploadPhotos'
import Loader from '../Loader/Loader'

interface IPhotosList {
  photos: IUserImage[]
  withCreator: boolean
}

const PhotosList: FC<IPhotosList> = ({ photos, withCreator }) => {
  const [files, setFiles] = useState<FileList | null | undefined>()
  const [loading, localError, serverError] = useUploadPhotos(files)

  return (
    <div className="photos-list">
      {withCreator && (
        <div
          className={
            localError !== 'none' || serverError
              ? 'photos-list_creator photos-list_creator--error '
              : 'photos-list_creator'
          }
        >
          {localError === 'file' && (
            <HelpWindow message="Файлы слишком большие или не являются картинками" />
          )}

          {localError === 'size' && <HelpWindow message="Недостаточно места на диске" />}

          {serverError && localError === 'none' && (
            <HelpWindow message="При загрузке произошла ошибка" />
          )}

          {!loading && (
            <label htmlFor="photo-upload" className="custom-photo-upload">
              <img src={plus} alt="Добавить фотографию" />
            </label>
          )}
          {loading && <Loader />}

          <input
            id="photo-upload"
            type="file"
            onChange={(e) => setFiles(e.target.files)}
            multiple
            accept="image/*"
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
            size={image.size}
          />
        ))}
    </div>
  )
}

export default PhotosList
