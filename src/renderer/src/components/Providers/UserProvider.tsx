import UserInfoApi from '@renderer/api/userInfoApi'
import { AuthContext } from '@renderer/context/AuthContext'
import { UserContext } from '@renderer/context/UserContext'
import { db } from '@renderer/main'
import { IUserInfo, IUserSettings, IUserAlbums, IUserImages } from '@renderer/types/IUser'
import { DocumentReference, doc } from 'firebase/firestore'
import React, { FC, useContext, useEffect } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import Loader from '../Loader/Loader'
import LoadingPage from '@renderer/pages/LoadingPage/LoadingPage'
import ErrorPage from '@renderer/pages/ErrorPage/ErrorPage'

interface IUserProvider {
  children: React.ReactNode
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
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

  return (
    <UserContext.Provider
      value={{
        userInfo,
        userSettings,
        userImages,
        userAlbums,

        userInfoLoading,
        userInfoError,

        userSettingsLoading,
        userSettingsError,

        userImagesLoading,
        userImagesError,

        userAlbumsLoading,
        userAlbumsError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
