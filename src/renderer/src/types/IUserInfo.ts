export interface IUserInfo {
  basicEmail: string
  vipStatus: boolean
  id: string
  dateOfCreate: string
  images: IUserInfoImage[]
  albums: IUserInfoAlbums[]
  uid: string
  urlAvatar: string | undefined
}

export interface IUserInfoImage {
  urlImage: string
  title: string
  isLiked: boolean
  isInTrasher: boolean
  dateOfCreate: string
}

export interface IUserInfoAlbums {
  images: IUserInfoImage[]
  dateOfCreate: string
  title: string
}
