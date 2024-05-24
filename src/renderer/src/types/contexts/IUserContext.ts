import { FirestoreError } from 'firebase/firestore'
import { IUserInfo, IUserSettings, IUserImages, IUserAlbums } from '../IUser'

export interface IUserContext {
  userInfo: IUserInfo | undefined
  userSettings: IUserSettings | undefined
  userImages: IUserImages | undefined
  userAlbums: IUserAlbums | undefined

  userInfoLoading: boolean
  userSettingsLoading: boolean
  userImagesLoading: boolean
  userAlbumsLoading: boolean

  userInfoError: FirestoreError | undefined
  userSettingsError: FirestoreError | undefined
  userImagesError: FirestoreError | undefined
  userAlbumsError: FirestoreError | undefined
}
