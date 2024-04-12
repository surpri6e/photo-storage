export interface IUserInfo {
  basicEmail: string
  vipStatus: boolean
  id: string
  dateOfCreate: string
  images: IUserInfoImage[]
  albums: IUserInfoAlbums[]
}

// commets: string[]
export interface IUserInfoImage {
  url: string
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
