import './PhotosPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'
import PhotosList from '@renderer/components/PhotosList/PhotosList'

const PhotosPage = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  return (
    <div className="pwp">
      <div className="pwp_title">Ваши фотографии:</div>

      {/* {userInfo && userInfo.images.length > 0 && <PhotosList photos={userInfo.images} />} */}
      <PhotosList photos={userInfo.images} />
    </div>
  )
}

export default PhotosPage
