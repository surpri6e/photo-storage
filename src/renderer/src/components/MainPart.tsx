import { SidebarContext } from '@renderer/context/SidebarContext'
import { useContext, useState } from 'react'
import ApplicationRoutes from './ApplicationRoutes'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import '../styles/libs/MainPart.scss'
import { UserContext } from '@renderer/context/UserContext'
import AuthProvider from './Providers/AuthProvider'
import UserProvider from './Providers/UserProvider'
import RegistrationProvider from './Providers/RegistrationProvider'

const MainPart = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)

  const { userSettings } = useContext(UserContext)

  return (
    <AuthProvider>
      <UserProvider>
        <RegistrationProvider>
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
        </RegistrationProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default MainPart
