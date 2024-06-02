import { FC, useContext } from 'react'
import './PhotoCardMenu.scss'
import PhotoCardSubmenu from '../PhotoCardSubmenu/PhotoCardSubmenu'
import UserImagesApi from '@renderer/api/userImagesApi'
import starred from '../../../images/starred.png'
import notStarred from '../../../images/notStarred.png'
import StorageApi from '@renderer/api/storageApi'
import { UserContext } from '@renderer/context/UserContext'

interface IPhotoCardMenu {
  isInTrasher: boolean
  dateOfCreate: string
  isStarred: boolean
  id: string
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotoCardMenu: FC<IPhotoCardMenu> = ({
  isInTrasher,
  dateOfCreate,
  isStarred,
  id,
  setIsShow
}) => {
  const user = useContext(UserContext)

  return (
    <div className="photo-card_menu">
      {!isInTrasher && (
        <>
          <div className="photo-card_date">{dateOfCreate}</div>
          <div className="photo-card_menu_right">
            <div className="photo-card_starred">
              <img
                src={isStarred ? starred : notStarred}
                alt="Лайк"
                onClick={async () => await UserImagesApi.changeLikeForPhoto(user, id)}
              />
            </div>

            <PhotoCardSubmenu id={id} setIsShow={setIsShow} />
          </div>
        </>
      )}

      {isInTrasher && (
        <>
          <div
            className="photo-card_delete"
            onClick={async () => await StorageApi.deletePhotoFromStorage(user, id)}
          >
            Удалить полностью
          </div>
          <div
            className="photo-card_heal"
            onClick={async () => await UserImagesApi.changeTrashForPhoto(user, id)}
          >
            Восстановить
          </div>
        </>
      )}
    </div>
  )
}

export default PhotoCardMenu
