import { FC, useContext } from 'react'
import './PhotoCardPanel.scss'
import UserImagesApi from '@renderer/api/userImagesApi'
import { UserContext } from '@renderer/context/UserContext'

interface IPhotoCardPanel {
  customRef: React.RefObject<HTMLDivElement>
  id: string
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotoCardPanel: FC<IPhotoCardPanel> = ({ customRef, id, setIsShow }) => {
  const user = useContext(UserContext)

  return (
    <div ref={customRef} className="photo-card_panel">
      <p onClick={() => setIsShow(true)}>Изменить</p>
      <p>Скачать</p>
      <p
        className="photo-card_panel--delete"
        onClick={async () => await UserImagesApi.changeTrashForPhoto(user, id)}
      >
        Удалить
      </p>
    </div>
  )
}

export default PhotoCardPanel
