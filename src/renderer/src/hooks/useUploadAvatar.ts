import StorageApi from '@renderer/api/storageApi'
import { UserContext } from '@renderer/context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { useUploadFile } from 'react-firebase-hooks/storage'

export const useUploadAvatar = (avatar: File | undefined): [boolean, boolean, boolean] => {
  const [loading, setLoading] = useState(false)
  const [localError, setLocalError] = useState(false)
  const [serverError, setServerError] = useState(false)

  const user = useContext(UserContext)

  const [uploadFile] = useUploadFile()

  useEffect(() => {
    if (avatar && user.userInfo) {
      StorageApi.uploadAvatar(user, uploadFile, avatar, setLoading, setLocalError, setServerError)
    }
  }, [avatar])

  return [loading, localError, serverError]
}
