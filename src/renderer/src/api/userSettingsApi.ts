import { db } from '@renderer/main'
import { IUserInfo } from '@renderer/types/IUserInfo'
import { IUserSettings, TUserSettingsSidebar } from '@renderer/types/IUserSettings'
import { doc, setDoc } from 'firebase/firestore'

export class UserSettingsApi {
  public static updateImageSetting = async (
    userInfo: IUserInfo,
    userSettings: IUserSettings
  ): Promise<void> => {
    await setDoc(doc(db, 'settings', userInfo.uid), {
      ...userSettings,
      showTitlesOfImages: !userSettings.showTitlesOfImages
    } as IUserSettings)
  }

  public static updateSidebarSetting = async (
    userInfo: IUserInfo,
    userSettings: IUserSettings,
    newSidebarSetting: TUserSettingsSidebar
  ): Promise<void> => {
    await setDoc(doc(db, 'settings', userInfo.uid), {
      ...userSettings,
      sidebar: newSidebarSetting
    } as IUserSettings)
  }

  public static verifyUserEmail = async (
    userInfo: IUserInfo,
    userSettings: IUserSettings
  ): Promise<void> => {
    await setDoc(doc(db, 'settings', userInfo.uid), {
      ...userSettings,
      maxStorageMemory: 100,
      verifyEmail: true
    } as IUserSettings)
  }
}
