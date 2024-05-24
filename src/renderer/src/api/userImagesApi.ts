import { db } from '@renderer/main'
import { IUserImages, IUserSettings } from '@renderer/types/IUser'
import { IUserContext } from '@renderer/types/contexts/IUserContext'
import { dateFormatter } from '@renderer/utils/dateFormatter'
import { throwError } from '@renderer/utils/throwError'
import { formatBytes } from 'bytes-transform'
import { doc, setDoc, writeBatch } from 'firebase/firestore'

export default class UserImagesApi {
  public static addNewphoto = async (
    user: IUserContext,
    size: number,
    id: string,
    urlPhoto: string
  ): Promise<void> => {
    const { userSettings, userImages } = user

    try {
      const batch = writeBatch(db)

      batch.set(doc(db, 'images', userSettings!.uid), {
        images: [
          ...userImages!.images,
          {
            dateOfCreate: dateFormatter(new Date()),
            isInTrasher: false,
            isStarred: false,
            title: id,
            urlImage: urlPhoto,
            id: id
          }
        ]
      } as IUserImages)

      batch.set(doc(db, 'settings', userSettings!.uid), {
        ...userSettings!,
        nowStorageMemory:
          userSettings!.nowStorageMemory +
          formatBytes(size, { from: 'B', to: 'MB', fixTo: 8 }).amount
      } as IUserSettings)

      await batch.commit()
    } catch (error: unknown) {
      throwError(error)
    }
  }

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
}
