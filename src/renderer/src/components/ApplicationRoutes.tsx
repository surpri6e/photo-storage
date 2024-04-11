import { AuthContext } from '@renderer/context/AuthContext'
import ErrorPage from '@renderer/pages/ErrorPage/ErrorPage'
import LoadingPage from '@renderer/pages/LoadingPage/LoadingPage'
import PhotosPage from '@renderer/pages/PhotosPage/PhotosPage'
import RegistrationPage from '@renderer/pages/RegistrationPage/RegistrationPage'
import { privateRoutes, publicRoutes } from '@renderer/routes'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

const ApplicationRoutes = (): JSX.Element => {
  const { user, loading, error } = useContext(AuthContext)

  return (
    <Routes>
      {loading && <Route element={<LoadingPage />} path="*" />}
      {error && !loading && <Route element={<ErrorPage errorMessage={error.message} />} path="*" />}

      {user && !error && !loading && (
        <>
          {privateRoutes.map((route) => (
            <Route element={<route.element />} path={route.path} key={route.path} />
          ))}
          <Route path="*" element={<PhotosPage />} />
        </>
      )}

      {!user && !error && !loading && (
        <>
          {publicRoutes.map((route) => (
            <Route element={<route.element />} path={route.path} key={route.path} />
          ))}
          <Route path="*" element={<RegistrationPage />} />
        </>
      )}
    </Routes>
  )
}

export default ApplicationRoutes
