import { ISidebarCard } from '@renderer/types/ISidebarCard'
import photos from '../images/sidebar/photos.png'
import albums from '../images/sidebar/albums.png'
import starred from '../images/sidebar/starred.png'
import trasher from '../images/sidebar/trasher.png'
import { albumsPath, photosPath, starredPath, trasherPath } from './paths'

export const sidebarCards: ISidebarCard[] = [
  { image: photos, name: 'Фото', path: photosPath },
  { image: albums, name: 'Альбомы', path: albumsPath },
  { image: starred, name: 'Избранное', path: starredPath },
  { image: trasher, name: 'Корзина', path: trasherPath }
]
