export interface IUserSettings {
  maxStorageMemory: TMaxStorageMemory
  sidebar: TUserSettingsSidebar
  showTitlesOfImages: boolean
}

export type TUserSettingsSidebar = 'open' | 'close' | 'all'
export type TMaxStorageMemory = 0 | 100 | 500
