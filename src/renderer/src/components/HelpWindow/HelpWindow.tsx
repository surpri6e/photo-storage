import { FC } from 'react'
import './HelpWindow.scss'

interface IHelpWindow {
  message: string
}

const HelpWindow: FC<IHelpWindow> = ({ message }) => {
  return <div className="help-window">{message}</div>
}

export default HelpWindow
