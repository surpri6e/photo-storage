import StorageApi from '@renderer/api/storageApi'
import { UserContext } from '@renderer/context/UserContext'
import { TFilesUploadErrors } from '@renderer/types/TFilesUploadErrors'
import { useContext, useEffect, useState } from 'react'
import { useUploadFile } from 'react-firebase-hooks/storage'

export const useUploadPhotos = (
  photos: FileList | null | undefined
): [boolean, TFilesUploadErrors, boolean] => {
  const [loading, setLoading] = useState(false)
  const [localError, setLocalError] = useState<TFilesUploadErrors>('none')
  const [serverError, setServerError] = useState(false)

  const user = useContext(UserContext)

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (photos) {
      StorageApi.uploadPhotos(user, uploadFile, photos, setLoading, setLocalError, setServerError)
    }
  }, [photos])

  return [loading, localError, serverError]
}
