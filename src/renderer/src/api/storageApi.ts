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

        const result = await uploadFile(ref(storage, `${user.userInfo.id}.png`), photo, {
          contentType: 'image/png'
        })

        if (result) {
          await UserInfoApi.changeUserAvatar(user, createStorageLink(user.userInfo.id))
        }
      }
    } catch (error: unknown) {
      setServerError(true)
      setTimeout(() => setServerError(false), 1500)
      throwError(error)
    } finally {
      setLoading(false)
    }
  }

  public static uploadPhoto = async (
    user: IUserContext,
    uploadFile: cbUploadFileSignature,
    photo: File,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    const isChecked = this.checkOnRules(photo, setError)
    const { userSettings, userInfo } = user

    try {
      const randomId = getRandomKey(10, 'all')

      if (
        isChecked &&
        formatBytesToBytes(userSettings!.maxStorageMemory, 'MB') - userSettings!.nowStorageMemory >=
          photo.size
      ) {
        const result = await uploadFile(ref(storage, `${userInfo!.id}/${randomId}.png`), photo, {
          contentType: 'image/png'
        })

        if (result) {
          await UserImagesApi.addNewphoto(
            user,
            photo.size,
            randomId,
            createStorageLinkWithFolder(userInfo!.id, randomId)
          )
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }

  public static deletePhotoFromStorage = async (user: IUserContext, id: string): Promise<void> => {
    try {
      deleteObject(ref(storage, `${user.userInfo?.id}/${id}.png`)).then(async () => {
        await UserImagesApi.deletePhoto(user, id)
      })
    } catch (error: unknown) {
      throwError(error)
    }
  }

  private static checkOnRules = (
    photo: File,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ): boolean => {
    if (
      (photo && photo.size > maxSizeOfImage) ||
      (photo && photo.type !== 'image/png' && photo.type !== 'image/jpeg')
    ) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return false
    }

    return true
  }
}
