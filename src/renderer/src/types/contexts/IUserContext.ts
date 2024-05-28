import { IUserInfo, IUserSettings, IUserImages, IUserAlbums } from '../IUser'

export interface IUserContext {
  userInfo: IUserInfo
  userSettings: IUserSettings
  userImages: IUserImages
  userAlbums: IUserAlbums
}
