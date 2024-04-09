import RegistrationPage from '@renderer/pages/RegistrationPage/RegistrationPage'
import { privateRoutes, publicRoutes } from '@renderer/routes'
import { Route, Routes } from 'react-router-dom'

const ApplicationRoutes = (): JSX.Element => {
  const isReg = false // useContext
  return (
    <Routes>
      {isReg &&
        privateRoutes.map((route) => (
          <Route element={<route.element />} path={route.path} key={route.path} />
        ))}
      {!isReg &&
        publicRoutes.map((route) => (
          <Route element={<route.element />} path={route.path} key={route.path} />
        ))}

      <Route path="*" element={<RegistrationPage />} />
      {/* add *'routes */}
    </Routes>
  )
}

export default ApplicationRoutes
