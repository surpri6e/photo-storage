import './TrasherPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import PhotosList from '@renderer/components/PhotosList/PhotosList'

const TrasherPage = (): JSX.Element => {
  const { userImages, userSettings } = useContext(UserContext)

  return (
    <div className="pwp">
      <div className="pwp_title">Ваши удаленные фотографии:</div>
      {userImages && userSettings && userSettings.verifyEmail && (
        <PhotosList
          photos={userImages.images.filter((image) => image.isInTrasher)}
          withCreator={false}
        />
      )}
      {userImages && userSettings && !userSettings.verifyEmail && (
        <div className="pwp_message">
          <span>
            Подвердите почту в настройках. После этого вы сможете смотреть ваши удаленные
            фотографии.
          </span>
        </div>
      )}
      {userImages &&
        userSettings &&
        userSettings.verifyEmail &&
        userImages.images.filter((image) => image.isInTrasher).length === 0 && (
          <div className="pwp_message">У вас нет удаленных фотографий</div>
        )}
    </div>
  )
}

export default TrasherPage
