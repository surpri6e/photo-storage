import '../styles/libs/MainPart.scss'
import AuthProvider from './Providers/AuthProvider'
import UserProvider from './Providers/UserProvider'
import RegistrationProvider from './Providers/RegistrationProvider'
import SidebarProvider from './Providers/SidebarProvider'

const MainPart = (): JSX.Element => {
  return (
    <AuthProvider>
      <UserProvider>
        <RegistrationProvider>
          <SidebarProvider />
        </RegistrationProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default MainPart
