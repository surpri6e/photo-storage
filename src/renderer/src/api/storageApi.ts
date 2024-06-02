import { formatBytesToBytes } from 'bytes-transform'
import UserInfoApi from './userInfoApi'
import { StorageReference, UploadMetadata, UploadResult, deleteObject, ref } from 'firebase/storage'
import { storage } from '@renderer/main'
import { getRandomKey } from 'rkey'
import { createStorageLink, createStorageLinkWithFolder } from '@renderer/utils/createStorageLink'
import { throwError } from '@renderer/utils/throwError'
import UserImagesApi from './userImagesApi'
import { maxSizeOfImage } from '@renderer/utils/constants'
import { IUserContext } from '@renderer/types/contexts/IUserContext'
import { errorTimeout } from '@renderer/utils/errorsTimeout'
import { TFilesUploadErrors } from '@renderer/types/TFilesUploadErrors'

export type cbUploadFileSignature = (
  storageRef: StorageReference,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata | undefined
) => Promise<UploadResult | undefined>

export default class StorageApi {
  public static uploadAvatar = async (
    user: IUserContext,
    uploadFile: cbUploadFileSignature,
    photo: File,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setLocalError: React.Dispatch<React.SetStateAction<boolean>>,
    setServerError: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    const isChecked = this.checkOnRules(photo, setLocalError)

    try {
      if (isChecked) {
        setLoading(true)

        const result = await uploadFile(
          ref(storage, `${user.userInfo.id}_${user.userInfo.urlAvatar[1]}.png`),
          photo,
          {
            contentType: 'image/png'
          }
        )

        if (user.userInfo.urlAvatar[1] >= 1) {
          await deleteObject(
            ref(storage, `${user.userInfo.id}_${user.userInfo.urlAvatar[1] - 1}.png`)
          )
        }

        if (result) {
          await UserInfoApi.changeUserAvatar(
            user,
            createStorageLink(user.userInfo.id, user.userInfo.urlAvatar[1])
          )
        }
      }
    } catch (error: unknown) {
      errorTimeout(setServerError, 1500)
      throwError(error)
    } finally {
      setLoading(false)
    }
  }

  // ====================================

  public static uploadPhotos = async (
    user: IUserContext,
    uploadFile: cbUploadFileSignature,
    photos: FileList,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setLocalError: React.Dispatch<React.SetStateAction<TFilesUploadErrors>>,
    setServerError: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    const { userSettings, userInfo } = user
    let globalSizeOfPhotos = 0

    for (let i = 0; i < photos.length; i++) {
      if (
        (photos[i] && photos[i].size > maxSizeOfImage) ||
        (photos[i] && photos[i].type !== 'image/png' && photos[i].type !== 'image/jpeg')
      ) {
        setLocalError('file')
        setTimeout(() => setLocalError('none'), 1500)
        return
      }

      globalSizeOfPhotos += photos[i].size
    }

    if (
      formatBytesToBytes(userSettings.maxStorageMemory, 'MB') - userSettings.nowStorageMemory <=
      globalSizeOfPhotos
    ) {
      setLocalError('size')
      setTimeout(() => setLocalError('none'), 1500)
      return
    }

    try {
      setLoading(true)

      const copyUserPhotos = user.userImages.images
      let copyStorageMemory = user.userSettings.nowStorageMemory

      for (let i = 0; i < photos.length; i++) {
        const randomId = getRandomKey(10, 'all')

        const result = await uploadFile(ref(storage, `${userInfo.id}/${randomId}.png`), photos[i], {
          contentType: 'image/png'
        })

        if (result) {
          await UserImagesApi.addNewPhoto(
            user,
            photos[i].size,
            randomId,
            createStorageLinkWithFolder(userInfo.id, randomId),
            copyUserPhotos,
            copyStorageMemory
          )
        }

        copyStorageMemory += photos[i].size
      }
    } catch (error: unknown) {
      errorTimeout(setServerError, 1500)
      throwError(error)
    } finally {
      setLoading(false)
    }
  }

  // =================================

  public static deletePhotoFromStorage = async (user: IUserContext, id: string): Promise<void> => {
    try {
      deleteObject(ref(storage, `${user.userInfo.id}/${id}.png`)).then(async () => {
        await UserImagesApi.deletePhoto(user, id)
      })
    } catch (error: unknown) {
      throwError(error)
    }
  }

  // ================================

  private static checkOnRules = (
    photo: File,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ): boolean => {
    if (
      (photo && photo.size > maxSizeOfImage) ||
      (photo && photo.type !== 'image/png' && photo.type !== 'image/jpeg')
    ) {
      errorTimeout(setError, 1500)
      return false
    }

    return true
  }
}
