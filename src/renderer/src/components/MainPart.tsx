import { SidebarContext } from '@renderer/context/SidebarContext'
import { useState } from 'react'
import ApplicationRoutes from './ApplicationRoutes'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import '../styles/libs/MainPart.scss'

const MainPart = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)

  return (
    <SidebarContext.Provider value={{ isMinWidth, setIsMinWidth }}>
      <Sidebar />
      <Header />
      <div className={isMinWidth ? 'is-sidebar-min' : 'is-sidebar-max'}>
        <ApplicationRoutes />
      </div>
    </SidebarContext.Provider>
  )
}

export default MainPart
