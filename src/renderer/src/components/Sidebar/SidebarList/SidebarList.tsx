import { FC } from 'react'
import './SidebarList.scss'

interface ISidebarList {
  isMinWidth: boolean
}

const SidebarList: FC<ISidebarList> = ({ isMinWidth }) => {
  return <ul></ul>
}

export default SidebarList
