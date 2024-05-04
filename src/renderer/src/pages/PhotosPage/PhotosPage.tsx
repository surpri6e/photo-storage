import './PhotosPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'
import PhotosList from '@renderer/components/PhotosList/PhotosList'

const PhotosPage = (): JSX.Element => {
  const { userInfo, userSettings } = useContext(UserContext)

  return (
    <div className="pwp">
      <div className="pwp_title">Ваши фотографии:</div>
      {userInfo && userSettings && userSettings.verifyEmail && (
        <PhotosList photos={userInfo.images} withCreator={true} />
      )}
      {userInfo && userSettings && !userSettings.verifyEmail && (
        <div className="pwp_message">
          <span>Подвердите почту в настройках. После этого вы сможете загружать фотографии.</span>
        </div>
      )}
    </div>
  )
}

export default PhotosPage
