export interface IUserSettings {
  maxStorageMemory: TMaxStorageMemory
  sidebar: TUserSettingsSidebar
  showTitlesOfImages: boolean
  nowStorageMemory: number
  verifyEmail: boolean
}

export type TUserSettingsSidebar = 'open' | 'close' | 'all'
export type TMaxStorageMemory = 0 | 100 | 500
