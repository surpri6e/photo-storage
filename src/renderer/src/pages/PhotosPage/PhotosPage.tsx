import './PhotosPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'
import PhotosList from '@renderer/components/PhotosList/PhotosList'

const PhotosPage = (): JSX.Element => {
  const { userImages, userSettings } = useContext(UserContext)

  return (
    <div className="pwp">
      <div className="pwp_title">Ваши фотографии:</div>
      {userSettings.verifyEmail && (
        <PhotosList
          photos={userImages.images.filter((image) => !image.isInTrasher)}
          withCreator={true}
        />
      )}

      {!userSettings.verifyEmail && (
        <div className="pwp_message">
          Подвердите почту в настройках. После этого вы сможете загружать фотографии.
        </div>
      )}
    </div>
  )
}

export default PhotosPage
