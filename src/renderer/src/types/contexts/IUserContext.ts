import { FirestoreError } from 'firebase/firestore'
import { IUserInfo, IUserSettings, IUserInfoImages, IUserInfoAlbums } from '../IUser'

export interface IUserContext {
  userInfo: IUserInfo | undefined
  userSettings: IUserSettings | undefined
  userImages: IUserInfoImages | undefined
  userAlbums: IUserInfoAlbums | undefined

  userInfoLoading: boolean
  userSettingsLoading: boolean
  userImagesLoading: boolean
  userAlbumsLoading: boolean

  userInfoError: FirestoreError | undefined
  userSettingsError: FirestoreError | undefined
  userImagesError: FirestoreError | undefined
  userAlbumsError: FirestoreError | undefined
}
