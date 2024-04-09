import { VERSION } from '@renderer/utils/constants'
import './SidebarVersion.scss'

const SidebarVersion = (): JSX.Element => {
  return (
    <a
      href="https://github.com/surpri6e/photo-storage"
      target="_blank"
      className="sidebar_version"
      rel="noreferrer"
    >
      {VERSION}
    </a>
  )
}

export default SidebarVersion
