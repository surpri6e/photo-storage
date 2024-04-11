import { SidebarContext } from '@renderer/context/SidebarContext'
import { useState } from 'react'
import ApplicationRoutes from './ApplicationRoutes'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import '../styles/libs/MainPart.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { auth } from '@renderer/main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AuthContext } from '@renderer/context/AuthContext'

const MainPart = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [doublePassword, setDoublePassword] = useState('')

  const [user, loading, error] = useAuthState(auth)

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      <RegistrationContext.Provider
        value={{ email, password, doublePassword, setEmail, setPassword, setDoublePassword }}
      >
        <SidebarContext.Provider value={{ isMinWidth, setIsMinWidth }}>
          <Sidebar />
          <Header />
          <div className={isMinWidth ? 'is-sidebar is-sidebar-min' : 'is-sidebar is-sidebar-max'}>
            <ApplicationRoutes />
          </div>
        </SidebarContext.Provider>
      </RegistrationContext.Provider>
    </AuthContext.Provider>
  )
}

export default MainPart
