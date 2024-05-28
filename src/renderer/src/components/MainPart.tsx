import '../styles/libs/MainPart.scss'
import AuthProvider from './Providers/AuthProvider'
import UserProvider from './Providers/UserProvider'

const MainPart = (): JSX.Element => {
  return (
    <AuthProvider>
      <UserProvider />
    </AuthProvider>
  )
}

export default MainPart
