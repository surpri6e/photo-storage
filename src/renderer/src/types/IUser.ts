export interface IUserInfo {
  firstEmail: string
  vipStatus: boolean
  id: string
  dateOfCreate: string
  uid: string
  urlAvatar: string
}

export interface IUserInfoImage {
  urlImage: string
  title: string
  isStarred: boolean
  isInTrasher: boolean
  dateOfCreate: string
  id: string
}

export interface IUserInfoImages {
  images: IUserInfoImage[]
}

export interface IUserInfoAlbum {
  images: IUserInfoImage[]
  dateOfCreate: string
  title: string
}

export interface IUserInfoAlbums {
  albums: IUserInfoAlbum[]
}

export interface IUserSettings {
  maxStorageMemory: TMaxStorageMemory
  sidebar: TUserSettingsSidebar
  showTitlesOfImages: boolean
  nowStorageMemory: number
  verifyEmail: boolean
}

export type TUserSettingsSidebar = 'open' | 'close' | 'all'
export type TMaxStorageMemory = 0 | 100 | 500
