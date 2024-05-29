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
      {userSettings.verifyEmail &&
        userImages.images.filter((image) => image.isStarred).length !== 0 && (
          <PhotosList
            photos={userImages.images.filter((image) => image.isStarred)}
            withCreator={false}
          />
        )}

      {userSettings.verifyEmail &&
        userImages.images.filter((image) => image.isStarred).length === 0 && (
          <div className="pwp_message">У вас нет любимых фотографий</div>
        )}

      {!userSettings.verifyEmail && (
        <div className="pwp_message">
          Подвердите почту в настройках. После этого вы сможете смотреть ваши любимые фотографии.
        </div>
      )}
    </div>
  )
}

export default StarredPage
