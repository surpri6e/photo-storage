import { useContext, useEffect } from 'react'
import './Sidebar.scss'
import { SidebarContext } from '@renderer/context/SidebarContext'
import SidebarList from './SidebarList/SidebarList'
import SidebarVersion from './SidebarVersion/SidebarVersion'
import { UserContext } from '@renderer/context/UserContext'

const Sidebar = (): JSX.Element => {
  const { isMinWidth, setIsMinWidth } = useContext(SidebarContext)

  const { userSettings } = useContext(UserContext)

  useEffect(() => {
    setIsMinWidth(true)
  }, [userSettings])

  return (
    <div
      className={`sidebar ${userSettings?.sidebar === 'open' ? 'sidebar--max--opened' : userSettings?.sidebar === 'close' ? 'sidebar--min--closed' : isMinWidth ? 'sidebar--min' : 'sidebar--max'}`}
    >
      <SidebarList isMinWidth={isMinWidth} setIsMinWidth={setIsMinWidth} />
      <SidebarVersion />
    </div>
  )
}

export default Sidebar
