export interface IUserInfo {
  firstEmail: string
  vipStatus: boolean
  id: string
  dateOfCreate: string
  urlAvatar: [string, number]
}

export interface IUserImage {
  urlImage: string
  title: string
  isStarred: boolean
  isInTrasher: boolean
  dateOfCreate: string
  id: string
  size: number
}

export interface IUserImages {
  images: IUserImage[]
}

export interface IUserAlbum {
  images: IUserImage[]
  dateOfCreate: string
  title: string
}

export interface IUserAlbums {
  albums: IUserAlbum[]
}

export interface IUserSettings {
  maxStorageMemory: TMaxStorageMemory
  sidebar: TUserSettingsSidebar
  showTitlesOfImages: boolean
  nowStorageMemory: number
  verifyEmail: boolean
  uid: string
  isDarkTheme: boolean
}

export interface IUserData {
  userInfo: IUserInfo
  userSettings: IUserSettings
}

export type TUserSettingsSidebar = 'open' | 'close' | 'all'
export type TMaxStorageMemory = 0 | 100 | 500
