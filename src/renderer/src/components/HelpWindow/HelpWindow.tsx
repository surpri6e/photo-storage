import { FC } from 'react'
import './HelpWindow.scss'

interface IHelpWindow {
  message: string
  isHelpful?: boolean
  inProfile?: boolean
}

const HelpWindow: FC<IHelpWindow> = ({ message, isHelpful, inProfile }) => {
  return (
    <div
      className={`help-window ${isHelpful && 'help-window--helpful'} ${inProfile && 'help-window--profile'}`}
    >
      {message}
    </div>
  )
}

export default HelpWindow
