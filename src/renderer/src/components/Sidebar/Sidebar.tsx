import { useContext } from 'react'
import './Sidebar.scss'
import { SidebarContext } from '@renderer/context/SidebarContext'
import SidebarList from './SidebarList/SidebarList'

const Sidebar = (): JSX.Element => {
  const { isMinWidth } = useContext(SidebarContext)
  return (
    <div className={`sidebar ${isMinWidth ? 'sidebar--min' : 'sidebar--max'}`}>
      <SidebarList isMinWidth={isMinWidth} />
      <div>asdasd</div>
    </div>
  )
}

export default Sidebar
