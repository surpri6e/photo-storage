import { SidebarContext } from '@renderer/context/SidebarContext'
import { useState } from 'react'
import ApplicationRoutes from './ApplicationRoutes'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import '../styles/libs/MainPart.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { auth, db } from '@renderer/main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AuthContext } from '@renderer/context/AuthContext'
import { UserContext } from '@renderer/context/UserContext'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { IUserInfo } from '@renderer/types/IUserInfo'
import { DocumentReference, doc } from 'firebase/firestore'
import { IUserSettings } from '@renderer/types/IUserSettings'

const MainPart = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [doublePassword, setDoublePassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordsEqualsError, setPasswordsEqualsError] = useState(false)

  const [user, loading, error] = useAuthState(auth)

  const [userInfo, userInfoLoading, userInfoError] = useDocumentData<IUserInfo>(
    doc(db, 'users', user?.uid ? user.uid : ' ') as DocumentReference<IUserInfo>
  )

  const [userSettings, userSettingsLoading, userSettingsError] = useDocumentData<IUserSettings>(
    doc(db, 'settings', user?.uid ? user.uid : ' ') as DocumentReference<IUserSettings>
  )

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      <UserContext.Provider
        value={{
          userInfo,
          userSettings,
          userInfoLoading,
          userInfoError,
          userSettingsLoading,
          userSettingsError
        }}
      >
        <RegistrationContext.Provider
          value={{
            email,
            password,
            doublePassword,
            setEmail,
            setPassword,
            setDoublePassword,
            emailError,
            setEmailError,
            passwordError,
            setPasswordError,
            passwordsEqualsError,
            setPasswordsEqualsError
          }}
        >
          <SidebarContext.Provider value={{ isMinWidth, setIsMinWidth }}>
            <Sidebar />
            <Header />

            {/* ${userSettings?.sidebar === 'open' ? 'sidebar--max--opened' : userSettings?.sidebar === 'close' ? 'sidebar--min--closed' : isMinWidth ? 'sidebar--min' : 'sidebar--max'} */}
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
        </RegistrationContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default MainPart
