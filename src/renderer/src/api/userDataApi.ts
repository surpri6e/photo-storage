import { db } from '@renderer/main'
import { IUserInfo } from '@renderer/types/IUserInfo'
import { IUserSettings } from '@renderer/types/IUserSettings'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { doc, setDoc } from 'firebase/firestore'
import { getRandomKey } from 'rkey'

export const createNewUser = async (email: string, uid: string): Promise<void> => {
  const newUser: IUserInfo = {
    vipStatus: false,
    firstEmail: email,
    id: getRandomKey(30, 'numbers'),
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
    sidebar: 'all'
  }

  await setDoc(doc(db, 'users', uid), newUser)
  await setDoc(doc(db, 'settings', uid), newSettings)
}
