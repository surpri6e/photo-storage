import { db } from '@renderer/main'
import { IUserInfo, IUserSettings, TUserSettingsSidebar } from '@renderer/types/IUser'
import { doc, setDoc } from 'firebase/firestore'

interface IUserInfoAndSettings {
  userInfo: IUserInfo
  userSettings: IUserSettings
}

export class UserSettingsApi {
  public static updateImageSetting = async (settings: IUserInfoAndSettings): Promise<void> => {
    await setDoc(doc(db, 'settings', settings.userInfo.uid), {
      ...settings.userSettings,
      showTitlesOfImages: !settings.userSettings.showTitlesOfImages
    } as IUserSettings)
  }

  public static updateSidebarSetting = async (
    settings: IUserInfoAndSettings,
    newSidebarSetting: TUserSettingsSidebar
  ): Promise<void> => {
    await setDoc(doc(db, 'settings', settings.userInfo.uid), {
      ...settings.userSettings,
      sidebar: newSidebarSetting
    } as IUserSettings)
  }

  public static verifyUserEmail = async (settings: IUserInfoAndSettings): Promise<void> => {
    await setDoc(doc(db, 'settings', settings.userInfo.uid), {
      ...settings.userSettings,
      maxStorageMemory: 100,
      verifyEmail: true
    } as IUserSettings)
  }
}
