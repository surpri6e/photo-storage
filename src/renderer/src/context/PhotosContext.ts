import { IPhotosContext } from '@renderer/types/contexts/IPhotosContext'
import { createContext } from 'react'

export const PhotosContext = createContext({} as IPhotosContext)
