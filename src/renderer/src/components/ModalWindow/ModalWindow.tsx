import { FC } from 'react'
import './ModalWindow.scss'

interface IModalWindow {
  children: React.ReactNode
}

const ModalWindow: FC<IModalWindow> = ({ children }) => {
  return <div className="modal">{children}</div>
}

export default ModalWindow
