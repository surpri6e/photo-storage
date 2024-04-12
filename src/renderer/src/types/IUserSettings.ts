export interface IUserSettings {
  storageMemory: number
  sidebar: TUserSettingsSidebar
  showTitlesOfImages: boolean
}

export type TUserSettingsSidebar = 'open' | 'close' | 'all'
