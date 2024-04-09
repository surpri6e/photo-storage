import { useContext } from 'react'
import './Sidebar.scss'
import { SidebarContext } from '@renderer/context/SidebarContext'
import SidebarList from './SidebarList/SidebarList'
import SidebarVersion from './SidebarVersion/SidebarVersion'

const Sidebar = (): JSX.Element => {
  const { isMinWidth, setIsMinWidth } = useContext(SidebarContext)
  return (
    <div className={`sidebar ${isMinWidth ? 'sidebar--min' : 'sidebar--max'}`}>
      <SidebarList isMinWidth={isMinWidth} setIsMinWidth={setIsMinWidth} />
      <SidebarVersion />
    </div>
  )
}

export default Sidebar
