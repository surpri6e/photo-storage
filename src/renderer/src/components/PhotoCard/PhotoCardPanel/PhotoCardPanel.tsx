import { FC } from 'react'
import './PhotoCardPanel.scss'

interface IPhotoCardPanel {
  customRef: React.RefObject<HTMLDivElement>
}

const PhotoCardPanel: FC<IPhotoCardPanel> = ({ customRef }) => {
  return (
    <div ref={customRef} className="photo-card_panel">
      <p>Скачать</p>
      <p className="photo-card_panel--delete">Удалить</p>
    </div>
  )
}

export default PhotoCardPanel
