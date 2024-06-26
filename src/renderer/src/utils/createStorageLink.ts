import { firebaseConfig } from './firebaseConfig'

export const createStorageLink = (id: string, number: number): string =>
  `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${id}_${number}.png?alt=media`

export const createStorageLinkWithFolder = (id: string, randomId: string): string =>
  `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${id}%2F${randomId}.png?alt=media`
