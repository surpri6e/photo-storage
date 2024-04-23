import { db } from '@renderer/main'
import { IUserInfo } from '@renderer/types/IUserInfo'
import { IUserSettings } from '@renderer/types/IUserSettings'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { validateEmail } from '@renderer/utils/validateEmail'
import { doc, setDoc } from 'firebase/firestore'
import { getRandomKey } from 'rkey'

export class UserInfoApi {
  public static createNewUser = async (email: string, uid: string): Promise<void> => {
    const newUser: IUserInfo = {
      vipStatus: false,
      firstEmail: email,
      id: getRandomKey(5, 'all'),
      images: [],
      albums: [],
      dateOfCreate: dateFormatter(new Date()),
      urlAvatar: '',
      uid
    }

    const newSettings: IUserSettings = {
      maxStorageMemory: 0,
      nowStorageMemory: 0,
      showTitlesOfImages: true,
      sidebar: 'all',
      verifyEmail: false
    }

    await setDoc(doc(db, 'users', uid), newUser)
    await setDoc(doc(db, 'settings', uid), newSettings)
  }

  public static updateUserEmail = async (
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setEmailError: React.Dispatch<React.SetStateAction<boolean>>,
    cbfunction: (email: string) => Promise<boolean>
  ): Promise<boolean> => {
    if (email.length < 5 || !validateEmail(email)) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 1000)
    }

    if (!(email.length < 5 || !validateEmail(email))) {
      const result = await cbfunction(email)

      if (result) {
        setEmail('')
        setEmailError(false)
        return true
      }
    }

    return false
  }

  public static updateUserPassword = async (
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setPasswordError: React.Dispatch<React.SetStateAction<boolean>>,
    cbfunction: (password: string) => Promise<boolean>
  ): Promise<boolean> => {
    if (password.length < 6) {
      setPasswordError(true)
      setTimeout(() => setPasswordError(false), 1000)
    }

    if (!(password.length < 6)) {
      const result = await cbfunction(password)

      if (result) {
        setPassword('')
        setPasswordError(false)
        return true
      }
    }

    return false
  }
}
