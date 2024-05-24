import './StarredPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import PhotosList from '@renderer/components/PhotosList/PhotosList'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'

const StarredPage = (): JSX.Element => {
  const { userImages, userSettings } = useContext(UserContext)

  return (
    <div className="pwp">
      <div className="pwp_title">Ваши любимые фотографии:</div>
      {userImages && userSettings && userSettings.verifyEmail && (
        <PhotosList
          photos={userImages.images.filter((image) => image.isStarred)}
          withCreator={false}
        />
      )}
      {userImages && userSettings && !userSettings.verifyEmail && (
        <div className="pwp_message">
          <span>Подвердите почту в настройках. После этого вы сможете загружать фотографии.</span>
        </div>
      )}
      {userImages && userImages.images.filter((image) => image.isStarred).length === 0 && (
        <div className="pwp_message">У вас нет любимых фотографий</div>
      )}
    </div>
  )
}

export default StarredPage
