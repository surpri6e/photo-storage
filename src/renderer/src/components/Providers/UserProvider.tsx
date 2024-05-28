import UserInfoApi from '@renderer/api/userInfoApi'
import { AuthContext } from '@renderer/context/AuthContext'
import { UserContext } from '@renderer/context/UserContext'
import { db } from '@renderer/main'
import { IUserInfo, IUserSettings, IUserAlbums, IUserImages } from '@renderer/types/IUser'
import { DocumentReference, doc } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import LoadingPage from '@renderer/pages/LoadingPage/LoadingPage'
import ErrorPage from '@renderer/pages/ErrorPage/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '@renderer/routes'
import RegistrationPage from '@renderer/pages/RegistrationPage/RegistrationPage'
import RegistrationProvider from './RegistrationProvider'
import SidebarProvider from './SidebarProvider'

const UserProvider = (): JSX.Element => {
  const { user, loading, error } = useContext(AuthContext)

  const [userInfo, userInfoLoading, userInfoError] = useDocumentData<IUserInfo>(
    doc(db, 'users', user ? user.uid : ' ') as DocumentReference<IUserInfo>
  )

  const [userSettings, userSettingsLoading, userSettingsError] = useDocumentData<IUserSettings>(
    doc(db, 'settings', user ? user.uid : ' ') as DocumentReference<IUserSettings>
  )

  const [userImages, userImagesLoading, userImagesError] = useDocumentData<IUserImages>(
    doc(db, 'images', user ? user.uid : ' ') as DocumentReference<IUserImages>
  )

  const [userAlbums, userAlbumsLoading, userAlbumsError] = useDocumentData<IUserAlbums>(
    doc(db, 'albums', user ? user.uid : ' ') as DocumentReference<IUserAlbums>
  )

  const loadings =
    loading || userInfoLoading || userSettingsLoading || userImagesLoading || userAlbumsLoading

  const errors = error || userInfoError || userSettingsError || userImagesError || userAlbumsError

  useEffect(() => {
    if (user && !loadings && !(userInfo && userSettings && userImages && userAlbums)) {
      UserInfoApi.createNewUser(user.email!, user.uid)
    }
  }, [userInfo, userSettings, userImages, userAlbums])

  if (loadings) {
    return <LoadingPage />
  }

  if (errors) {
    return (
      <ErrorPage
        errorMessage={
          error
            ? error.message
            : userInfoError
              ? userInfoError.message
              : userSettingsError
                ? userSettingsError.message
                : userImagesError
                  ? userImagesError.message
                  : userAlbumsError
                    ? userAlbumsError.message
                    : 'проверьте подключение к интернету'
        }
      />
    )
  }

  if (user && userInfo && userSettings && userImages && userAlbums) {
    return (
      <UserContext.Provider
        value={{
          userInfo,
          userSettings,
          userImages,
          userAlbums
        }}
      >
        <RegistrationProvider>
          <SidebarProvider />
        </RegistrationProvider>
      </UserContext.Provider>
    )
  }

  return (
    <RegistrationProvider>
      <Routes>
        {!user && (
          <>
            {publicRoutes.map((route) => (
              <Route element={<route.element />} path={route.path} key={route.path} />
            ))}
            <Route path="*" element={<RegistrationPage />} />
          </>
        )}
      </Routes>
    </RegistrationProvider>
  )
}

export default UserProvider
