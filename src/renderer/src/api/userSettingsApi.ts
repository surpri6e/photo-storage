import { db } from '@renderer/main'
import { IUserSettings, TUserSettingsSidebar } from '@renderer/types/IUser'
import { doc, setDoc } from 'firebase/firestore'

export default class UserSettingsApi {
  public static updateImageSetting = async (userSettings: IUserSettings): Promise<void> => {
    await setDoc(doc(db, 'settings', userSettings.uid), {
      ...userSettings,
      showTitlesOfImages: !userSettings.showTitlesOfImages
    } as IUserSettings)
  }

  public static updateSidebarSetting = async (
    userSettings: IUserSettings,
    newSidebarSetting: TUserSettingsSidebar
  ): Promise<void> => {
    await setDoc(doc(db, 'settings', userSettings.uid), {
      ...userSettings,
      sidebar: newSidebarSetting
    } as IUserSettings)
  }

  public static verifyUserEmail = async (userSettings: IUserSettings): Promise<void> => {
    await setDoc(doc(db, 'settings', userSettings.uid), {
      ...userSettings,
      maxStorageMemory: 100,
      verifyEmail: true
    } as IUserSettings)
  }
}
