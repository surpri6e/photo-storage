import { FC, useContext, useState } from 'react'
import './PhotoCardChangeTitle.scss'
import { UserContext } from '@renderer/context/UserContext'
import Input from '@renderer/components/Input'
import UserImagesApi from '@renderer/api/userImagesApi'

interface IPhotoCardChangeTitle {
  title: string
  isShow: boolean
  isInTrasher: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
  id: string
}

const PhotoCardChangeTitle: FC<IPhotoCardChangeTitle> = ({
  isInTrasher,
  isShow,
  setIsShow,
  title,
  id
}) => {
  const [name, setName] = useState('')
  const user = useContext(UserContext)

  return (
    user.userSettings.showTitlesOfImages &&
    !isInTrasher &&
    (isShow ? (
      <div className="photo-card_change">
        <Input
          value={name}
          setValue={setName}
          placeholder="Введите название"
          className="input photo-card_input"
          type="text"
        />

        <div className="photo-card_change_buttons">
          <button
            className="photo-card_change_buttons--green"
            onClick={async () => {
              await UserImagesApi.changeNameForPhoto(user, id, name)
              setIsShow(false)
              setName('')
            }}
          >
            Сохранить
          </button>

          <button
            className="photo-card_change_buttons--red"
            onClick={() => {
              setIsShow(false)
              setName('')
            }}
          >
            Назад
          </button>
        </div>
      </div>
    ) : (
      <p className="photo-card_title">{title}</p>
    ))
  )
}

export default PhotoCardChangeTitle
