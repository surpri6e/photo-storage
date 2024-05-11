import { useRef, useState } from 'react'
import './PhotoCardSubmenu.scss'
import PhotoCardPanel from '../PhotoCardPanel/PhotoCardPanel'
import { useClickOutside } from '@renderer/hooks/useClickOutside'

const PhotoCardSubmenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setIsOpen(false))

  return (
    <>
      {!isOpen && (
        <div className="photo-card_submenu" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {isOpen && <PhotoCardPanel customRef={ref} />}
    </>
  )
}

export default PhotoCardSubmenu