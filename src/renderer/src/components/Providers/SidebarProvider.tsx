import { SidebarContext } from '@renderer/context/SidebarContext'
import { UserContext } from '@renderer/context/UserContext'
import { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes } from '@renderer/routes'
import PhotosPage from '@renderer/pages/PhotosPage/PhotosPage'

const SidebarProvider = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)
  const { userSettings } = useContext(UserContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', userSettings.isDarkTheme ? 'dark' : 'light')
  }, [userSettings.isDarkTheme])

  return (
    <SidebarContext.Provider value={{ isMinWidth, setIsMinWidth }}>
      <Sidebar />
      <Header />
      <div
        className={
          userSettings.sidebar === 'open'
            ? 'is-sidebar is-sidebar-max--opened'
            : userSettings.sidebar === 'close'
              ? 'is-sidebar is-sidebar-min--closed'
              : isMinWidth
                ? 'is-sidebar is-sidebar-min'
                : 'is-sidebar is-sidebar-max'
        }
      >
        <Routes>
          <>
            {privateRoutes.map((route) => (
              <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path="*" element={<PhotosPage />} />
          </>
        </Routes>
      </div>
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
