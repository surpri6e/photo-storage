import { formatBytesToBytes } from 'bytes-transform'
import { UserInfoApi } from './userInfoApi'
import { StorageReference, UploadMetadata, UploadResult, ref } from 'firebase/storage'
import { storage } from '@renderer/main'
import { IUserInfo } from '@renderer/types/IUserInfo'
import { firebaseConfig } from '@renderer/utils/firebaseConfig'
import { getRandomKey } from 'rkey'

export class StorageApi {
  public static uploadAvatar = async (
    userInfo: IUserInfo,
    uploadFile: (
      storageRef: StorageReference,
      data: Blob | Uint8Array | ArrayBuffer,
      metadata?: UploadMetadata | undefined
    ) => Promise<UploadResult | undefined>,
    photo: File
  ): Promise<void> => {
    const isChecked = this.checkOnRules(photo)

    if (isChecked) {
      const result = await uploadFile(ref(storage, `${userInfo.uid}.png`), photo, {
        contentType: 'image/png'
      })

      if (result) {
        await UserInfoApi.changeUserAvatar(
          userInfo,
          `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${userInfo.uid}.png?alt=media`
        )
      }
    }
  }

  public static uploadPhoto = async (
    userInfo: IUserInfo,
    uploadFile: (
      storageRef: StorageReference,
      data: Blob | Uint8Array | ArrayBuffer,
      metadata?: UploadMetadata | undefined
    ) => Promise<UploadResult | undefined>,
    photo: File
  ): Promise<void> => {
    const isChecked = this.checkOnRules(photo)
    const randomId = getRandomKey(30, 'all')

    if (isChecked) {
      const result = await uploadFile(ref(storage, `${userInfo.uid}/${randomId}.png`), photo, {
        contentType: 'image/png'
      })

      if (result) {
        await UserInfoApi.addNewphoto(
          userInfo,
          `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${userInfo.uid}%2F${randomId}.png?alt=media`
        )
      }
    }
  }

  private static checkOnRules = (photo: File): boolean => {
    if (
      (photo && photo.size > formatBytesToBytes(3, 'MB')) ||
      (photo && photo.type !== 'image/png' && photo.type !== 'image/jpeg')
    ) {
      return false
    }

    return true
  }
}
