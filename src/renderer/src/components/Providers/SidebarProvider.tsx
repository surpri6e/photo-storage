import { SidebarContext } from '@renderer/context/SidebarContext'
import { UserContext } from '@renderer/context/UserContext'
import { useContext, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import ApplicationRoutes from '../ApplicationRoutes'

const SidebarProvider = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)
  const { userSettings } = useContext(UserContext)

  return (
    <SidebarContext.Provider value={{ isMinWidth, setIsMinWidth }}>
      <Sidebar />
      <Header />
      <div
        className={
          userSettings?.sidebar === 'open'
            ? 'is-sidebar is-sidebar-max--opened'
            : userSettings?.sidebar === 'close'
              ? 'is-sidebar is-sidebar-min--closed'
              : isMinWidth
                ? 'is-sidebar is-sidebar-min'
                : 'is-sidebar is-sidebar-max'
        }
      >
        <ApplicationRoutes />
      </div>
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
