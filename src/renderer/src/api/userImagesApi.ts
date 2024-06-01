import { db } from '@renderer/main'
import { IUserImage, IUserImages, IUserSettings } from '@renderer/types/IUser'
import { IUserContext } from '@renderer/types/contexts/IUserContext'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { throwError } from '@renderer/utils/throwError'
import { doc, setDoc, writeBatch } from 'firebase/firestore'

export default class UserImagesApi {
  public static addNewPhoto = async (
    user: IUserContext,
    size: number,
    id: string,
    urlPhoto: string,
    copyUserPhotos: IUserImage[]
  ): Promise<void> => {
    const { userSettings } = user

    try {
      const batch = writeBatch(db)

      const newImage: IUserImage = {
        dateOfCreate: dateFormatter(new Date()),
        isInTrasher: false,
        isStarred: false,
        title: id,
        urlImage: urlPhoto,
        id,
        size
      }

      batch.set(doc(db, 'images', userSettings.uid), {
        images: [...copyUserPhotos, newImage]
      } as IUserImages)

      copyUserPhotos.push(newImage)

      batch.set(doc(db, 'settings', userSettings.uid), {
        ...userSettings,
        nowStorageMemory: userSettings.nowStorageMemory + size
      } as IUserSettings)

      await batch.commit()
    } catch (error: unknown) {
      throwError(error)
    }
  }

  // ===================================

  public static changeLikeForPhoto = async (user: IUserContext, id: string): Promise<void> => {
    const { userImages, userSettings } = user

    let index = 0
    const image = userImages!.images.find((image, ind) => {
      if (image.id === id) {
        index = ind
        return true
      }

      return false
    })

    try {
      if (image) {
        userImages!.images[index].isStarred = !userImages!.images[index].isStarred

        await setDoc(doc(db, 'images', userSettings!.uid), {
          images: userImages!.images
        } as IUserImages)
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }

  // ===========================================

  public static changeTrashForPhoto = async (user: IUserContext, id: string): Promise<void> => {
    const { userImages, userSettings } = user

    let index = 0
    const image = userImages!.images.find((image, ind) => {
      if (image.id === id) {
        index = ind
        return true
      }

      return false
    })

    try {
      if (image) {
        userImages!.images[index].isInTrasher = !userImages!.images[index].isInTrasher
        userImages!.images[index].isStarred = false

        await setDoc(doc(db, 'images', userSettings!.uid), {
          images: userImages!.images
        } as IUserImages)
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }

  public static deletePhoto = async (user: IUserContext, id: string): Promise<void> => {
    const { userImages, userSettings } = user

    try {
      const batch = writeBatch(db)

      batch.set(doc(db, 'images', userSettings!.uid), {
        images: userImages!.images.filter((image) => !(image.id === id))
      } as IUserImages)

      batch.set(doc(db, 'settings', userSettings!.uid), {
        ...userSettings!,
        nowStorageMemory:
          userSettings!.nowStorageMemory - userImages!.images.find((image) => image.id === id)!.size
      } as IUserSettings)

      await batch.commit()
    } catch (error: unknown) {
      throwError(error)
    }
  }

  public static changeNameForPhoto = async (
    user: IUserContext,
    id: string,
    newName: string
  ): Promise<void> => {
    const { userImages, userSettings } = user

    let index = 0
    const image = userImages!.images.find((image, ind) => {
      if (image.id === id) {
        index = ind
        return true
      }

      return false
    })

    try {
      if (image) {
        userImages!.images[index].title = newName

        await setDoc(doc(db, 'images', userSettings!.uid), {
          images: userImages!.images
        } as IUserImages)
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }
}
