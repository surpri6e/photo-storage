import { FirestoreError } from 'firebase/firestore'
import { IUserInfo } from '../IUserInfo'
import { IUserSettings } from '../IUserSettings'

export interface IUserContext {
  userInfo: IUserInfo | undefined
  userSettings: IUserSettings | undefined

  userInfoLoading: boolean
  userSettingsLoading: boolean

  userInfoError: FirestoreError | undefined
  userSettingsError: FirestoreError | undefined
}
