export interface IUserInfo {
  firstEmail: string
  vipStatus: boolean
  id: string
  dateOfCreate: string
  images: IUserInfoImage[]
  albums: IUserInfoAlbums[]
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

export interface IUserInfoAlbums {
  images: IUserInfoImage[]
  dateOfCreate: string
  title: string
}
