import { db } from '@renderer/main'
import { IUserInfo, IUserAlbums, IUserImages } from '@renderer/types/IUser'
import { IUserSettings } from '@renderer/types/IUser'
import { IUserContext } from '@renderer/types/contexts/IUserContext'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { errorTimeout } from '@renderer/utils/errorsTimeout'
import { throwError } from '@renderer/utils/throwError'
import { validateEmail } from '@renderer/utils/validateEmail'
import { doc, setDoc, writeBatch } from 'firebase/firestore'
import { getRandomKey } from 'rkey'

interface IUpdaterUserData {
  value: string
  cbfunction: (value: string) => Promise<boolean>
  setValue: React.Dispatch<React.SetStateAction<string>>
  setValueError: React.Dispatch<React.SetStateAction<boolean>>
}

export default class UserInfoApi {
  public static createNewUser = async (email: string, uid: string): Promise<boolean> => {
    try {
      const batch = writeBatch(db)

      const newUser: IUserInfo = {
        vipStatus: false,
        firstEmail: email,
        id: getRandomKey(10, 'all'),
        dateOfCreate: dateFormatter(new Date()),
        urlAvatar: ['', 0]
      }

      const newSettings: IUserSettings = {
        maxStorageMemory: 0,
        nowStorageMemory: 0,
        showTitlesOfImages: true,
        sidebar: 'all',
        verifyEmail: false,
        uid,
        isDarkTheme: false
      }

      const newImages: IUserImages = {
        images: []
      }

      const newAlbums: IUserAlbums = {
        albums: []
      }

      batch.set(doc(db, 'users', uid), newUser)
      batch.set(doc(db, 'settings', uid), newSettings)
      batch.set(doc(db, 'images', uid), newImages)
      batch.set(doc(db, 'albums', uid), newAlbums)

      await batch.commit()

      return true
    } catch (error: unknown) {
      throwError(error)
    }

    return false
  }

  public static updateUserEmail = async (updaterData: IUpdaterUserData): Promise<boolean> => {
    const { cbfunction, setValue, setValueError, value } = updaterData

    if (value.length < 5 || !validateEmail(value)) {
      errorTimeout(setValueError, 1000)
    }

    try {
      if (!(value.length < 5 || !validateEmail(value))) {
        const result = await cbfunction(value)

        if (result) {
          setValue('')
          setValueError(false)
          return true
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }

    return false
  }

  public static updateUserPassword = async (updaterData: IUpdaterUserData): Promise<boolean> => {
    const { cbfunction, setValue, setValueError, value } = updaterData

    if (value.length < 6) {
      errorTimeout(setValueError, 1000)
    }

    try {
      if (!(value.length < 6)) {
        const result = await cbfunction(value)

        if (result) {
          setValue('')
          setValueError(false)
          return true
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }

    return false
  }

  public static changeUserAvatar = async (user: IUserContext, urlAvatar: string): Promise<void> => {
    try {
      await setDoc(doc(db, 'users', user.userSettings.uid), {
        ...user.userInfo,
        urlAvatar: [urlAvatar, user.userInfo.urlAvatar[1] + 1]
      } as IUserInfo)
    } catch (error: unknown) {
      throwError(error)
    }
  }
}
