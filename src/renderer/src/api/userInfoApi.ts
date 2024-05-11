import { db } from '@renderer/main'
import { IUserInfo, IUserInfoAlbums, IUserInfoImages } from '@renderer/types/IUser'
import { IUserSettings } from '@renderer/types/IUser'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { validateEmail } from '@renderer/utils/validateEmail'
import { doc, setDoc, writeBatch } from 'firebase/firestore'
import { getRandomKey } from 'rkey'

export class UserInfoApi {
  public static createNewUser = async (email: string, uid: string): Promise<void> => {
    const batch = writeBatch(db)

    const newUser: IUserInfo = {
      vipStatus: false,
      firstEmail: email,
      id: getRandomKey(10, 'all'),
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

    const newImages: IUserInfoImages = {
      images: []
    }

    const newAlbums: IUserInfoAlbums = {
      albums: []
    }

    batch.set(doc(db, 'users', uid), newUser)
    batch.set(doc(db, 'settings', uid), newSettings)
    batch.set(doc(db, 'images', uid), newImages)
    batch.set(doc(db, 'albums', uid), newAlbums)

    await batch.commit()
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

  public static changeUserAvatar = async (
    userInfo: IUserInfo,
    urlAvatar: string
  ): Promise<void> => {
    await setDoc(doc(db, 'users', userInfo.uid), {
      ...userInfo,
      urlAvatar
    } as IUserInfo)
  }

  public static addNewphoto = async (
    userInfo: IUserInfo,
    userSettings: IUserSettings,
    formattedSize: number,
    id: string,
    urlPhoto: string
  ): Promise<void> => {
    await setDoc(doc(db, 'users', userInfo.uid), {
      ...userInfo,
      images: [
        ...userInfo.images,
        {
          dateOfCreate: dateFormatter(new Date()),
          isInTrasher: false,
          isStarred: false,
          title: id,
          urlImage: urlPhoto,
          id: id
        }
      ]
    } as IUserInfo)
    await setDoc(doc(db, 'settings', userInfo.uid), {
      ...userSettings,
      nowStorageMemory: userSettings.nowStorageMemory + formattedSize
    } as IUserSettings)
  }

  public static changeLikeForPhoto = async (userInfo: IUserInfo, id: string): Promise<void> => {
    let index = 0
    const image = userInfo.images.find((image, ind) => {
      if (image.id === id) {
        index = ind
        return true
      }

      return false
    })

    if (image) {
      userInfo.images[index].isStarred = !userInfo.images[index].isStarred

      await setDoc(doc(db, 'users', userInfo.uid), {
        ...userInfo,
        images: userInfo.images
      } as IUserInfo)
    }
  }
}
