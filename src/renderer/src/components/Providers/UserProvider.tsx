import UserInfoApi from '@renderer/api/userInfoApi'
import { AuthContext } from '@renderer/context/AuthContext'
import { UserContext } from '@renderer/context/UserContext'
import { db } from '@renderer/main'
import { IUserInfo, IUserSettings, IUserAlbums, IUserImages } from '@renderer/types/IUser'
import { DocumentReference, doc } from 'firebase/firestore'
import React, { FC, useContext, useEffect } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'

interface IUserProvider {
  children: React.ReactNode
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const { user } = useContext(AuthContext)

  const [userInfo, userInfoLoading, userInfoError] = useDocumentData<IUserInfo>(
    doc(db, 'users', user?.uid ? user.uid : ' ') as DocumentReference<IUserInfo>
  )

  const [userSettings, userSettingsLoading, userSettingsError] = useDocumentData<IUserSettings>(
    doc(db, 'settings', user?.uid ? user.uid : ' ') as DocumentReference<IUserSettings>
  )

  const [userImages, userImagesLoading, userImagesError] = useDocumentData<IUserImages>(
    doc(db, 'images', user?.uid ? user.uid : ' ') as DocumentReference<IUserImages>
  )

  const [userAlbums, userAlbumsLoading, userAlbumsError] = useDocumentData<IUserAlbums>(
    doc(db, 'albums', user?.uid ? user.uid : ' ') as DocumentReference<IUserAlbums>
  )

  useEffect(() => {
    if (
      !(userInfoLoading && userSettingsLoading && userImagesLoading && userAlbumsLoading) &&
      !(userInfo && userSettings && userImages && userAlbums)
    ) {
      UserInfoApi.createNewUser(user!.email!, user!.uid)
    }
  }, [userInfoLoading, userSettingsLoading, userImagesLoading, userAlbumsLoading])

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
